import {useLoaderData} from 'react-router-dom'
const UpdateUser = () => {
    const loadedUser = useLoaderData();
    const updateUser = event =>{
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      console.log(name, email);
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
