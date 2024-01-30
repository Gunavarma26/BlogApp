// // NewPost.jsx

// import React, { useContext, useEffect, useState } from 'react'
// import {Button, Input} from 'antd'
// import TextArea from 'antd/es/input/TextArea'
// import DataContext from '../context/DataContext'
// import Footer from '../component/Footer'
// import '../style/newpost.css'

// //img
// import { PlusOutlined } from '@ant-design/icons';
// import { Modal, Upload } from 'antd';

// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });

 


// const NewPost = () => {

//   const {handleSubmit, postTitle, setPostTitle, postBody, setPostBody,setPostImg} = useContext(DataContext)

//   // img

//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState('');
//   const [fileList, setFileList] = useState([]);

//   const handleCancel = () => setPreviewOpen(false);

//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewOpen(true);
//   };

//   // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
//   const handleChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
  
//     if (newFileList.length > 0) {
//       const imageUrl = newFileList[0].url || newFileList[0].thumbUrl || newFileList[0].dataUrl;
//       setPostImg(imageUrl); // Set the image URL in DataContext
//       console.log(imageUrl)
//     }
//   };
  
//   const uploadButton = (
//     <button
//       style={{
//         border: 0,
//         background: 'none',
//       }}
//       type="button"
//     >
//       <PlusOutlined />
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Upload
//       </div>
//     </button>
//   );


//   return (
//     <div>
//       <h2>New Post</h2>
//        {/*img*/}
//        <Upload
//           action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
//           listType="picture-card"
//           fileList={fileList}
//           onPreview={handlePreview}
//           onChange={handleChange}
          
//         >
//           {fileList.length >= 1 ? null : uploadButton}
//         </Upload>
//       <form className='newpostcontainer' onSubmit={handleSubmit}>
//         <p style={{marginTop:"50px"}} >.</p>
//         <img className='newpostimg' src={previewImage} alt="soon" />
//         <div className='newpostbtns' >
//           <input type="file" name="" id="" />
//           <button className='publish' type='submit' >Publish</button>
//         </div>
//         {/* <button onClick={()=>{handleChange()}} >check</button> */}
//         <input
//           type='text'
//           placeholder='Enter Title'
//           className='newposttitle'
//           required
//           value={postTitle}
//           onChange={(e)=> setPostTitle(e.target.value)}
//         />
//         <textarea
//           className='newpostbody'
//           placeholder='Write Your Lines'
//           required
//           value={postBody}
//           onChange={(e)=> setPostBody(e.target.value)}
//         />
//       </form>
//       <Footer className='footer' />           
//     </div>
//   )
// }

// export default NewPost



// NewPost.jsx

import React, { useContext, useState } from 'react';
import { Button, Input } from 'antd';
import DataContext from '../context/DataContext';
import Footer from './Footer';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const NewPost = () => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody, setPostImg } = useContext(DataContext);

  // img
  const [previewOpen, setPreviewOpen] = useState(false);
  const [image, setImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [previewTitle, setPreviewTitle] = useState(''); 


  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewOpen(true);
  };

  const handleCancel = () => setPreviewOpen(false);
  const handleChange = ({ fileList: newFileList }) => {
  setFileList(newFileList);

  if (newFileList.length > 0) {
    const file = newFileList[0];
    const imageUrl = file.url || (file.thumbUrl || file.preview) || (file.originFileObj && URL.createObjectURL(file.originFileObj));
    console.log('testing imageUrl',imageUrl);

    if (imageUrl) {
      setPostImg(imageUrl);
      setImage(imageUrl)
      console.log(imageUrl);
    }
  }
};


  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div >
      <h2>New Post</h2>
      
      <form className="newpostcontainer" onSubmit={handleSubmit}>
          <p style={{ marginTop: '10px' }}>.</p>
        <span>
          {/*img*/}
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={() => false} // Prevent automatic upload
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </span>

        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img
            alt="example"
            style={{
              width: '100%',
              borderRadius:"10px"
            }}
            src={image}
          />
        </Modal>
        <img className="newpostimg" src={image} alt="Upload Your image" />
        <div className="newpostbtns">
          <input
            type="text"
            id="postTitle"
            placeholder='Enter Title'
            className="newposttitle"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <button className="publish" type="submit">
            Publish
          </button>
        </div>
        <textarea
          className="newpostbody"
          placeholder="Write Your Lines"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
      </form>
      <Footer className="footer" />
    </div>
  );
};

export default NewPost;
