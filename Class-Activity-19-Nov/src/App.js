import "./App.css";
import Input from "./Components/input";
import Btn from "./Components/button";

function App() {

  return (
    <div className="container my-5 p-5">
      <Input placeholder={"Enter Your Name"}/>
      <Input placeholder={"Enter Your Email"}/>
      <Btn color={"danger"}/>
    </div>
  );
}

export default App;
