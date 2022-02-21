import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
      setTimeout(( ) => {
        fetch(url)
        .then(res => {
            if(!res.ok) { // error coming back from server
                throw Error('Could not fetch data for that resource');
            }
            return res.json();

        })
        .then(data => {
            setData(data);
            console.log(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
        })
      },1000)
    },[])

    return{data,isPending,error};

}
 
export default useFetch;