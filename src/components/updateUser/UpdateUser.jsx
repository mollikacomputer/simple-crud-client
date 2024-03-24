import {useLoaderData} from 'react-router-dom'
const UpdateUser = () => {
    const loadedUser = useLoaderData();
    const updateUser = event =>{
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const newUpdateUser = {name, email};
      console.log(newUpdateUser);
      fetch(`http://localhost:5000/users/${loadedUser._id}`, {
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newUpdateUser)
      })
      .then(res => res.json())
      .then( data => {
        console.log(data);
      })
    }
  return (
    <div>
      <h2>Update </h2>
        <h3> Update user name : {loadedUser.name} and email: {loadedUser.email} </h3>
      <form onSubmit={updateUser} >
        <input type="text" name="name" defaultValue={loadedUser.name} id="" />
        <br />
        <input type="email" defaultValue={loadedUser.email} name="email" id="" />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
