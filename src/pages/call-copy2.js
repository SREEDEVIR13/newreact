import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Icons from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import './Call.css';

 
const Id = "SYT877";

export default function Call() {
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    // useEffect(() => {
    //     GetPhoneNumber();
    //   }, []);



      function GetPhoneNumber(e,employeeId) {
        axios
          .get(`https://localhost:7149/api/Call/getNumber/` + Id)
          .then((Response) => {
            setPhoneNumber(Response.data);
            console.log("number-get", Response.data);
            console.log("store",phoneNumber);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    



      const setModalClose = () => {
        setOpenModal(false);
      };
    

    
//   return (
//     <div className='num'>
//  <button onClick={GetPhoneNumber }> <Icons.FaPhone/> </button>




//   {phoneNumber.map((data) => {
//      return (
//         <div key={data.employeeId} className="RowArrange">
// <div className="body">
//                 {/* <span> {data.employeeId}</span> */}
//                 <br></br>
//                 <span> {data.number}</span>
//                 <br></br>
//                 </div>
               
//                </div>
// );
// })}
    
   
      
//     </div>
//   );


//   }

// onSubmit={GetPhoneNumber }


  return (
    <div className='num'>
 {/* <button onClick={GetPhoneNumber }> <Icons.FaPhone/> </button> */}

 <button
                  className=" phoneButton"
                  onClick={() => {
                    setOpenModal(true);
                    GetPhoneNumber();
                  }}
                >
                  <Icons.FaPhone  className="icon"/>
                </button>

                <Modal  show={openModal} onHide={setModalClose}  className='modalContainer'  >
                  <Modal.Header  className="modal-header">
                    <Modal.Title>Phone Number</Modal.Title>
                    <div className='titleCloseBtn'> <button onClick={()=> setModalClose(false)}> x</button></div>
                  </Modal.Header>
                  <Form   onSubmit={(e) => GetPhoneNumber(e,data.employeeId)}
                    
                    >
                  <Modal.Body className="title">
                    
                     
                  {phoneNumber.map((data) => {
     return (
        <div key={data.employeeId} className="call">
               <div className="body">
                {/* <span> {data.employeeId}</span> */}
                <br></br>
                <span> {data.number}</span>
                <br></br>
                </div>
               
               </div>
);
})}
                    
                  </Modal.Body>
                  <Modal.Footer className='footer' >
                    <div>
                     
                      <button type="button" onClick={setModalClose} id="cancelBtn">
                      ok
                      </button>
                    </div>
                  </Modal.Footer>
                  </Form>
                </Modal>



  
    
   
      
    </div>
  );


  }