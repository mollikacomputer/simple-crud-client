import React from 'react';
import {useLoaderData} from 'react-router-dom';
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2> Users Data</h2>
            {
                users.length
            }
            <div>
                {
                    users.map(user => <p> {user.name} : {user.email} </p> )
                }
            </div>
        </div>
    );
};

export default Users;