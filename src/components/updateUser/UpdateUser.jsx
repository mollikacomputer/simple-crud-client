import {useLoaderData} from 'react-router-dom'
const UpdateUser = () => {
    const loadedUser = useLoaderData();

  return (
    <div>
      <h2>Update </h2>
        <h3> Update user name : {loadedUser.name} and email: {loadedUser.email} </h3>
      {/* <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form> */}
    </div>
  );
};

export default UpdateUser;
