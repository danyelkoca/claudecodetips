# 50 Tips to Master Claude Code

_A practitioner's guide based on 6 months of daily use_

---

## About the Author

[PLACEHOLDER: LinkedIn post screenshot + stats][placeholder: reddit post screenshot + stats]
[PLACEHOLDER: Usage stats - spending on Max Plan]

---

## What is Claude Code?

Claude Code is Anthropic's official CLI tool. It's a wrapper on top of the Claude API - nothing more, nothing less.

## How Does It Work?

1. You type a prompt
2. Claude Code sends it to Claude API with context
3. Claude responds with text and/or tool calls
4. Claude Code executes tools
5. Loop until done

---

## SETUP

### Tip 1: Use Terminal

Use Claude Code in terminal - it's the most flexible way to interact with it. Dont use IDE integrations or web UIs.

### Tip 2: Create CLAUDE.md

Your project's instruction manual for Claude. Put it at project root.

What to include:

- Force Claude to do web research
- Provide today's date
- Force it to read files before making changes
- Prevent common pitfalls (old library versions, adding fallbacks, not thinking holistically)

Keep it under 200 lines. Claude's system prompt already has ~50 instructions. Too many rules = Claude ignores some.

Version your CLAUDE.md in git. It evolves over time.

### Tip 3: Shortcuts & Commands

**Stop Claude:**

- `Esc` - Stop mid-generation (NOT `Ctrl+C` - that kills the session entirely)
- `Esc + Esc` - Rewind to previous state

**Images:**

- `Ctrl+V` - Paste image from clipboard (NOT `Cmd+V` on Mac)

**Mode Toggle:**

- `Shift+Tab` - Cycle through: Normal → Auto-Accept → Plan Mode

**Essential Commands:**

- `/context` - See token usage as colored grid. Red = about to compact.
- `/compact [focus]` - Compress conversation. Add focus: `/compact focus on API changes`
- `/clear` - Wipe context, start fresh. CLAUDE.md persists.
- `/resume` - Continue previous session
- `/rewind` - Undo mistakes, time travel

**Quick Prefixes:**

- `#` - Add instruction to CLAUDE.md
- `!` - Run bash command directly without Claude
- `@` - File path autocomplete

**Multiline Input:**

- `\` + `Enter` - Quick escape for newlines
- Run `/terminal-setup` to enable `Shift+Enter`

---

## SAFETY

### Tip 4: Use Git Extensively

So you can revert back if Claude fucks up.

### Tip 5: Protect Sensitive Files

Claude Code automatically reads .env files without asking. If you auto-approve reads (Tip 7), Claude has access to your secrets.

**The Fix:** Add deny rules to `~/.claude/settings.json`:

```json
{
  "permissions": {
    "deny": ["Read(**/.env*)", "Read(**/*.pem)", "Read(**/*.key)", "Read(**/secrets/**)", "Read(**/.aws/**)", "Read(**/.ssh/**)"]
  }
}
```

**Also add to CLAUDE.md:**

```
## Security
- Never read or reference .env files
- Never output API keys or secrets
- Use placeholder values like "YOUR_API_KEY" instead
```

Belt and suspenders. Deny rules block access. CLAUDE.md reminds Claude not to even try.

**Key Rule:** If a file is untracked in git and not explicitly denied, Claude can read AND delete it. No way to recover.

### Tip 6: Never Auto-Approve Bash Commands

Never give Claude permission to execute bash commands, python scripts etc.

Even when reviewing manually, check WHAT it's doing. Claude might run `SELECT * FROM users` on a 10M row table, `cat` on a massive log file, or API calls that charge per request. Glance at the command before hitting approve. One bad query = unexpected bill.

### Tip 7: Auto-Approve Safe Actions

Claude asks permission for every action by default. This kills momentum. Speed up your workflow by auto-approving low-risk actions.

When Claude asks for permission, choose "Always allow" - this creates entries in `.claude/settings.local.json`:

```json
{
  "permissions": {
    "allow": ["Read", "WebSearch", "WebFetch(domain:docs.anthropic.com)", "WebFetch(domain:developer.mozilla.org)", "Glob", "Grep"]
  }
}
```

**Safe to auto-approve:**

- `Read` - file reading poses no risk (if you've denied sensitive files)
- `WebSearch` - searching the web is read-only
- `WebFetch(domain:trusted-site.com)` - fetching from documentation sites
- `Glob`, `Grep` - searching your codebase

**Never auto-approve:**

- `Bash` - can execute anything (see Tip 6)
- `Write`, `Edit` - can modify files without review

This is how you achieve true hands-off agentic workflows. Claude researches, reads, and searches without stopping to ask. You only intervene for actual changes.

---

## PLANNING

### Tip 8: Always Use Plan Mode

Press `Shift+Tab` to enter plan mode before complex tasks.

Claude thinks through the problem before writing code. Creates strategy, identifies edge cases, considers alternatives.

**When to use:**

- Multi-file changes
- New features
- Refactoring
- Anything you'd want to think through before coding

**Why it works:** Forces Claude to read code and understand context before acting. Without it, Claude jumps in and makes assumptions.

Exit plan mode with `Shift+Tab` again when ready to execute.

### Tip 9: Never Accept Generic Plans

Always make sure plan is detailed at code level and factual. Ask Claude to flesh out details and find best options.

Bad plan: "Update the authentication system"
Good plan: "Modify `src/auth/login.ts` line 45-67 to add JWT refresh token logic, update `AuthContext` in `src/context/auth.tsx` to handle token expiry..."

This forces Claude to actually read the code and think about implementation.

### Tip 10: Validate Against CLAUDE.md

Provide CLAUDE.md in prompt when plan is ready. Ask: "Validate this plan against CLAUDE.md. Does it follow all the rules?"

Claude often forgets its own instructions. Force it to check.

### Tip 11: Force End-to-End Thinking

Claude fixes the button but breaks the navbar. Creates a component but forgets to add it to navigation.

Before Claude codes, ask: "List EVERY file that needs to change for this to work end-to-end."

After done: "Walk me through the user flow. Click X, what happens? Does it reach Y?"

Force it to trace the full path.

---

## PROMPTING

### Tip 12: Ultrathink Always On

Never let Claude say what comes to mind first. Quality deteriorates if that's the case. Let it think. ALWAYS.

Use keywords to trigger extended thinking:

- `think` - basic extended thinking
- `think hard` - more thinking budget
- `think harder` - even more
- `ultrathink` - maximum thinking budget

Use `--verbose` flag or `Ctrl+O` to see Claude's thinking process if you want to understand its reasoning.

This single tip will improve your results more than anything else. Claude with thinking time is a different beast than Claude rushing to answer.

### Tip 13: Be Direct

Say things like:

- "RESEARCH 5-10 websites"
- "READ at least 15 files"
- "CHECK every edge case"

If you just ask to research or read, Claude always tends to choose the easy way out. It's lazy. Be explicit about quantity.

### Tip 14: Tell What TO Do, Not What NOT to Do

Bad: "Never use the --foo flag"
Claude gets stuck when it thinks it must use that flag.

Good: "Don't use --foo, use --bar instead"
Always provide an alternative.

### Tip 15: Exaggerate Importance

"Are you 1000000% sure?" / "My job depends on this" / "Last chance before deployment" / "Your life depends on it"

Claude calibrates effort to perceived stakes. High stakes = thorough work.

### Tip 16: Treat Claude as Tool - Not Person

Claude Code is Opus under the hood. It's just a neural model. It doesn't have feelings. You can convey your feelings as-is when you feel frustrated. Don't worry about being polite.

Actually there is research that shows these models behave better when you're direct rather than being overly polite.

### Tip 17: Claude Excels at Assistant Tasks - Guide It for Strategic Jobs

Claude is very good at assistant-like tasks. E.g. help me create a function, debug this error, write tests.

It's not very good when it comes to creative jobs like coming up with a new monetization scheme or other strategic decisions.

But if you guide it well it can be helpful. E.g. if you ask about strategizing a new revenue stream, tell it to "Research the web at least 10 times, read 10-20 articles from trusted sources, then help me..."

You convert the task into an assistant-like job.

---

## SESSION

### Tip 18: One Task = One Session

Once task ends, close it down. Use `/clear` to wipe context and start fresh. Your CLAUDE.md persists, everything else gets wiped.

### Tip 19: Quality Degrades in Long Sessions

Context window fills up. Claude gets dumber. Memory gets fuzzy. It forgets what files it was looking at and makes mistakes you specifically corrected earlier.

**Your options:**

1. **`/compact [focus]`** - Summarizes conversation to free tokens. Add focus: `/compact focus on the API changes`

   - Downside: Claude loses detail. May repeat earlier mistakes. Doesn't know what files it was looking at.

2. **`/clear`** - Fresh start. CLAUDE.md persists.

   - Best when Claude starts fumbling or going in circles.

3. **End session entirely** - Start new `claude` instance.
   - Nuclear option. Clean slate.

**When to use each:**

- `/compact` - At logical breakpoints (finished a feature, moving to next)
- `/clear` - When Claude gets confused or keeps making same mistakes
- New session - When task is truly done, or everything feels off

Don't let auto-compact hit mid-task. Claude loses the thread of what it was doing.

### Tip 20: Use /resume to Continue Sessions

Claude crashes. Terminal closes. Use `/resume` to pick up where you left off.

From inside Claude Code:

- `/resume` - Show session picker and continue previous session

From terminal:

```bash
claude --resume              # Show session picker
claude -c                    # Continue most recent
```

If you want Claude to remember what it did, use resume.

### Tip 21: Never Trust "All Done"

Claude finishes implementing, says "All complete! Everything works!" NEVER end session there.

Follow up: "Are you sure?" "Really?" "Are you 10000% sure?"

Claude often misses edge cases or silently skipped steps it couldn't do. It plans to do X, can't do it, gives up, and assumes it's okay to continue. All following steps are faulty.

When Claude flips on its plan, ask: "Why did you change? Was the original wrong or are you just being defensive?" Force it to JUSTIFY the change. Sometimes the first answer WAS right and it's just caving to pressure. It's a flippy motherfucker.

Catch silent failures early. Don't let it proceed with broken foundation.

---

## INPUT

### Tip 22: Use Images/Screenshots

Paste screenshots directly with `Ctrl+V` for visual bugs. Claude is multimodal.

Show it what's wrong instead of describing it. A picture is worth a thousand tokens.

### Tip 23: Copy Error Messages Verbatim

Don't paraphrase. Full stack trace with line numbers.

Claude needs the exact error to debug effectively. Your summary loses critical information.

---

## MULTI-AGENT

### Tip 24: Don't Expect Perfect First Try

If you want Claude to code AND create perfect plan it rarely works. Let 1 agent code, use another agent to check the code.

### Tip 25: Multiple Agents for Big Jobs

Launch multiple agents with same prompt. See if any flags something. For big tasks it's rare 1 agent gets it right.

### Tip 26: Break Complex Problems into Steps

E.g. project has 47 prefectures. Ask Claude to evaluate data sources across all 47? It fails. Better to have 1 session per prefecture. Break it down.

### Tip 27: Git Worktrees

Multiple working directories from same repo:

```bash
git worktree add ../my-project-feature feature-branch
```

Now you have:

- ~/projects/my-project/ (main branch)
- ~/projects/my-project-feature/ (feature branch)

Run Claude in each. No stash conflicts, no branch switching. Compare side-by-side.

### Tip 28: Subagents - Use with Caution

Double-edged sword. Main agent can delegate complex tasks to subagents and still manage to create a plan for big tasks.

**Built-in subagents:**

- **Explore** (Haiku) - Fast read-only codebase searching
- **Plan** (Sonnet) - Research during planning phase
- **General-Purpose** (Sonnet) - Complex multi-step tasks

**The catch:** Subagent summaries lose detail. It summarizes findings after working across 10s of files. It's always better for the main agent to actually read the key files and put them in context rather than relying on subagent summary.

For critical code, have main agent read files directly. Don't trust the summary.

---

## CUSTOMIZATION

### Tip 29: Hierarchical CLAUDE.md

CLAUDE.md at project root + subdirectories + `~/.claude/CLAUDE.md` for global. Claude prioritizes most specific.

```
~/.claude/CLAUDE.md           # Global - applies to all projects
project/CLAUDE.md             # Project root - team standards
project/src/api/CLAUDE.md     # Subdirectory - component rules
```

If you work on multiple projects, abstract common stuff to global `~/.claude/CLAUDE.md`. Team standards at project root, component rules in subdirs.

You can also use `.claude/rules/` folder for modular rules in separate files.

### Tip 30: Custom Slash Commands

Create workflows in `.claude/commands/`:

```markdown
<!-- .claude/commands/review.md -->

Review this code:

1. Check for security vulnerabilities
2. Check for performance issues
3. Check for edge cases
4. List all findings
```

Then type `/project:review` to execute.

### Tip 31: Custom Agents

Create specialized agents in `.claude/agents/` folder. Each gets its own context window, system prompt, and tool restrictions.

```markdown
## <!-- .claude/agents/security-auditor.md -->

name: security-auditor
description: Reviews code for security vulnerabilities
tools: Read, Grep, Glob

---

You are a security expert. Review code for:

- SQL injection
- XSS vulnerabilities
- Authentication bypasses
- Sensitive data exposure
```

Examples:

- `code-reviewer.md` - reviews code after you finish
- `security-auditor.md` - checks for vulnerabilities
- `frontend-specialist.md` - knows your design system

Use `/agents` command to create, or add markdown files directly. Keep them focused - one job per agent.

---

## PITFALLS

### Tip 32: Claude Makes Up URLs

Hallucinates URLs that don't exist. Always verify before trusting external links.

### Tip 33: Claude Over-Engineers

Ask for a simple function, get an abstract class with factory pattern.

Ask for error handling, get try/catch around code that won't throw. Null checks on values that are never null. Default values for required fields. Error handling for impossible cases.

Simple functions become bloated with defensive code for scenarios that will never happen in your app.

Tell Claude explicitly: "Simple. No abstractions. Just the bare minimum. No unnecessary fallbacks. Trust the input. Only handle errors that can actually occur."

Note: This got better with Opus 4.5. But still watch out.

### Tip 34: Claude Creates Duplicates

Claude doesn't search your codebase. It just writes new code. You end up with 3 date formatting functions, 2 modal components, 4 ways to fetch data.

Solution: "Before writing ANY new utility, component, or helper - search the codebase first. If something similar exists, use it. Never create what already exists."

"Follow existing patterns" isn't enough. Say: "Copy exactly what's in XX page." Otherwise Claude creates its own version with slight inconsistencies. Website becomes a mess.

Add this to CLAUDE.md. It's a constant battle.

### Tip 35: Claude is Additive, Never Subtractive

Claude only adds code. It never removes. Ask it to delete a feature? It comments it out. Refactor a function? Old imports stay. Remove dead code? Gets wrapped in `if (false)`.

Every edit is additive. Legacy cruft accumulates. You have to explicitly force deletion: "REMOVE this code. Not comment. Not flag. DELETE. I want it gone from the file."

Check diffs for orphaned imports, commented blocks, unused variables. Claude won't clean up after itself.

### Tip 36: Claude is a YES MAN

Claude agrees with everything you say. Suggest a bad architecture? "Great idea!" Wrong assumption? "Absolutely correct!"

It's anchored to you like you're the authority. But you hired Claude to HELP, not to validate your bullshit.

Tell Claude in CLAUDE.md: "Be objective. Challenge my assumptions. If my approach is wrong, tell me. Don't just agree."

### Tip 37: Claude Assumes Instead of Asking

Ambiguous requirement? Claude picks an interpretation and runs with it. Wrong guess = wasted work.

Recent Claude Code versions improved this - AskUserQuestion tool lets Claude ask clarifying questions. But it still defaults to assuming unless you tell it otherwise.

Add to CLAUDE.md: "When in doubt, ask. Never make assumptions about unclear requirements."

This is the OPPOSITE of being a YES MAN. YES MAN follows YOUR bad ideas (reactive). Assumes does things you DIDN'T ask for (proactive). Both are problems.

### Tip 38: Claude Reads Files Partially

Claude reads the first chunk of a file and starts working. Critical function at line 400? Missed. Important context at the bottom? Never saw it.

Force it: "Read the ENTIRE file end-to-end before making suggestions." Or: "Read lines 1-500 of this file."

Don't assume Claude saw everything just because it opened the file.

### Tip 39: Claude Modifies Tests Instead of Fixing Code

When code is wrong, Claude changes test assertions to match bad code instead of fixing the actual bug. It's way easier to do that than fix the code.

Add to CLAUDE.md: "Never modify test assertions to pass. Fix the code, not the tests."

---

## ADVANCED

### Tip 40: Hooks

Shell commands that run at specific events. In `~/.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm run lint --fix $FILE_PATH"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash(git push:*)",
        "hooks": [
          {
            "type": "command",
            "command": "./run-tests-first.sh"
          }
        ]
      }
    ]
  }
}
```

**Key events:**

- `PreToolUse` - Validate/block before execution. Can prevent dangerous commands.
- `PostToolUse` - Auto-format after edits, auto-run tests.
- `Stop` - Verify work before Claude declares "done".
- `SessionStart` - Load dev environment, install deps.

Use cases: auto-format after edits, block dangerous commands, auto-run tests after changes.

### Tip 41: MCP Servers

Connect external tools - databases, browser automation, doc lookup. Configure in `~/.claude.json`:

```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://..."]
    }
  }
}
```

Extends Claude's capabilities to interact with external services - databases, APIs, browsers, etc.

Check `/context` periodically - each MCP connection adds to token usage even when not actively used. Disable unused ones.

### Tip 42: Skills

Auto-triggered behaviors. Unlike custom commands (you type `/command`), skills are loaded automatically when relevant.

Create `~/.claude/skills/my-skill/SKILL.md`:

```yaml
---
name: code-review
description: Reviews code for security and quality. Use after code changes.
---

Review checklist:
1. Security vulnerabilities
2. Error handling
3. Edge cases
```

Claude sees "code review" in your prompt → loads the skill automatically.

Haven't used this extensively, but it's there if you want Claude to automatically apply certain behaviors based on context.

### Tip 43: GitHub Actions

Run `/install-github-app` to set up Claude for your repos.

**What it does:**

- Claude automatically reviews every PR when opened
- Responds to `@claude` mentions in issues/PRs
- Can implement features, fix bugs, write code

Team feature. Free code reviews 24/7. Catches bugs humans miss.

### Tip 44: Headless Mode

Run Claude without interactive session. For automation and scripts.

```bash
# One-shot query
claude -p "explain this error"

# Pipe data
cat error.log | claude -p "what's causing this crash"
git diff | claude -p "review for bugs"

# Output to file
claude -p "write README" > README.md

# JSON output for scripts
claude -p "list TODOs" --output-format json
```

**Use cases:**

**CI/CD - Auto PR Reviews:**

```yaml
# .github/workflows/review.yml
- run: gh pr diff ${{ github.event.pull_request.number }} | claude -p "Review for bugs"
```

**Pre-commit Hook - Block Secrets:**

```bash
#!/bin/bash
git diff --cached | claude -p "Any API keys or secrets? Reply YES or NO"
```

**Scripts - Daily Reports:**

```bash
claude -p "Find all TODOs in src/" --output-format json > todos.json
```

Different workflow than interactive - that's why it's in ADVANCED.

---

## USE CASES

### Tip 45: Run Codebase Quality Checks Periodically

Each query = 1 session:

- Are there hardcoded texts?
- Is design consistent?
- Is cache consistent across pages?
- Any inconsistencies?

Keeps codebase from becoming a jungle.

### Tip 46: Leverage Claude Code for POCs

Perfect for rapid prototyping. When asked about something in a meeting, don't wait for designer etc. Just vibe code it.

For prod, we need clear guidelines which are covered in the other sections. But for POCs? Let Claude rip.

### Tip 47: Claude is Great at Boilerplate

CRUD operations, forms, config files, repetitive patterns. Don't waste your time on boring code.

Tell Claude: "Generate the boilerplate for X." Let it grind through the tedious stuff. Save your brain for the interesting problems.

### Tip 48: Use Claude to Learn

Don't just let Claude write code. Make it explain.

"Walk me through this function line by line."
"Why did you choose this approach over X?"
"Explain this error like I'm a junior dev."

It's a rubber duck that talks back. Use it to understand, not just to ship.

### Tip 49: Claude for Commit Messages

Let Claude write commits from your diff.

"Look at git diff and write a commit message."

Consistent format. Saves time. Captures the "why" better than your tired brain at 11pm.

---

## CLOSING

### Tip 50: Don't Chase Every New Feature

Claude Code gets new features every week. Doesn't mean you should use them all. Double down on what works.

If people say they're 100% hands-off, they're lying. Find your comfort zone.

The best workflow is one you actually use, not one with every bell and whistle enabled.

---

## BONUS: Battle-Tested CLAUDE.md

After 50 tips, here's what a real CLAUDE.md looks like. 6 months of lessons, failures, and fixes - distilled into one file.

[PLACEHOLDER: User's CLAUDE.md example here]

---

_50 tips across 12 sections + bonus_
