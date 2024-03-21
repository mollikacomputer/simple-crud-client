import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    // const form = event.target;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        if(data.insertedId){
            alert('User Added Successfully');
            event.target.reset();
        }
      });
  };
  return (
    <div>
      <h1>Simple crud Client</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
