import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import useGif from "../usehooks/useGif";

const API_KEY = process .env.REACT_APP_GIPHY_API_KEY;
const Tag = ()=>{

    
    const[tag , setTag]= useState("");
    

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const gifSource = data.data.images.downsized_large.url;
       
    //     console.log(gifSource);
    //     setGif(gifSource);
    //     setLoading(false);
    // }
    // useEffect(()=>{
    //     fetchData();
    // },[])

    //call
    const {gif,loading , fetchData} = useGif(tag);

    function clickHandler(){
        fetchData();
        
    }
    function changeHandler(e){
        setTag(e.target.value);
    }
    
    return(
        <div className="w-1/2  rounded-lg
                    border border-black bg-[#3b82f6] flex flex-col
                                    gap-y-5 items-center mt-[15px]">

            <h1 className=" mt-[15px] text-2xl underline up font-semibold">Random {tag} Gif</h1>

            {loading ? (<Spinner />) : (<img src={gif} width="450" />)}

            <input placeholder="Enter Cetegory" type="text" className="w-10/12 text-lg py-2 rounded-lg
            mb-[3px] text-center" 
            onChange={changeHandler} value={tag}/>
            

            <button className="bg-[#fef3c7] w-10/12 text-lg py-[4px] rounded-lg mb-[20px]" onClick={clickHandler}>Generate</button>
        </div>
    )
    
}
export default Tag;