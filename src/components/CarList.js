import React, { useState, useEffect } from "react"

export default function Carlist() {
    const [cars, setCars] = useState([])
    useEffect(() => fetchData, [])



    const fetchData = () => {
        fetch('http://localhost:8080/rest/cars')
            .then(response => response.json())
            .then(responseData =>
                setCars(responseData._embedded.cars))
    }

    return (
        <div></div>
    )
}