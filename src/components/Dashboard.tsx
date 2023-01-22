import React, { useState } from 'react';
import '../App.css';
import BarChart from '../charts/BarChart';
import Select from 'react-select';
import RadarChart from '../charts/RadarChart';
import LineChart from '../charts/LineChart';

// Dashboard component that sets the state of the selected option 
// and the data to be displayed in the charts using Hooks
// Passes the selected option and data to the charts as props
function Dashboard() {

  // state variables, and their setters
  const [label, setLabel] = useState(null) 
  const [labels, setLabels] = useState<String[]>([]) 
  const [data, setData] = useState<Number[]>([])

  // options for the dropdown menu
  const options = [
    { value: 'temperature', label: 'Temperature' },
    { value: 'dewpoint', label: 'Dew Point' },
    { value: 'visibility', label: 'Visibility' }
];

  const handleChange = async (selectedOption: any) => {
    const response = await fetch('http://localhost:3000/getData');
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const jsonData = await response.json();
    setLabel(selectedOption.value)
    setLabels(jsonData.map((item: { timestamp: any; }) => item.timestamp))
    if (selectedOption.value === 'temperature') {
      setData(jsonData.map((item: { temperature: any; }) => item.temperature))
    } else if (selectedOption.value === 'dewpoint') {
      setData(jsonData.map((item: { dewpoint: any; }) => item.dewpoint))
    } else {
      setData(jsonData.map((item: { visibility: any; }) => item.visibility))
    }
    
  }

  return (
    <div>
      <div data-testid = "Select-div">
      <Select data-testid = "Select" options={options} onChange={handleChange}/>
      </div>
      {label != null && data  != null &&
        <div data-testid= "charts"> 
          <BarChart data-testid = "BarChart" label = {label} labels={labels} selectedData = {data} />
          <RadarChart data-testid = "RadarChart" label = {label} labels={labels} selectedData = {data} />
          <LineChart  data-testid = "LineChart" label = {label} labels={labels} selectedData = {data} />
        </div>
      }
      {label == null && data == null &&
        <div data-testid= "no-charts">
          <h1> No data to fetch. </h1>
        </div>
      }
    </div>
    
  );
}

export default Dashboard;