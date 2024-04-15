import React from "react";
import { Link } from 'react-router-dom' 

const Sidebar = () => {
    return (
        <div className="side-bar">
            <Link to={'/'} className="side-item">Home</Link>
            <Link to={'/create-crewmate'} className="side-item">Create</Link>
            <Link to={'/crewmate-gallery'}className="side-item">Gallery</Link>
        </div>
    )
}

export default Sidebar