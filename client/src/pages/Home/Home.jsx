import React,{useState, useEffect, useContext, useRef} from 'react'
import "./home.css"
import axios from "axios"
import {AuthContext} from "../../context/AuthContext"
import Table from "../../components/Table/Table"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import {Navigate} from "react-router-dom"
import Search from '../../components/Search/Search'


export default function Home() {
    const {user}=useContext(AuthContext)
    const [Url,setUrl] =useState([]);
    const [query,setQuery]= useState("");
    const full=useRef();
    const note=useRef();
    const keys = ["note", "short", "full"];

    console.log(user)
    
    
    const submitHandler = async (e) =>{
        e.preventDefault()
        const newUrl={
            userId:user._id,
          full:full.current.value,
          note:note.current.value
        }
        try{
          axios.post("/shorturls/",newUrl)
          window.location.reload()
        }
        catch(err){
          console.log("ERR2 :"+err)
        }
    
      }

    // const search = (Url)=>{

    //     return Url.filter(
    //       url=> keys.some(key=>url[key].toLowerCase().includes(query.toLowerCase()))
    //       );
    //     // return Url.filter(url => (url.full.toLowerCase().includes(query.toLowerCase())) ||
    //     //                         (url.short.toLowerCase().includes(query.toLowerCase())) ||
    //     //                         (url.note.toLowerCase().includes(query.toLowerCase()))
    //     // );
    // }


    // console.log(user)

    // useEffect(()=>{
    //     const fetchUrl= async () =>{
    //         try{
    //         console.log(user.username)
    //         const res= await axios.get("/shorturls/get/"+user.username)
    //         console.log(res.data)
    //         setUrl(res.data.sort((p1,p2)=>{
    //             return new Date(p2.createdAt)- new Date(p1.createdAt)
    //           }));
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //     }
    //     fetchUrl();
    // },[user._id, user.username])

    useEffect(()=>{
      const fetchUrl= async () =>{
          try{
          // console.log(user.username)
          const res= await axios.get(`/shorturls/get/`+user.username+`?q=${query}`)
          // console.log(res.data)
          setUrl(res.data.sort((p1,p2)=>{
              return new Date(p2.createdAt)- new Date(p1.createdAt)
            }));
          }
          catch(err){
              console.log(err)
          }
      }
      fetchUrl();
  },[user._id, user.username, query])
  // const a=keys[0]
  // console.log(Url[0])
  // console.log(keys[0])
  return (
    <div className='fullWindow'>
        <Header/>
        <h1 className='heading'>
            URL Shortner
        </h1>
        <div className="container">
            <form action="" className='my-4 form-inline' onSubmit={submitHandler}>
                <label htmlFor="" className='visually-hidden'>Full URL</label>
                <input placeholder='URL' type="url" ref={full} className='form-control col mr-2' />
                <br />
                <input placeholder='Give a note to your URL' ref={note} type="text" className='form-control col mr-2' />
                <br />
                <button className='btn btn-success'>Submit</button>
                <hr />

                
            </form>
            <input placeholder='Search for your Url or Note' onChange={(e)=>setQuery(e.target.value)} className='form-control col mr-2' type="text" />
            
           
            <br />
            <br />

            <h3>URLs:</h3>
            {/* <Table Url={search(Url)}/> */}
            <Table Url={Url}/>
            <br />
            <br />
            
            
        </div>
        <Footer/>
    </div>
    
  )
}

{/* <form onSubmit={onSubmit} action="">
                New Item : <input ref={inputRef} type="text" />
                <button type='submit'>ADD</button>
            </form> */}
            {/* {console.log(items)} */}



// const [items,setItems] = useState([[Url]])
    // const [filteredItems,setFilteredItems] = useState([Url])
    // const [clicks,setClicks]=useState([]);
    // const [user,setUser] =useState({});
    //to fetch the user
    // useEffect(()=>{
    //     const fetchUser= async () =>{
    //         const res= await axios.get("users/648a316b6099abdc78c36818")
    //         setUser(res.data);
    //     }
    //     fetchUser();
    // },[])