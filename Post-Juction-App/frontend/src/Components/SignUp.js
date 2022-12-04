import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [enteredName, setName] = useState([]);
  const [isExistingUser, setIsExistingUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    var naam = localStorage.getItem("users");
    var newnaam = JSON.parse(naam);

    console.log(newnaam);
  }, []);

  function Post() {
    const user = {
      name: enteredName,
    };

    // localStorage.setItem("users", JSON.stringify(user));
    // console.log(user);

    if (isExistingUser) {
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((info) => {
          console.log("Response from server" + info);

          // document.getElementById("naam").value = "";
          // document.getElementById("email").value = "";
        });

      navigate("/login");
    }
  }

  // Check if Already Existing User
  const checkCredentials = async () => {
    const response = await fetch("http://localhost:3001/users");
    const jsonData = await response.json();

    let filterData = jsonData.filter((user) => user.name.includes(enteredName));

    if (filterData.length > 0 || enteredName == "") {
      alert("User already exist!");
      setIsExistingUser(true);
    }
    else setIsExistingUser(false);
  };

  return (
    <div className="container bg-light mt-5 p-5 rounded-4">
      <h1>Create User</h1>
      <br></br>

      <div>
        <label>User Name</label>
        <input
          type="text"
          className="form-control"
          id="naam"
          placeholder="Enter Username"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <p className="my-2">
        Already a User?
        <span>
          <Link className="mx-2 text-primary" to="/login">
            Login
          </Link>
        </span>
      </p>
      <div>
        <button className="btn btn-primary" onClick={()=>{
          checkCredentials();
          Post();
        }}>
          Create User
        </button>
      </div>
    </div>
  );
}

export default SignUp;
