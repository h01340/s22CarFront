import React, { useState, useEffect } from "react"

export default function Carlist() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = () => {
        fetch('http://localhost:8080/rest/cars')
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                //setCars(responseData.cars);
                setCars(responseData);
                console.log("cars ", cars);
            })
            .catch(err => console.error(err));
    }

    /*     const columns = [
            { field: 'brand', headerName: 'Brand', width: 200 },
            { field: 'model', headerName: 'Model', width: 200 },
            { field: 'color', headerName: 'Color', width: 200 },
            { field: 'year', headerName: 'Year', width: 150 },
            { field: 'price', headerName: 'Price', width: 150 },
            {
                field: '_links.car.href',
                headerName: '',
                sortable: false,
                filterable: false,
            }
        ]; */
    return (
        <div>
            <h1>Carlist</h1>
            <table>
                <tbody>

                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Owner last name</th>
                    </tr>
                    {
                        cars.map((car, index) =>
                            <tr key={index}>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.owner.lastName}</td>
                            </tr>)
                    }
                </tbody>
            </table>


        </div>
    )
}