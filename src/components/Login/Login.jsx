
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error =>{
            console.log('error:', error.message)
        })
    }

    const handleGitHubSignIn =() =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error =>{
            console.log(error)
        })

    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error =>{
            console.log(error)
        })
    }

   
    



    return (
        <div>
            {/* user? Logout : Sign in */}

            {user?
                <button onClick={handleSignOut}>Sign Out</button> :
                <>
                 <button onClick={handleGoogleSignIn}>Google Login</button>
                 <button onClick={handleGitHubSignIn}>GitHub Sign in</button>

                 </>
            }

            {
                user && <div>
                    <h2>User Name: {user.displayName}</h2>
                    <h3>Email: {user.email}</h3>
                    <img src={user.photoURL} alt="" />
                
                
                </div>
            }
            
        </div>
    );
};

export default Login;