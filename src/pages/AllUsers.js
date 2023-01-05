import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function AllUsers(){
    const[users,setUsers]= useState([]);

    useEffect(()=>{
        axios.get("https://localhost:7061/api/Signup/Userdetails")
    .then((response) => {
        setUsers((existingData)=>{
            return response.data;
        })
    })

    },[]);

    return(
    <>
    <Row xs={1} md={3} className="g-4 mt-1">
      {
      users.map((ur) => (
        <Col key={ur.role}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{ur.name}</Card.Title>
              <Card.Text>
                <b>Department:</b> {ur.department}
              </Card.Text>
              <Card.Text>
                <b>Email:</b> {ur.email}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </>
    )

    
}
export default AllUsers;