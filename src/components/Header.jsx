import { useSelector } from "react-redux";

export function Header() {
  const user = useSelector((state) => state.usero);
  const myname = useSelector((state) => state.examp);

  return (
    <header>
      <ul>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>myname: {myname}</li>
      </ul>
    </header>
  );
}
