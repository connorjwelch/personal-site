import React from "react";
import Header from "./ui/Header";

const menuItems = [
  {
    label: "Resume",
    key: "item1"
  },
  {
    label: "Projects",
    key: "item2"
  },
  {
    label: "About Me",
    key: "item3"
  }
];

const App = () => {
  return (
    <div>
      <Header title="Connor Welch" menuItems={menuItems} />
      <h1> Test Page </h1>
    </div>
  );
};

export default App;
