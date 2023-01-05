import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Wheels.css";
import * as Icons from "react-icons/fa";
// import {Link} from 'react-router-dom'

import axios from "axios";
import swal from "sweetalert";
// import PopUp from "./PopUp";

import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import'./PopUp.css';




const Id = "";

export default function Wheels() {
  const [openModal, setOpenModal] = useState(false);
  const Navigate = useNavigate();
  const { VehicleOwnerId } = useParams();
  const [VehicleList, setVehicleList] = useState([]);
  const [searchParams] = useSearchParams();
  const [isSubmit, setIsSubmit] = useState(false);
  console.log("vehicledelete", VehicleList.VehicleId);
  // useEffect(()=>{
  //     refreshVehicleList();
  // },[])

  useEffect(() => {
    refreshVehicleList();
  }, [VehicleOwnerId]);

  // function refreshVehicleList() {
  //      axios.get('https://localhost:7149/api/Vehicle/getVehicle/'+Id)
  //        .then ((Response) =>
  //        {
  //         console.log("vehicle-get",Response.data)
  //         setVehicleList(Response.data);
  //        })
  //        .catch((error) => {
  //            console.log(error);
  //        });

  // }

  function refreshVehicleList() {
    axios
      .get(`https://localhost:7149/api/Vehicle/getVehicle/` + Id)
      .then((Response) => {
        

        setVehicleList(Response.data);
        console.log("vehicle-get", Response.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
      if(VehicleList.vehicleOwnerId=0) 
      {
          {return<NoDataFound/>}

      }
  }



  function NoDataFound(){
        return(
            <div> no data found</div>
        );
      }



    //   function details (VehicleList){
    //     axios
    //     .get(`https://localhost:7149/api/Vehicle/getVehicle/` + Id)
    //     .then((Response) => {
          
  
    //       setVehicleList(Response.data);
    //       console.log("vehicle-get", Response.data);
         
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //     if(VehicleList.vehicleOwnerId=0) 
    //     {
    //         {return<NoDataFound/>}

    //     }

    //   }


  // const onDelete = (e, vehicleId) => {
  //      e.stopPropagation();
  //     if (window.confirm('Are you sure to delete this record?'))
  //     axios.delete(`https://localhost:7149/api/Vehicle/delete/`+vehicleId)

  // fetch (`https://localhost:7149/api/Vehicle/getVehicle/SYT877/${vehicleId}`,{
  //     method:'DELETE'
  // })
  // const newList= VehicleList.filter((l) => l.vehicleId!==vehicleId);
  // setVehicleList(newList)
  // .then(res => refreshVehicleList())
  // .catch(err => console.log(err))
  // .then((result)=>{
  //     result.json().then((resp)=>{
  //         console.log(resp)
  //         refreshVehicleList()

  // })

  // })
  // }

  // const onDelete = (e, vehicleId) => {
  //     e.stopPropagation();
  //    if (window.confirm('Are you sure to delete this record?'))
  //    axios.delete(`https://localhost:7149/api/Vehicle/delete ${vehicleId}`

  //    )

  //    .then(res => refreshVehicleList())
  //    .catch(err => console.log(err))

  // }

  const onDelete = (e, vehicleId) => {
    e.preventDefault();
    console.log("delete");
    console.log("vehicleid", vehicleId);

    axios
      .delete(`https://localhost:7149/api/Vehicle/delete/` + vehicleId)
      .then((Response) => {
        swal({
            title: "DELETED!",
            text: " Vehicle Deleted Succesfully ",
            icon: "success",
            button: "ok",
            
              })
        //    setVehicleList(Response.data);
        refreshVehicleList();
        console.log("vehicle-get", Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpenModal(false);
  };

  const submitHandler = () => {
    setIsSubmit(true);
    Navigate("/add-wheels");
  };

  const setModalClose = () => {
    setOpenModal(false);
  };




//   function NoDataFound(){
//     return(
//         <div> no data found</div>
//     );
//   }
//    function datalist(refreshVehicleList){
//     const {data} =refreshVehicleList;
//     if (!data ) {return<NoDataFound/>}
//    }
  
  return (
    <div className="list arrangeElement">
      {/* {openModal && (
        <PopUp
          closeModal={setOpenModal}
          onDelete={onDelete}
          VehicleList={VehicleList}
        /> */}
      {/* )} */}

      {VehicleList.map((data) => {
        return (
          <div key={data.vehicleId} className="RowArrange">
            {/* <span className="vehicleName" VehicleName={items.vehicleName}></span>
                          <span className="vehicleNumber" vehicleNumber={items.vehicleNumber}></span>
                           <img  src ={items.imageSrc} alt="" className="ImageClass"></img>
                         <span className="vehicleType" vehicleType={items.vehicleType}></span>
                           <span className="numberOfSeats" numberOfSeats={items.numberOfSeats}></span> */}
            <div className="card">
               
              <li key={data.vehicleId}></li>
              <img
                src={data.imageSrc}
                className="card-img-top rounded-circle vehicle-image"
              />
              <div className="card-body">
                <h5> {data.vehicleName}</h5>
                <span> {data.vehicleNumber}</span>
                <br></br>
                <span> {data.vehicleType}</span>
                <br></br>
                <span> {data.numberOfSeats}</span>
                <br></br>
                <span> {data.vehicleOwnerId}</span>
                <br></br>

                {/* <button className='btn btn-light delete-button' onClick={e => onDelete(e, parseInt(data.vehicleId))}>
                                 
                                <Icons.FaTrash color='red' />
                                    
                                    </button> */}

                <button
                  className="btn btn-light delete-button"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <Icons.FaTrash color="red" />
                </button>
                <Modal show={openModal} onHide={setModalClose}  className='modalContainer'>
                  <Modal.Header>
                    <Modal.Title>Delete Vehicle</Modal.Title>
                    <div className='titleCloseBtn'> <button onClick={()=> setModalClose(false)}> x</button></div>
                  </Modal.Header>
                  <Form  onSubmit={(e) => onDelete(e, parseInt(data.vehicleId))}
                    >
                  <Modal.Body className="title">
                    
                     
                      <div className='title'> Do you really want to delete ? </div>
                    
                  </Modal.Body>
                  <Modal.Footer className='footer' >
                    <div>
                      <button type="submit" id="YesBtn">
                        Yes
                      </button>
                      <button type="button" onClick={setModalClose} id="cancelBtn">
                        No
                      </button>
                    </div>
                  </Modal.Footer>
                  </Form>
                </Modal>
                {/* <Modal>
                    <Modal.Header>

                    </Modal.Header>
                </Modal> */}
              </div>
            </div>
          </div>
        );
      })}
      <div className="add"><button  type="button" onClick={submitHandler} className="AddVehicle">
       Add  New vehicle
        <Icons.FaPlus className="add-vehicle" size="3rem"  color="blue" />
      </button></div>
      
    </div>
  );
}
