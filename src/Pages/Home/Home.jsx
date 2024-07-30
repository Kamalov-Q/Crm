/* eslint-disable no-unused-vars */
import Chart from "../../Components/Chart/Chart";
import Feature from "../../Components/Featured/Feature";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Widget from "../../Components/Widget/Widget";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget  widgetType="user" />
          <Widget  widgetType="earning"/>
          <Widget  widgetType="order" />
          <Widget  widgetType="balance" />
        </div>
        <div className="charts">
          <Feature/>
          <Chart/>
        </div>
      </div>
    </div>
  );
};

export default Home;
