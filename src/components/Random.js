import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from './Loader';

export const Random = () => {

    const [gif, setgif] = useState("");

    // for loader
    const [loading, setLoading] = useState("false");


    async function fetchData(){
        setLoading(true);
        const url = 'https://api.giphy.com/v1/gifs/random?api_key=T92GUVYUtlgauXMveLo0ejTFJKcAhcHx';
        const {data} = await axios.get(url);
        console.log(data);
        const imageSource = data.data.images.downsized_large.url;
        setgif(imageSource);
        setLoading(false);
    }

    useEffect( ()=>{
        fetchData();
    } , []);

    function clickHandler() {
        fetchData();
    }

    return (
        <div>
            <div className=' w-[45vw] bg-green-500 rounded-md border-black  border-[2px] flex flex-col items-center gap-y-3 '>
                <h1 className='text-[1.5rem] underline uppercase font-semibold mt-1'>Random Gif</h1>

                {
                    loading ? (<Loader/>) : (<img src={gif} alt='' width="350" height="250"/>)
                }

                <button className='w-10/12 bg-yellow-500 text-lg rounded-lg py-1 mb-2'
                    onClick={clickHandler}
                >Generate New</button>
            </div>
        </div>
    )
}
