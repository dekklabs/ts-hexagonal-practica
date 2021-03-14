import React from 'react'
import User from '../../entities/User';

interface IProps {
    user: User
}

const UserRow = ({user}:IProps) => {

    const {name, email, phone, website} = user;

    return (
        <div className="shadow-lg p-4 rounded-md mb-4">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
        </div>
    )
}

export default UserRow;