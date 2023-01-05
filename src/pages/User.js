import React from "react";
import AddUser from "./AddUser";
import axios from "axios";

export default function User(){

    const UserAPI = (url = 'https://localhost:7149/api/Registration/register') => {
        return{
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    const addOrEdit = (formData, onSuccess) => {
        UserAPI().create(formData)
        .then(res =>{
            onSuccess();
        })
        .catch(err => console.log(err))
    }

    return(
        <div >
            <div>
                <AddUser  addOrEdit = { addOrEdit }></AddUser>
               
            </div>
            {/* <div className="col-md-8">
                List of employee
            </div> */}
        </div>
    )
}