
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import User from './pages/User';
import AllUsers from './pages/AllUsers';
import UserConfirmation from './pages/UserConfirmation';
import Wheels2 from './pages/Wheels2';
import Wheels from './pages/Wheels';
import Call from './pages/Call';
import GetUser from './pages/GetUser';


function App() {


  return (
 
    <Layout>
      <Routes>
        <Route path="/" element={ <AllUsers/>}></Route>

        <Route path= "/add-wheels" element={<Wheels2/>}></Route>     
    
        <Route path="/add-user" element={ <User/>}></Route>
      
        <Route path="/confirm-user" element={ <UserConfirmation/>}></Route>

        <Route path= "/add-list" element={<Wheels/>}></Route>  
        <Route path="/get-number"   element={<Call/>}></Route>
        <Route path="/get-user"   element={<GetUser/>}></Route>
      </Routes>   
    </Layout>
       
 
  );
}

export default App;
