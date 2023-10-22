import React from 'react';
import { useState, useEffect } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
const initialState={
    name:"",
    email:"",
    contact:""
}
function Addedit() {
    const[state,setState]=useState(initialState);
    const {name,email,contact}=state;
    const navigate= useNavigate();

    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/chk/${id}`).then((res)=>setState({...res.data[0]}))
    },[id])


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!id){
        if(!name||!email||!contact) return ("ERROR OCCUR");
        else{
            axios.post('http://localhost:5000/api/post',{name,email,contact}).then(()=>{
                setState(initialState);
            }).catch((err)=>console.log(err));
            setTimeout(()=>{
                navigate('/')
            },500)
        }}
        else{
            axios.put(`http://localhost:5000/api/update`,{name,email,contact,id}).then(()=>{
                setState(initialState);
            }).catch((err)=>console.log(err));
            alert('sucess');
            setTimeout(()=>{
                navigate('/');
            },500)

        }

    }
    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setState ({...state,[name]:value})
    }
  return (
    <div>
     <>
  <h2>HTML Forms</h2>
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">name:</label>
    <br />
    <input type="text"  name="name" value={name} onChange={handleInputChange}/>
    <br />
    <label htmlFor="email">email:</label>
    <br />
    <input type="email"  name="email" value={email} onChange={handleInputChange}/>
    <br />
    <label htmlFor="contact">CONTACT:</label>
    <br />
    <input type="number"  name="contact" value={contact} onChange={handleInputChange}/>
    <br />
    <input type="Submit" defaultValue="SUBMIT" />
    <br></br>
    <Link to={'/'}>
    <input type="button" defaultValue="Goback" />
    </Link>
  
  </form>
</>

    </div>
  )
}

export default Addedit
