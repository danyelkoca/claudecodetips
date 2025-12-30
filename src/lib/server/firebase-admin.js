import admin from 'firebase-admin';
import { initializeFirestore } from 'firebase-admin/firestore';
import {
    SERVICE_ACCOUNT_type,
    SERVICE_ACCOUNT_project_id,
    SERVICE_ACCOUNT_private_key_id,
    SERVICE_ACCOUNT_private_key,
    SERVICE_ACCOUNT_client_email,
    SERVICE_ACCOUNT_client_id,
    SERVICE_ACCOUNT_auth_uri,
    SERVICE_ACCOUNT_token_uri,
    SERVICE_ACCOUNT_auth_provider_x509_cert_url,
    SERVICE_ACCOUNT_client_x509_cert_url,
    SERVICE_ACCOUNT_universe_domain,
} from '$env/static/private';

let _db = null;
let _auth = null;

function getFirebaseApp() {
    if (admin.apps.length) {
        return admin.apps[0];
    }

    // Skip initialization if credentials are placeholders
    if (!SERVICE_ACCOUNT_private_key || SERVICE_ACCOUNT_private_key.includes('placeholder')) {
        console.warn('Firebase credentials not configured - skipping initialization');
        return null;
    }

    const serviceAccount = {
        type: SERVICE_ACCOUNT_type,
        project_id: SERVICE_ACCOUNT_project_id,
        private_key_id: SERVICE_ACCOUNT_private_key_id,
        private_key: SERVICE_ACCOUNT_private_key.replace(/\\n/g, '\n'),
        client_email: SERVICE_ACCOUNT_client_email,
        client_id: SERVICE_ACCOUNT_client_id,
        auth_uri: SERVICE_ACCOUNT_auth_uri,
        token_uri: SERVICE_ACCOUNT_token_uri,
        auth_provider_x509_cert_url: SERVICE_ACCOUNT_auth_provider_x509_cert_url,
        client_x509_cert_url: SERVICE_ACCOUNT_client_x509_cert_url,
        universe_domain: SERVICE_ACCOUNT_universe_domain,
    };

    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        return admin.apps[0];
    } catch (err) {
        console.error('Failed to initialize Firebase:', err.message);
        return null;
    }
}

export function getDb() {
    if (_db) return _db;
    const app = getFirebaseApp();
    if (!app) return null;
    _db = initializeFirestore(app, { preferRest: true });
    return _db;
}

export function getAuth() {
    if (_auth) return _auth;
    const app = getFirebaseApp();
    if (!app) return null;
    _auth = admin.auth();
    return _auth;
}

// Lazy exports
export const db = {
    collection: (name) => {
        const firestore = getDb();
        if (!firestore) {
            return {
                doc: () => ({
                    set: async () => console.warn('Firebase not configured'),
                    get: async () => ({ exists: false, data: () => null })
                })
            };
        }
        return firestore.collection(name);
    }
};

export default admin;
