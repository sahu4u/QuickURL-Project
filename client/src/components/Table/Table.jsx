import React, {useState, useEffect, useRef} from 'react'
import axios from "axios"
import {preventDefault} from "react"
import {Navigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import "./table.css"

export default function Table({Url}) {

    const [isUrl,setisUrl] = useState((false))
    const shrt=useRef();

    const EventManager= async(e)=>{
        // e.preventDefault();
    }
   
    const shorturlHandler= async (url)=>{
        try{
            console.log("clickedd")
            console.log(url)
            // console.log(shrt.current.value)
            const fullLink= await axios.get("/shorturls/"+url.short)
                //    console.log(fullLink)
            window.location.href=fullLink.data;
        }
        catch(err){
            console.log(err)
        }
    }

    console.log(isUrl)
  
        return (
            <div className='table-responsive'>
                    <table className='table table-striped table-responsive'>
                <thead>
                    <tr>
                        <th scope="col">Full URL</th>
                        <th scope="col">Short URL</th>
                        <th scope="col">Notes</th>
                        <th scope="col">Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    
                       {Url.map((url)=>(
                            <tr scope="row"> 
                                <td className='fullUrl'>
                                <a href={url.full}>{url.full}</a>
                                </td>
     
                            <td className='shortUrl' onClick={function myFunction(){
                                    EventManager();    
                                    shorturlHandler(url);
                                
                                }}><Link >{url.short}</Link></td>
                                <td>{url.note}</td>
                                <td>{url.clicks}</td>
                            </tr>
                       ))} 
                   
                </tbody>
               

            </table>  
            </div>

            
  )
}
// {Url.map(p=>(
//     <Table key={p._id} url={p}/> ))}