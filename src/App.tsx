import { useState } from "react";
import "./App.css";
import Select, { SelectOption } from "./Select";

const options = [
  { label: "SELECT A SIZE", value: "SELECT A SIZE" },
  { label: "XS", value: "XS" },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
];

const skills = [
  { label: "JavaScript", value: "JavaScript" },
  { label: "Python", value: "Python" },
  { label: "HTML", value: "HTML" },
  { label: "CSS", value: "CSS" },
  { label: "React", value: "React" },
  { label: "Node", value: "Node" },
  { label: "RESTful API", value: "RESTful API" },
  { label: "AWS", value: "AWS" },
  { label: "MongoDB", value: "MongoDB" },
  { label: "MySQL", value: "MySQL" },
  { label: "PostgreSQL", value: "PostgreSQL" },
];

function App() {
  const [singleValue, setSingleValue] = useState<SelectOption | undefined>(
    options[0]
  );
  const [multiValue, setMultiValue] = useState<SelectOption[]>([]);

  return (
    <div className="app">
      <div className="size">
        <h1>Size</h1>
        <Select
          options={options}
          value={singleValue}
          onChange={(o) => setSingleValue(o)}
        />
      </div>
      <div style={{ height: "12em" }} />
      <div className="skill">
        <h1>Skills</h1>
        <Select
          multiple
          options={skills}
          value={multiValue}
          onChange={(o) => setMultiValue(o)}
        />
      </div>
    </div>
  );
}

export default App;
