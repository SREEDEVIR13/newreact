// import axios from 'axios';
// import { useEffect, useRef, useState, useContext} from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import './AdminLogin.css';
// import Button from 'react-bootstrap/Button';
// import AuthContext from '../context/AuthProvider';





// function AdminLogin() {

//     const userEmail = useRef("");
//     const userPassword = useRef("");

//     const { setAuth} = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = userRef();


//     const [user, setUser] = useState('');
//     const [password, setPassword] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState('');

//     useEffect(()=>{
//         userRef.current.focus();
//     }, [])

//     useEffect(() =>{
//         setErrMsg('');
//     }, [user,password])


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(user, password)
//         setUser('');
//         setPassword('');
//         setSuccess(true);
//     }

    
//     const navigate = useNavigate();
//     function AdminLoginHandler(){

//         var payload= {
//             email: userEmail.current.value,
//             password: userPassword.current.value

//         }

//         axios.post("https://localhost:7061/api/Login", payload)
//         .then((response) => {
//             navigate("/")
//         })
//     }


//     return (<>
//         <section>
//             <p ref={errRef} className={errMsg? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
//         </section>
//         <div className="AdminLogin">
//         <header className="AdminLogin-header">
          
//         <div class="background">
//         <div class="shape"></div>
//         <div class="shape"></div>
//         </div>
//         <form  onSubmit={handleSubmit}>
//         <h3>Login Here</h3>

//         <label htmlFor="Email">Username</label>
//         <input 
//             type="text" placeholder="Email" id="Email"  
//             ref={userRef} autoComplete="off"
//             onChange={(e)=> setUser(e.target.value)}
//             value={user}
//             required
//             />
//         <label for="Password">Password</label>
//         <input 
//             type="password" placeholder="Password" id="Password"
//             onChange={(e)=> setPassword(e.target.value)}
//             value={password}
//             required
//             />
//         <button>Submit</button>
//         </form>

//         </header>
//       </div>
//       </>
//     );
//   }

  
//   export default AdminLogin;