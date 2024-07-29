/* eslint-disable no-unused-vars */
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
          <Widget type="positive" widgetType="user" />
          <Widget type="negative" widgetType="order" />
          <Widget type="negative" widgetType="earning"/>
          {/* <Widget type="positive" widgetType="balance" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
