import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import useGif from "../usehooks/useGif";

const API_KEY = process .env.REACT_APP_GIPHY_API_KEY;
const Random = ()=>{

    const[gif,setGif] = useState("");
    const [loading, setLoading] = useState(false);
    

    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const gifSource = data.data.images.downsized_large.url;
       
        console.log(gifSource);
        setGif(gifSource);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[])

    // call customhook
    // const {gif,loading,fetchData} = useGif(tag);

    function clickHandler(){
        fetchData();
        
    }
    
    return(
        <div className="w-1/2  rounded-lg
                    border border-black bg-green-500 flex flex-col
                                    gap-y-5 items-center mt-[15px]">

            <h1 className=" mt-[15px] text-2xl underline up font-semibold">A Random Gif</h1>

            {loading ? (<Spinner />) : (<img src={gif} width="450" />)}

            

            <button className="bg-[#fef3c7] w-10/12 text-lg py-[4px] rounded-lg mb-[20px]" onClick={clickHandler}>Generate</button>
        </div>
    )
    
}
export default Random;