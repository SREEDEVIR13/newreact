import React, { useEffect, useState } from "react";
import Wheels from './Wheels'
import axios from 'axios';

export default function WheelsRegistration() {
    const WheelAPI = (url = 'localhost:7149/api/Vehicle/register') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecords => axios.post(url, newRecords),
            Update: (id, UpdatedRecord) => axios.put(url + id, UpdatedRecord),
            delete: id => axios.delete(url + id)
        }
    }
    const addOrEdit = (FormData, onSuccess) => {
        WheelAPI().create(FormData)
            .then(res => {
                onSuccess();
            })
            .catch(err => console.log(err))

    }
    return (
        // <div className='row'>
        <div className='col-md-12'>

            <div className="jumbotron jumbotron-fluid py-4">
                <div className="container text-center" >
                    <h1 className="display-4">Add New Vehicle</h1>

                    {/* </div> */}
                </div>
            </div>
            <div className="col-md-12">
                <Wheels addOrEdit={addOrEdit} />
            </div>
            {/* <div className="col-md-8">
            <div> list of Vehicle registered</div>
            </div> */}
        </div>
    )
}