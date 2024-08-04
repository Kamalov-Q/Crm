/* eslint-disable no-unused-vars */
import Chart from "../../Components/Chart/Chart";
import Feature from "../../Components/Featured/Feature";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widget";
import "./Home.scss";
import TableData from "../../Components/Table/TableData";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget widgetType="user" />
          <Widget widgetType="earning" />
          <Widget widgetType="order" />
          <Widget widgetType="balance" />
        </div>
        <div className="charts">
          <Feature />
          <Chart aspect={2/1} title={"Last 6 month (Revenue)"}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest transactions
          </div>
          <TableData/>
        </div>
      </div>
    </div>
  );
};

export default Home;
