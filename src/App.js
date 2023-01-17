import './App.css'
import axios from "axios"
import { React, useState, useEffect } from "react"

function App(){
    const [advice,setAdvice] = useState("")

    useEffect(() => {
        GetAdvice()
    },[])

    function GetAdvice(){
        const adviceURL = 'https://api.adviceslip.com/advice'

        axios.get(adviceURL)
        .then(response => {
            setAdvice(response.data.slip.advice)
        })
        .catch(response => console.log(response))
    }

    return(
        <div>
            <h1>Advice : {advice}</h1>
            <button onClick={GetAdvice}>Get Advice</button>
        </div>
    )
}

export default App