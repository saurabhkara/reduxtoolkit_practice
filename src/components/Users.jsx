import UserDetails from "./UserDetails";
export default function Users() {
  return (
    <UserDetails
      name={"Saurabh"}
      email={"saurabhkumar679@gmail.com"}
      onEdit={() => console.log("Edit")}
      onDelete={() => console.log("Delete")}
    />
  );
}
