// import { useEffect } from "react";
import { useEffect } from "react";
import UserDetails from "./UserDetails";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/slice/UserSlice";

export default function Users() {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);
  console.log("userDataFF", users);

  // async function getUser() {
  // const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
  // const users = await usersData.json();
  //   console.log(users);
  //   dispatch({ type: "users/setUser", payload: users });
  // }

  // useEffect(() => {
  //   getUser();
  // }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          email={user.email}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
        />
      ))}
    </div>
  );
}
