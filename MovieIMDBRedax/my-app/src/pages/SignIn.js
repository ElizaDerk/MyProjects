import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logUserIn} from "../store/features/users/usersSlice";
import LogInForm from "../components/LogInForm";

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const setLoginFlag = () => {
        dispatch(logUserIn())
        navigate('/browse')
    }

    return(
        <div className="div-form">
            <LogInForm/>
            <button onClick={setLoginFlag}>LogIn</button>
        </div>
    )

}

export default SignIn;
