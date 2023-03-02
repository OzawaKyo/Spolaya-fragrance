import {auth} from '../config/firebase' 
import React, { useEffect, useState } from 'react';


export default function User(){
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    if (user) {
      // User is logged in
      return <p>Welcome, {user.email}!</p>;
    } else {
      // User is not logged in
      return <p>Please sign in</p>;
    }
}