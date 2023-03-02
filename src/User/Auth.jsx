import {auth} from '../config/firebase' 
import {createUserWithEmailAndPassword, signInWithEmailAndPassword}  from 'firebase/auth'
import { useState } from 'react';
import './Auth.css'
import '../Homepage/button.css'
import { async } from '@firebase/util';

export default function Auth(){
    const [isFirstDashed, setIsFirstDashed] = useState(false);
    const [isSecondDashed, setIsSecondDashed] = useState(true);
    const handleFirstClick = () => {
        setIsFirstDashed(true);
        setIsSecondDashed(false);
    };
    const handleSecondClick = () => {
        setIsSecondDashed(true);
        setIsFirstDashed(false);
    };
    const firstStyle = isFirstDashed ? { textDecoration: 'line-through' } : {};
    const secondStyle = isSecondDashed ? { textDecoration: 'line-through' } : {};


    const [fullName,setFullName] = useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const  signUp = async()=>{
        await createUserWithEmailAndPassword(auth,email,password);
        console.log("signed up");
    }
    const signIn = async()=>{
        await signInWithEmailAndPassword(auth,email,password) 
        console.log("signed in");
    }

    if(isSecondDashed){
        return(
            <div className='auth'>
                <div className='sign-type'>
                    <h2 onClick={handleFirstClick} style={firstStyle}>Join</h2>
                    <hr />
                    <h2 onClick={handleSecondClick} style={secondStyle}>Sign In</h2>
                </div>
                <hr className='hr2'/>
    
                <form onSubmit={signIn} className='sign-form'>
                    
                    <div className='email'>
                        <label>Email Adress  :</label>
                        <input onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='password'>
                        <label >Password  :</label>
                        <input type='password' onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <button className='submit-button button-27' type='submit' >Sign In</button>
                </form>
                
            </div>
        );
    }
    else{
        return(
            <div className='auth'>
                <div className='sign-type'>
                    <h2 onClick={handleFirstClick} style={firstStyle}>Join</h2>
                    <hr />
                    <h2 onClick={handleSecondClick} style={secondStyle}>Sign In</h2>
                </div>
                <hr className='hr2'/>
    
                <form onSubmit={signUp} className='sign-form'>
                    
                    <div className='email'>
                        <label>Full Name  :</label>
                        <input />
                    </div>
                    <div className='email'>
                        <label>Email Adress  :</label>
                        <input onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='password'>
                        <label >Password  :</label>
                        <input type='password' onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <button className='submit-button button-27' type='submit'   >Sign Up</button>
                </form>
                
            </div>
        );
    }

    
}