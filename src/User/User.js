import React, { useState } from 'react';
import './User.css';

const User = (props) => {
    const { name, email, picture, phone } = props.user;

    const [number, setNumber] = useState([])
    const showNumber = () => setNumber(phone);

    return (
        <div className="people">
            <div>
                <img src={picture.large} alt="" />
            </div>
            <div>
                <h1>Name: {name.first + " " + name.last}</h1>
                <p>Email: {email}</p>
                <p>Phone: {number}</p>
                <button className="btn btn-dark" onClick={showNumber}>Show phone number</button>
                <button className="btn btn-primary" onClick={() => props.addMember(name.first + " " + name.last)}>Add me</button>
            </div>
        </div>
    );
};

export default User;