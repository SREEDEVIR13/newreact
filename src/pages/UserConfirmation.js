import React, { useRef, useState } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";


function UserConfirmation(){


    //const userEmail = useRef("");
    const navigate = useNavigate();

    const search = useLocation().search;
    const email = new URLSearchParams(search).get('email');
    console.log(email);

    //const [userEmail, setUserEmail] = useState({email});
    

    
        var payload={
            email:email,
            url:"hello"
            
        }
        axios.post("https://localhost:7061/api/Signup/Confirmmail", payload)
        .then((response) =>{
          navigate("/")

        })
    


    
   

    return(
        <>
        <div>

        </div>
        </>
    )
}

export default UserConfirmation;