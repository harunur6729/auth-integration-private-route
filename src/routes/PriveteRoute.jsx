import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PriveteRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
        return children;
    }
    
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PriveteRoute;