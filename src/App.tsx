import { useState } from 'react';
import './App.css';
import Select from './Select';

const options = [
  {label: "XS", value: "XS"},
  {label: "S", value: "S"},
  {label: "M", value: "M"},
  {label: "L", value: "L"},
  {label: "XL", value: "XL"},
]

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

  return (
    <div>
      <h1>Select</h1>
      <Select options={options} value={value} onChange={o => setValue(o)} />
    </div>
  )
}

export default App;
