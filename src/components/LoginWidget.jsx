
import React, { Fragment } from 'react';
import 'styles/CartWidget.css';
import { LoginContext } from 'context/LoginContext';
import { useContext } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GoogleAuthProvider,signInWithPopup  } from "firebase/auth";
import {auth} from "../utils/FirebaseConfig"
import { Avatar } from '../../node_modules/@mui/material/index';
import ReactTooltip from 'react-tooltip';



const LoginWidget = () => {

        const loginContext = useContext(LoginContext);

        const sign = () => {
            console.log(Object.keys(loginContext.login).length)
            loginContext.login == undefined || Object.keys(loginContext.login).length === 0
            ? signIn()
            : signOut()
        }
        
        const signIn = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then(result => loginContext.addLogin(result.user.providerData[0]))
                .catch(error => console.log(error));

        }

        const signOut = () => {
            loginContext.signOut();
        }


        return (
        <div id ="login">

                <div className = "Avatar" onClick={sign}>
                {
                    loginContext.login == undefined
                    ?<div className="Avatar" data-tip="Ingresar"><AccountCircleIcon /><ReactTooltip place="bottom" type="light" effect="solid"/></div> 
                    :<div className="Avatar" data-tip="Log In/Out"><Avatar alt={loginContext.login.displayName} src={loginContext.login.photoURL}/> <ReactTooltip place="bottom" type="light" effect="solid"/></div>
                    }
                     
                    
                </div>

        </div>

        )
};

export default LoginWidget;