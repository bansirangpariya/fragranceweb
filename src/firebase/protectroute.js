import { useEffect } from "react";
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  useEffect(() => {
    if (!user?.uid) {
    }
  }, [user]);

  return children;
};

export default ProtectedRoute;
