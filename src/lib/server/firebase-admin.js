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

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

export const db = initializeFirestore(admin.apps[0], { preferRest: true });
export const auth = admin.auth();

export default admin;
