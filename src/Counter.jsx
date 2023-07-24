import { Button } from "@mui/material"
import React from  "react"
import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count+1)
    }
    return (
        <>
        <Button variant="contained" color="secondary" onClick={increase}>Add</Button>
        <Button variant="outlined" onClick={()=> {setCount(count -1)}} >Decrease</Button>
        <h1>{count}</h1>
        </>
    )
}