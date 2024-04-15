import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import Sidebar from "./sidebar";

const EditCrewmate = () => {
    let params = useParams()
    const [crewmate, setCrewmate] = useState({name: "", power: 0, type: "fire"})

    const handleChange = (event) => {
        const {name, value} = event.target
        // console.log("Name: ", name, "value: ", value)
        setCrewmate((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    
    const updateCrew = async () => {
        // console.log(crewmate)
        event.preventDefault();
        await supabase.from('Posts').update({ name: crewmate.name, power: crewmate.power, type: crewmate.type, sec_type:crewmate.sec_type }).eq('id', params.id)
        // console.log('tesr')
        window.location = "/crewmate-gallery";
    }

    const deleteCrew = async () => {
        event.preventDefault();
        await supabase.from('Posts').delete().eq('id', params.id)
        // console.log('tesr')
        window.location = "/crewmate-gallery";
    }
    return (
        <div className="App">
            <Sidebar />
            <div className="main">
                <h1>Edit Crewmate: {params.name}</h1>
                <form>
                    <div className="form">
                        <label>Name</label>
                        <input type="text" name="name" value={crewmate.name} onChange={handleChange}></input>
                        <label>Power</label>
                        <input type="number" name="power" value={crewmate.power} onChange={handleChange}></input>
                        <label>Type</label>
                        <select type="text" name="type" onChange={handleChange}>
                            <option selected value="fire">Fire</option>
                            <option value="water">Water</option>
                            <option value="grass">Grass</option>
                            <option value="electric">Electric</option>
                            <option value="ice">Ice</option>
                            <option value="poison">Poison</option>
                            <option value="ground">Ground</option>
                            <option value="rock">Rock</option>
                            <option value="fairy">Fairy</option>
                            <option value="dark">Dark</option>
                            <option value="normal">Normal</option>
                            <option value="fighting">Fighting</option>
                            <option value="dragon">Dragon</option>
                            <option value="steel">Steel</option>
                            <option value="ghost">Ghost</option>
                            <option value="bug">Bug</option>
                            <option value="flying">Flying</option>
                            <option value="psychic">Psychic</option>
                        </select>
                        <label>Secondary Type</label>
                        <select type='text' name="sec_type" onChange={handleChange}>
                            <option value="none">None</option>
                            <option value="fire">Fire</option>
                            <option value="water">Water</option>
                            <option value="grass">Grass</option>
                            <option value="electric">Electric</option>
                            <option value="ice">Ice</option>
                            <option value="poison">Poison</option>
                            <option value="ground">Ground</option>
                            <option value="rock">Rock</option>
                            <option value="fairy">Fairy</option>
                            <option value="dark">Dark</option>
                            <option value="normal">Normal</option>
                            <option value="fighting">Fighting</option>
                            <option value="dragon">Dragon</option>
                            <option value="steel">Steel</option>
                            <option value="ghost">Ghost</option>
                            <option value="bug">Bug</option>
                            <option value="flying">Flying</option>
                            <option value="psychic">Psychic</option>
                        </select>
                    </div>
                    <button type="submit" value="Submit" onClick={updateCrew}> Update Crewmate</button>
                    <button onClick={deleteCrew}>Delete Crewmate</button>
                </form>   
            </div>
        </div>
    )
}

export default EditCrewmate