import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { Header } from "./components/Header";
import { Email } from "./components/Email";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Email />
      <Counter />
    </div>
  );
}

export default App;
