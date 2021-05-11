import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a React Component",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating Components",
  },
  {
    title: "Why use React?",
    content: "React is favorite JS Library among engineers",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The Color Green",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />{" "}
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select A color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />{" "}
      </Route>
      <Route path="/translate">
        <Translate />{" "}
      </Route>
    </div>
  );
};

export default App;
