import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";
import {useSelector} from "react-redux";

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user);

    useEffect(() => {
        if (!user) {
            navigate('/sing-in');
        }
    },[])
}

export default ProtectedRoute;
