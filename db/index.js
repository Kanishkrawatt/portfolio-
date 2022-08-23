import admin from 'firebase-admin';
const serviceAccount = {
   "type": process.env.NEXT_PUBLIC_FB_type,
    "project_id": process.env.NEXT_PUBLIC_FB_project_id,
    "private_key_id": process.env.NEXT_PUBLIC_FB_private_key_id,
    "private_key": process.env.NEXT_PUBLIC_FB_private_key, 
    "client_email": process.env.NEXT_PUBLIC_FB_client_email,
    "client_id": process.env.NEXT_PUBLIC_FB_client_id, 
    "auth_uri": process.env.NEXT_PUBLIC_FB_auth_uri, 
    "token_uri": process.env.NEXT_PUBLIC_FB_token_uri, 
    "auth_provider_x509_cert_url": process.env.NEXT_PUBLIC_FB_auth_provider_x509_cert_url,
    "client_x509_cert_url": process.env.NEXT_PUBLIC_FB_client_x509_cert_url
   }
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();