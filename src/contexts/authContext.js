import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../fire";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState('')
  function handleLogin(values, navigate) {
    let { email, password } = values
    // console.log(email, password)
    setError("")
    fire.auth().signInWithEmailAndPassword(email, password).then(() => navigate('/')).catch((err) => setError(err.message))
  }
  function handleSignUp(values, navigate) {
    let { email, password } = values
    // console.log(email, password)
    setError("")
    fire.auth().createUserWithEmailAndPassword(email, password).then(() => handleLogin({ email, password }, navigate)).catch((err) => setError(err.message))
  }
  function handleLogOut() {
    fire.auth().signOut();
  }
  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        setCurrentUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);



  return <authContext.Provider value={{
    currentUser,
    handleLogOut,
    handleLogin,
    handleSignUp,
    error,
    setError
  }
  }> {children}</authContext.Provider >;
};

export default AuthContextProvider;
