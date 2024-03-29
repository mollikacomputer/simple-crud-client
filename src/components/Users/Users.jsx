
import { useState } from 'react';
import {Link, useLoaderData} from 'react-router-dom';
const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDeleteUser = (_id) =>{
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount >0 ){
                alert("Deleted successfully");
                const remaining = users.filter( user => user._id !== _id );
                setUsers(remaining);
            }
        })
    }
    return (
        <div>
            <h2> Users Data</h2>
            {
              users.length
            }
            <div>
                {
                 users.map( user => <p key={user._id}> {user.name} : {user.email} {user._id}<button
                 onClick={()=> handleDeleteUser(user._id)}
                 >X</button>
                 <Link to={`/userupdate/${user._id}`} > 
                 <button>
                    Update
                 </button>
                 </Link>
                  </p>)
                }
            </div>
        </div>
    );
};

export default Users;