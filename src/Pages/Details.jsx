import React, { useState } from 'react';
import buildings from "../Buildings.json";

function Details() {

    let newBuildings = buildings;

    const [enteredName, setEnteredName] = useState('')
    const [enteredArea, setEnteredArea] = useState('')
    const [enteredLocation, setEnteredLocation] = useState('')
    const [enteredImg, setEnteredImg] = useState('')
    const [enteredId, setEnteredId] = useState('')

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const areaChangeHandler = (event) => {
        setEnteredArea(event.target.value);
    }

    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value);
    }

    const imgChangeHandler = (event) => {
        setEnteredImg(event.target.value);
    }

    const idChangeHandler = (event) => {
        setEnteredId(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        newBuildings.push({
            "id": newBuildings.length + 1,
            "name": enteredName,
            "area": enteredArea,
            "location": enteredLocation,
            "img": enteredImg
        })
        setEnteredName('')
        setEnteredArea('')
        setEnteredLocation('')
        setEnteredImg('')
    }

    const deleteHandler = (event) => {
        event.preventDefault();
        const deleteId = newBuildings.findIndex(x => x.id == enteredId)
        if (deleteId > -1) {
            newBuildings.splice(deleteId, 1);
            setEnteredId('')
        } else {
            alert("Building with such Id doesn't exist!")
        }
    }


    return (
        <div>
            <h2>Welcome</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Location</th>
                    <th>Image</th>
                </tr>
            </table >
            {
                newBuildings.map(house => {
                    return (
                        <table>
                            <tr>
                                <td > {house.id} </td>
                                <td> {house.name} </td>
                                <td> {house.area} </td>
                                <td> {house.location} </td>
                                <td><img className='icons' src={house.img}></img></td>
                            </tr>

                        </table >
                    )
                })
            }
            <br />
            <form onSubmit={submitHandler}>
                Add a building to the list: <br />
                <input
                    type='text'
                    placeholder='id'
                    value='ID is generated' />
                <input
                    type='text'
                    minlength='3'
                    required
                    placeholder='enter name'
                    value={enteredName}
                    onChange={nameChangeHandler} />
                <input
                    type='number'
                    min="0"
                    required
                    placeholder='enter area'
                    value={enteredArea}
                    onChange={areaChangeHandler} />
                <input
                    type='text'
                    placeholder='enter location'
                    value={enteredLocation}
                    onChange={locationChangeHandler} />
                <input
                    type='text'
                    placeholder='enter img url'
                    value={enteredImg}
                    onChange={imgChangeHandler} />
                <button type='submit'>Add</button>
            </form>
            <br />


            <form onSubmit={deleteHandler}>
                Delete a building to the list by stating it's Id:
                <input
                    type='number'
                    min="0"
                    required
                    placeholder='id to delete'
                    value={enteredId}
                    onChange={idChangeHandler} />
                <button type='submit'>Delete</button>
            </form>
            <br />
        </div >

    );
}

export default Details;