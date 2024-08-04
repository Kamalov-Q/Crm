/* eslint-disable no-unused-vars */
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Sidebar.scss";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <Link className='sidebarTop_link' to={`/`}>
        <span className="sidebar__logo">Admin Panel</span></Link>
      </div>
      <hr />
      <div className="sidebarCenter">
        <ul>
          <p className="title">MAIN</p>
          <Link to={`/`} className='sidebar_link'>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </Link>
          <p className="title">LISTS</p>
          <Link className='sidebar_link' to={`/users`}>
            <AccountCircleIcon className='icon' />
            <span>Users</span>
          </Link>
          <Link to={`/products`} className='sidebar_link'>
            <InventoryIcon className='icon'/>
            <span>Products</span>
          </Link>
          <Link className='sidebar_link'>
            <FilterFramesIcon className='icon'/>
            <span>Orders</span>
          </Link>
          <Link className='sidebar_link'>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </Link>
          <p className="title">USEFUL</p>
          <Link className='sidebar_link'>
            <QueryStatsIcon className='icon'/>
            <span>Stats</span>
          </Link>
          <Link className='sidebar_link'>
            <NotificationsIcon className='icon'/>
            <span>Notifications</span>
          </Link>
          <p className="title">SERVICE</p>
          <Link className='sidebar_link'>
            <SettingsSuggestIcon className='icon'/>
            <span>System Health</span>
          </Link>
          <Link className='sidebar_link'>
            <BrandingWatermarkIcon className='icon'/>
            <span>Logs</span>
          </Link>
          <p className="title">USER</p>
          <Link className='sidebar_link'>
            <AccountBoxIcon className='icon'/>
            <span>Profile</span>
          </Link>
          <Link className='sidebar_link'>
            <LogoutIcon className='icon'/>
            <span>Log Out</span>
          </Link>
        </ul>
      </div>
      <div className="sidebarBottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
