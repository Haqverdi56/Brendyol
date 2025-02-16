import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const cookies = document.cookie.split('; ');
    let token;

    cookies?.forEach(cooki => {
        const [name, value] = cooki.split('=');
        if (name === 'token') {
            token = value;
        }
    });

    return(
        token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;