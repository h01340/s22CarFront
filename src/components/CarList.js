import React, { useState, useEffect } from "react";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

export default function Carlist() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = () => {
        fetch('https://s22backend.herokuapp.com/')
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                setCars(responseData);
                console.log("cars ", cars);
            })
            .catch(err => console.error(err));
    }

    const deleteCar = (id) => {
        console.log("Auton id, jota poistetaan on ", id);
        fetch('https://s22backend.herokuapp.com/', {
            mode: 'no-cors',
            method: 'DELETE',
            "headers": {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://s22backend.herokuapp.com/',
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        })
            .then(res => fetchCars())
            .catch(err => console.error(err))
    }

    const columns = [
        { Header: 'Brand', accessor: 'brand' },
        { Header: 'Model', accessor: 'model' },
        { Header: 'Color', accessor: 'color' },
        { Header: 'RegisterNbr', accessor: 'registerNumber' },
        { Header: 'Year', accessor: 'year' },
        { Header: 'Price', accessor: 'price' },
        { accessor: 'id', Cell: row => <button onClick={() => deleteCar(row.value)} > Delete</button > }
    ];
    return (
        <div>
            <h1>Carlist</h1>
            <ReactTable filterable={true} data={cars} columns={columns} />
        </div>
    )
}