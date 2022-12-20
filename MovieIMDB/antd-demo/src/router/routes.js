import Browser from "../pages/Browser";
import Title from "../pages/Title";
import SingIn from "../pages/SignIn";

const routes = [
    {
        name: 'Browser',
        path: "/browser",
        element: <Browser />,
    },
    {
        name: 'Title',
        path: `/title/:id`,
        element: <Title />,
    },
    {
        name: 'SingIn',
        // path: "/sing-in",
        path: "/",
        element: <SingIn />,
    },
];

export default routes;
