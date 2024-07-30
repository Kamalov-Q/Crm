/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const Widget = ({ widgetType }) => {
  let data;
  switch (widgetType) {
    case "user":
      {
        data = {
          title: "users",
          isMoney: false,
          stats: 21312,
          link: "See all users",
          number: "20%",
          type: "positive",
          icon: (
            <PersonIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        };
      }
      break;
    case "order":
      {
        data = {
          title: "Orders",
          isMoney: false,
          stats: "12000+",
          link: "See all orders",
          number: "15%",
          type: "negative",
          icon: (
            <ShoppingCartIcon
              className="icon"
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(218, 165, 32, 0.2)",
              }}
            />
          ),
        };
      }
      break;
    case "earning":
      {
        data = {
          title: "Earnings",
          isMoney: true,
          stats: "1000+",
          number: "25%",
          link: "View all earnings",
          type: "positive",
          icon: (
            <MonetizationOnIcon
              className="icon"
              style={{
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.2)",
              }}
            />
          ),
        };
      }
      break;
    case "balance": {
      data = {
        title: "See all Balance",
        isMoney: true,
        stats: 3250,
        number: "10%",
        link: "Observe the balance",
        type: "positive",
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
    }
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">
          {data?.isMoney && "$"} {data?.stats}
        </span>
        <span className="link">{data?.link}</span>
      </div>
      <div className="right">
        <div className={`${data?.type} percentage`}>
          {data?.type === "positive" ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
          {data?.number}
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
