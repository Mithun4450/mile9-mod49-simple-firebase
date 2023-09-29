/**
 * --------------------------------
 *     INITIAL FIREBASE SETUP
 * -------------------------------
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. Install firebase: npm install firebase
 * 5. Add config to your project from Project overview > Project settings
 * 6. DANGER: Do not publish or make config public by pushing those to github
 * 
 * ---------------------------
 *       INTEGRATION
 * ---------------------------
 * 7. Go to Docs > Build > Authentication > Web > Get started 
 * 8. export app from firebase config file : export default app
 * 9. In Login.jsx file : import getAut from firebase/Auth  import { getAuth } from "firebase/auth";
 * 10. Create const auth = getAuth(app);
 * 
 * -----------------------------
 *       PROVIDER SETUP
 * -----------------------------
 * 11. import { GoogleAuthProvider, getAuth } from "firebase/auth";  const provider = new GoogleAuthProvider()
 * 12. signInWithPopup(auth, provider)
 * 13. activate sign in method (google, facebook, github etc)
 * 14. In case of vite, 127.0.01 may be shown instead of localhost. Then 127.0.01 must be changed to localhost
 * 
 * -----------------------------
 * More auth provider
 * ----------------------------
 * 1. Activate auth provider (create app, provide redirect url, client id, client secrete
 * 
 * 
 * 
 * 
 */