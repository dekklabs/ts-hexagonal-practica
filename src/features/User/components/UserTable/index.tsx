import React from 'react'
import User from '../../entities/User';
import UserRow from '../UserRow';

interface IProps {
    usuarios: User[]
}

const Usertable = ({usuarios}:IProps) => {
    return (
        <div>
            {usuarios.map(user => (
                <UserRow
                    key={user.id}
                    user={user}
                />
            ))}
        </div>
    )
}

export default Usertable;