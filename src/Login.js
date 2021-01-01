import React from "react";
import './Login.css';
import  {useState, useEffect} from "react";
import firebaseApp from "./firebase";
import App from './App';

const Login = ({navigation}) => {
    const [log,setLog] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount,setHasAccount] = useState(false);

    const clearInputs = () =>{
        setEmail("");
        setPassword("");
    }

    const clearErrors = () =>{
        setEmailError("");
        setPasswordError("");
    }


    const handleLogin = () =>{
        clearErrors();
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err =>{
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            }
                );
        setLog('permis');

    };

    const handleSignup = () =>{
        clearErrors();
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err =>{
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            }
                );
    };

    const handleLoguot = () =>{
        firebaseApp.auth().singOut();
    };

    const authListener = () =>{
        firebaseApp.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
                
            }
            else
                setUser("");
        })
    }


    useEffect(() => {
        authListener();
        
    }, [])
    if(log==='permis')
    return(
        <App/>
    )
    return(
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input 
                type="text" 
                autofocus required value={email} 
                onChange={e => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)
                }
                />
                <p className="errorMsg">{passwordError}</p>

            <div className="btnContainer" >
                {hasAccount ?(
                    <>
                        <button  onClick={handleLogin}>
                            Sign in
                        </button>
                        <p>Don`t have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        
                    </>
                ) : (
                    <>
                    <button onClick={handleSignup}>Sign up</button>
                    <p>Have an accout? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                </>
                )}
            </div>   
            </div>
            </section>
    );
    
};
export default Login;