import React from 'react'
import Usertable from './components/UserTable';
import useGetListUser from "./hooks/useGetListUser";

const User = () => {

    const {usuarios} = useGetListUser();

    return (
        <div className="container mx-auto py-4">
            {
                usuarios !== undefined
                    ? <Usertable usuarios={usuarios} />
                    : <p>Cargando :D</p>
            }
        </div>
    )
}

export default User;