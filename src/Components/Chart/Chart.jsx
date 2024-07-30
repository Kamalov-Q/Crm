/* eslint-disable no-unused-vars */
import "./Chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Chart = () => {
  const data = [
    {name: "January", Total: 1200},
    {name: "February", Total: 1100},
    {name: "March", Total: 800},
    {name: "April", Total: 1500},
    {name: "May", Total: 1000},
    {name: "June", Total: 1500},
    {name: "July", Total: 1000},
    {name: "August", Total: 2000},
    {name: "September", Total: 2100},
    {name: "October", Total:1200},
    {name: "November", Total: 1000},
    {name: "December", Total: 750}
  ]
  return (
    <div className="chart">
      <div className="title">Last 6 month (Revenue)</div>
      <ResponsiveContainer width="100%" style={{padding:"15px"}} aspect={2/1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
