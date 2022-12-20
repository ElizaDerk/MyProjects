import {Outlet, useNavigate} from "react-router-dom";

const LogOutBtn = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.setItem('logged-in', false);
        // navigate('/sing-in')
        navigate('/')
    }


    return(
        <div>
            <button className="out-btn" onClick={logout}>Log Out</button>
            <Outlet />
        </div>


    )
}

export default LogOutBtn;
