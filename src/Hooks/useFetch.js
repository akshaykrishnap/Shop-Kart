import { useEffect, useState } from "react"

//Custom Hooks

const useFetch=(url)=>{
    const[data,setData]= useState(null)

    useEffect(()=>{

        //Fetch
        fetch(url).then(res=>{
            res.json().then(result=>{
                setData(result) // if not console use-- .products while using json dummystore
            })
        })
    },[])


    return data
}


export default useFetch;