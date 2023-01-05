import React from 'react'
import'./PopUp.css';


const PopUp = ({closeModal, onDelete,VehicleList}) => {

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='titleCloseBtn'> <button onClick={()=> closeModal(false)}> x</button></div>
         
        <div className='title'> <h1 >Are you Sure you want To Delete</h1></div>
        
        <div className='footer'>
        <button onClick={()=> closeModal(false)} id="cancelBtn"> No</button>
  
        <button type='reset' className='btn btn-light' onClick={e => onDelete(e, parseInt(VehicleList.vehicleId))}  id="YesBtn">Yes</button> 
        </div>
        </div>
    </div>
  )
}

export default PopUp