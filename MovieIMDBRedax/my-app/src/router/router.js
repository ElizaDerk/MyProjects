import {createBrowserRouter, Navigate } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../store/store";
import App from "../App";
import Browse from "../pages/Browse";
import Title from "../pages/Title";
import SignIn from "../pages/SignIn";


const RequireAuth = ({ children, redirectTo }) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('logged-in'))
    return isAuthenticated ? children : <Navigate to={redirectTo} />
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Provider store={store}><RequireAuth children={<App />} redirectTo="/sign-in"/></Provider>,
        children: [
            {
                path: 'browse',
                element: <Browse />
            },
            {
                path: "title",
                children: [
                    {
                        path: ":id",
                        element: <Title />
                    }
                ]
            },
        ]
    },
    {
        path: "/sign-in",
        element: <Provider store={store}><SignIn /></Provider>
    }


])

export default router;
