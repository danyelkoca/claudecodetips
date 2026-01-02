#!/bin/bash
set -e

PROJECT_DIR="/Users/danyelkoca/Desktop/projects/claudecodetips"
PROMPT_FILE="$PROJECT_DIR/scripts/tip-updater-prompt.md"
TEST_MODE=false

if [[ "$1" == "--test" ]]; then
  TEST_MODE=true
fi

# Create logs folder
mkdir -p "$PROJECT_DIR/scripts/logs"

# Process a single tip
process_tip() {
  local TIP=$1
  local TIP_PATH="src/lib/content/tips/en/${TIP}.svx"

  echo "Processing: $TIP"

  TIP_PROMPT=$(cat "$PROMPT_FILE" | sed "s|\[TIP_FILE_PATH\]|$TIP_PATH|g")

  cd "$PROJECT_DIR"

  claude -p "$TIP_PROMPT" \
    --allowedTools "Read,Edit,WebFetch,WebSearch" \
    --output-format text \
    > "$PROJECT_DIR/scripts/logs/${TIP}.txt" 2>&1

  echo "Done: $TIP"
}

export -f process_tip
export PROJECT_DIR PROMPT_FILE

# All tips except bonus (51)
TIPS=(
  "01-use-terminal"
  "02-create-claudemd"
  "03-shortcuts-commands"
  "04-use-git"
  "05-protect-sensitive-files"
  "06-never-auto-approve-bash"
  "07-auto-approve-safe"
  "08-always-plan-mode"
  "09-never-generic-plans"
  "10-validate-claudemd"
  "11-end-to-end-thinking"
  "12-ultrathink"
  "13-be-direct"
  "14-tell-what-to-do"
  "15-exaggerate-importance"
  "16-treat-as-tool"
  "17-guide-strategic-jobs"
  "18-one-task-one-session"
  "19-quality-degrades"
  "20-use-resume"
  "21-never-trust-all-done"
  "22-use-images"
  "23-copy-errors-verbatim"
  "24-dont-expect-perfect"
  "25-multiple-agents"
  "26-break-complex-problems"
  "27-git-worktrees"
  "28-subagents-caution"
  "29-hierarchical-claudemd"
  "30-custom-slash-commands"
  "31-custom-agents"
  "32-claude-makes-up-urls"
  "33-claude-over-engineers"
  "34-claude-creates-duplicates"
  "35-claude-additive"
  "36-claude-yes-man"
  "37-claude-assumes"
  "38-claude-reads-partial"
  "39-claude-modifies-tests"
  "40-hooks"
  "41-mcp-servers"
  "42-skills"
  "43-github-actions"
  "44-headless-mode"
  "45-codebase-quality-checks"
  "46-leverage-for-pocs"
  "47-great-at-boilerplate"
  "48-use-to-learn"
  "49-commit-messages"
  "50-dont-chase-features"
)

# Run tips
if [[ "$TEST_MODE" == true ]]; then
  echo "Test mode: processing first tip only"
  process_tip "${TIPS[0]}"
else
  printf '%s\n' "${TIPS[@]}" | xargs -P 5 -I {} bash -c 'process_tip "$@"' _ {}
fi

echo "Done!"
