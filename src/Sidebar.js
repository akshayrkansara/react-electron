import React from 'react';
import { Button } from 'react';
import Migrations from './Migrations';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <p>Start Migration</p>
            <button>Dashboard</button>
            <button onClick={<Migrations />}>Migrations</button>
            <button>Reports (MVP)</button>
        </div>
    )
}

export default Sidebar