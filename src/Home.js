import React , { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
function Home() {
    const [data,setData]=useState([]);
    const loadData=async()=>{
        const response=await axios.get('http://localhost:5000/api/get'); 
        setData(response.data);
        };
        useEffect(()=>{
            loadData();
        },[])
        const handledelete=(id)=>{
            axios.delete(`http://localhost:5000/api/remove/${id}`);
            alert('success')
            loadData();

        }
  return (
    <>
    <h1>home </h1>
    <Link to={'/adddata'}><button>ADD</button></Link>
    <table>
        <thead>
            <tr>
                <th>No.</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CONTACT</th>
                <th>ACTIONS</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,i)=>(
                
                <tr key={item.id}>
                    <td>{i}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                        <Link to={`/update/${item.id}`}>
                        <button>EDIT</button>
                        </Link>
                        
                        <button onClick={()=>{handledelete(item.id)}}>DELETE</button>
                        
                        <Link to={`/view/${item.id}`}>
                        <button>view</button>
                        </Link>
            
                        </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default Home
