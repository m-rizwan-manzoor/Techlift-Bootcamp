import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Auth(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    var logged = localStorage.getItem("loggedUser");
    var loggedUser = JSON.parse(logged);

    if (loggedUser) {
      setIsLogin(true);
    }
  }, []);
  return (
    <>
      {isLogin ? (
        props.children
      ) : (
        <div className="container">
          <h3 className="my-3">You are not logged in.</h3>
          <h6>Please login or create user if you are not a user.</h6>
          <Link to="/login">
            <button className="my-2 btn btn-primary">Login</button>
          </Link>
          <Link to="/signup">
            <button className="mx-2 my-2 btn btn-secondary">Create User</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Auth;
