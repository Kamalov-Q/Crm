/* eslint-disable no-unused-vars */
import './Feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import 'react-circular-progressbar/dist/styles.css'
const Feature = () => {
  const data = {
    mainTitle: "Total Revenue",
    value: 75,
    text: `75%`,
    title: "Total sales made today",
    amount: "$ 420",
    info: "Previous transactions processing. Last payments may not be included",
    target1: "$12.4k",
    targetInfo1: "Target",
    type1: "positive",
    target2: "$15.7k",
    targetInfo2: "Last Week",
    type2: "negative",
    target3: "$20.5k",
    targetInfo3: "Last Month",
    type3: "positive"
  }
  return (
    <div className='feature'>
      <div className="featureTop">
        <h1 className="title">
        {data?.mainTitle}
        </h1>
        <MoreVertIcon className='icon' fontSize='small'/>
      </div>
      <div className="featureBottom">
        <div className="featureChart">
          <CircularProgressbar value={data?.value} text={data?.text} strokeWidth={15}/>
        </div>
        <p className="title">{data?.title}</p>
        <p className="amount">{data?.amount}</p>
        <p className="desc">{data?.info}</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              {data?.targetInfo1}
            </div>
            <div className={`${data?.type1} itemResult`}>
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultAmount">
             {data?.target1}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              {data?.targetInfo2}
            </div>
            <div className={`${data?.type2} itemResult`}>
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultAmount">
              {data?.target2}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              {data?.targetInfo3}
            </div>
            <div className={`${data?.type3} itemResult`}>
              <KeyboardArrowUpIcon fontSize='small'/>
              <div className="resultAmount">
             {data?.target3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
