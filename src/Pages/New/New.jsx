/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './New.scss'
import { useState } from 'react';
const New = ({inputs, title}) => {
  const data = inputs;
  const [file, setFile] = useState(null);
  
  return (
    <div className='new '>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="newTop">
          <h1 className="title">{title}</h1>
        </div>
        <div className="newBottom">
            <div className="left">
              <img src={file ? URL.createObjectURL(file) : `https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg`} alt="Image" />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="uploadImg">
                    Image :
                    <DriveFolderUploadIcon className='icon'/>
                  </label>
                  <input type="file" accept='images/*' onChange={(e) => setFile(e?.target?.files[0])} id='uploadImg' style={{display: "none"}}/>
                </div>
                {
                  data && data?.map((item, index) => (
                    <div className="formInput" key={index}>
                    <label htmlFor={item?.label}>{item?.label}</label>
                    <input type={item?.type} placeholder={item?.placeholder} id={item?.label} />
                  </div>
                  ))
                }
                {/* <div className="formInput">
                  <label htmlFor="username">Username</label>
                  <input type="text" placeholder='john_doe' id="username" />
                </div>
                <div className="formInput">
                  <label htmlFor="fullName">Name and surname</label>
                  <input type="text" placeholder='John Doe' id="fullName" />
                </div>
                <div className="formInput">
                  <label htmlFor="email">Email </label>
                  <input type="email" placeholder='johndoe@gmail.com' id="email" />
                </div>
                <div className="formInput">
                  <label htmlFor="tel">Phone</label>
                  <input type="tel" placeholder='+1 234 567 89' id="tel" />
                </div>
                <div className="formInput">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" />
                </div>
                <div className="formInput">
                  <label htmlFor="address">Address</label>
                  <input type="text" placeholder='Elton St. 216 New York' id="address" />
                </div>
                <div className="formInput">
                  <label htmlFor="country">Country </label>
                  <input type="text" placeholder='USA' id="country" />
                </div> */}
                <button>Send</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default New
