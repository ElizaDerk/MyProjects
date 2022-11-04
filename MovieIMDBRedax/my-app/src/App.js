
import './App.css';
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logUserOut} from "./store/features/users/usersSlice";

const App = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logUserOut());
    navigate("/sign-in");
  }

  return (
    <div className="App">
      <header>
        <button onClick={logout}>LogOut</button>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
