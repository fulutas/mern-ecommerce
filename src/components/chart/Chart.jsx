import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Chart = ({ title, data, dataKey, grid}) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      {data.length === 0 && (
        <div style={{ textAlign : 'center'}}>No data.</div>
      )}
      <ResponsiveContainer width='99%' aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey='name' stroke="#716BDE" />
            <Line type='monotone' dataKey={dataKey} stroke="#716BDE" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray='5 5' />}
            <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
 