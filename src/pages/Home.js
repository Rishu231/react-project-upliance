import React from "react";
import Counter from "../components/Counter/Counter";
import UserForm from "../components/UserForm/UserForm";
import UserDetailsForm from "../components/UserForm/UserDetailsForm";
import RichTextEditor from "../components/RichTextEditor/RichTextEditor";
import WaveAnimation from "../components/WaveAnimation";
import "../styles/global.css";


const Home = () => {
  return (
    <div>
      <h1>Welcome to the React App</h1>
      <div className="row-container">
        <Counter />
        <RichTextEditor />
      </div>
      <div className="row-container">
        <UserDetailsForm/>
        <UserForm />
      </div>
      
      <div className="animfooter">
      <div><WaveAnimation /></div>
      <div><WaveAnimation /></div>
      </div>
    </div>
  );
};

export default Home;
