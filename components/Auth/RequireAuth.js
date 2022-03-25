import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

function RequireAuth({ children }) {
    const authCtx = useContext(AuthContext);
  
    return authCtx === true
      ? children
      : <Navigate to="/auth" replace />;
  }

export default RequireAuth