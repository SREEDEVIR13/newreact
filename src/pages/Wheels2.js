import React, { useEffect, useState } from "react";
import "./AddUser.css"
import axios from "axios";
import Wheels from "./Wheels";

const defaultImageSrc = "/img/vehicle.jpg"

const initialFeildValues = {
    vehicleId:0,
    vehicleName: '',
    vehicleType: '',
    vehicleNumber: '',
    numberOfSeats: 0,
    vehicleOwnerId: 'SYT865',


    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null,

  
}

export default function Wheels2() {


    const [values, setValues] = useState(initialFeildValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
// useEffect(()=>{
//     refreshVehicleList();
// },[])


    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })

    }
    const UserAPI = (url = 'https://localhost:7149/api/Vehicle/register') => {
        return{
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }
    // to get details 
    // function refreshVehicleList() {
    //     UserAPI().fetchAll()
    //     .then(res=> setVehicleList(res.data))
    //     .catch(err => console.log(err))
    // }
    
    // const imageCard =data =>(
    //     <div className="card">
    //        <img src={data.imageSrc} className="card-img-top rounded-circle" />
    //         <div className="card-body">
    //             <h5> {data.vehicleName}</h5>
    //             <span> {data.vehicleNumber}</span>
    //             <span> {data.vehicleType}</span>
    //             <span> {data.numberOfSeats}</span>
    //             <span> {data.vehicleOwnerId}</span>
    //         </div>
    //     </div>

    //  )


    const addOrEdit = (formData, onSuccess) => {
        UserAPI().create(formData)
        .then(res =>{
            onSuccess();
            //  refreshVehicleList();
        })
        .catch(err => console.log(err))
    }

    const imageUpdate = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile: imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        const err = {};
       
        if(!values.vehicleName){
            err.vehicleName = "First Name is Required";
        }
        
        if(!values.vehicleType){
            err.vehicleType = "Last Name is Required";
        }
        if(!values.vehicleNumber){
            err.vehicleNumber = "vehicleNumber is Required";
        }
        if(!values.numberOfSeats){
            err.numberOfSeats = "number of seats is Required";
        }
     
        
        if(values.imageSrc == defaultImageSrc)
        {
            err.imageSrc = "select image picture"
        }
       
        return err;
        

    }

    const resetForm = () => {
        setValues(initialFeildValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleSubmit = e => {
        console.log('submit hit')
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
       
    }

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmit){

            const formData = new FormData()
            formData.append('vehicleId',values.vehicleId)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            formData.append('vehicleName', values.vehicleName)
            formData.append('vehicleType', values.vehicleType)
            formData.append('vehicleNumber', values.vehicleNumber)
            formData.append('numberOfSeats', values.numberOfSeats)
            formData.append('vehicleOwnerId', values.vehicleOwnerId)

            addOrEdit(formData, resetForm)
        }
    },[errors]);

    return (

        <>
            <div className="header-title">
                <header className="header-one">Add New Vehicle</header>
            </div>
            <div className="body-content">
                <form autoComplete="off" noValidate onSubmit={handleSubmit} className="form">

                    <div className="image-tag" >
                        <img src={values.imageSrc} height="100px" width="100px"/>
                        <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSrc')}
                            onChange={imageUpdate} id="license-uploader" />
                            <p className="error-text">{errors.imageSrc}</p>


                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>Vehicle Name</label>
                            <input className={"form-control"} type="text" placeholder= "Vehicle Name" name="vehicleName"
                                value={values.vehicleName}
                                onChange={handleInputChange} required />
                                <p className="error-text">{errors.vehicleName}</p>
                        </div>

                        <div className="input-box">
                            <label>Vehicle Type</label>
                            <div className="select-box">
                                <select  placeholder="Vehicle Type" name="vehicleType"
                                value={values.vehicleType}
                                onChange={handleInputChange} >
                                    <option hidden>Vehicle Type</option>
                                    <option>Hatchback</option>
                                    <option>Sedan</option>
                                    <option>SUV</option>
                                    <option>Motorcycle</option>
                                    <option>Minivan</option>
                                </select>
                                <p className="error-text">{errors.vehicleType}</p>
                            </div>
                        </div>

                    </div>
                    <div className="column">
                        <div className="input-box">
                            <label>Vehicle Number </label>
                            <input className={"form-control"} placeholder="vehicleNumber" name="vehicleNumber"
                                value={values.vehicleNumber}
                                onChange={handleInputChange} required />
                                <p className="error-text">{errors.vehicleNumber}</p>
                        </div>
                        <div className="input-box">
                            <label>Number of Seats</label>
                            <div className="select-box">
                                <select  type="number" className={"form-control"} placeholder="Number" name="numberOfSeats"
                                value={values.numberOfSeats}
                                onChange={handleInputChange} required  >
                                    <option hidden>Number of Seats</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <p className="error-text">{errors.numberOfSeats}</p>
                            </div>
                            
                        </div>
                    </div>

                    
                    <button >Register</button>
                    <button type='reset' className='btn btn-light' onClick={resetForm}>Cancel</button>
                    
                </form>
            </div>
           

{/* 
            <div className="list">
            <h1>
                list of vehicle
            </h1>
                 


                    <table>
                        <tbody>
                            {
                                [...Array(Math.ceil(VehicleList.length / 3))].map((e, i) => 
                            <tr>
                                <td>{imageCard(VehicleList[3 * i])}</td>
                                <td>{VehicleList[3*i+1]? imageCard(VehicleList[3*i+1]):null}

                                </td>
                                <td>{VehicleList[3*i+2]? imageCard(VehicleList[3*i+2]):null}

                                </td>
                            </tr>

                            )
                            }


                        </tbody>
                    </table>
                   
                
           
                </div> */}
        </>
        






    )

}