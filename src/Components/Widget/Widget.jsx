/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PercentIcon from '@mui/icons-material/Percent';
const Widget = ( {widgetType} ) => {
    let data;
    switch(widgetType) {
        case "user" : {
            data={
                title: "users", 
                isMoney: false,
                stats: 21312,
                link: "See all users",
                number: "20%",
                type: "positive",
                icon: <PersonIcon className='icon'/>
            }
        }
        break
        case "order" : {
            data={
                title: "Orders",
                isMoney: false,
                stats: "12000+",
                link: "See all orders",
                number: "15%",
                type: "negative",
                icon: <ShoppingCartIcon className='icon'/>
            }
        }
        break
        case "earning" : {
            data={
                title: "Earnings",
                isMoney: true,
                stats: "1000+", 
                number: "25%",
                link: "View all earnings",
                type: "positive",
                icon : <PercentIcon className='icon'/>
            }
        }
        break
       /*  case "balance" : {
            data={
                title:"See all Balance",
                isMoney: true,
                
            }
        } */
    }
  return (
        <div className="widget">
            <div className="left">
                <span className="title">{data?.title}</span>
                <span className="counter">{data?.stats}</span>
                <span className="link">{data?.link}</span>
            </div>
            <div className="right">
               <div className={`${data?.type} percentage`}>
               {
                data?.type==="positive" ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>
               }
               {data?.number}
               </div>
               {data?.icon}
            </div>
        </div>
  )
}

export default Widget
