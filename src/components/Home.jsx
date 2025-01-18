import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSlice";
export default function Home() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() =>
          // dispatch({ type: "users/addUser", payload: { name: "John Doe" } })
          dispatch(addUser({ name: "John Doe 2" }))
        }
      >
        Add User
      </button>
    </div>
  );
}
