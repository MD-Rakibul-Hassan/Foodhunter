import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const use_Context = () => {
    const data = useContext(AuthContext);
    return data
}

export default use_Context;
