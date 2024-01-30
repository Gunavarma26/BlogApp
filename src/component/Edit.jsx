// Edit.jsx

import React, { useContext, useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';
import Footer from './Footer';
import '../style/newpost.css'

//img
import { Modal, Upload } from 'antd';
import { FaEdit } from "react-icons/fa";


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Edit = () => {

   // edit 
    const {post, handleEdit, editBody, setEditBody, editTitle, setEditTitle,editPostImg,setEditPostImg,setPostImg} = useContext(DataContext)
    const {id} = useParams();
    const allpost = post.find(post => (post.id).toString() === id);

    useEffect(() => {
      if (allpost) {
          setEditTitle(allpost.title || ''); // Set to an empty string if allpost.title is falsy
          setEditBody(allpost.body);
          setEditPostImg(allpost.img);
      } else {
          // If allpost is not present, reset the state
          setEditTitle('');
          setEditBody('');
          setEditPostImg('');
      }
  }, [allpost, setEditTitle, setEditBody]);
  

    // img
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [previewTitle, setPreviewTitle] = useState(''); 
  


  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
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
        setEditPostImg(imageUrl);
      console.log(imageUrl);
    }
    
  }
};


  const uploadButton = (
    <div>
      <FaEdit />
      <div style={{ marginTop: 8 }}>Edit Img</div>
    </div>
  );

    
  return (
   <>
        {allpost &&
            <div>
                <h2>Edit Post</h2>
                <form className='newpostcontainer' onSubmit={(e)=>e.preventDefault()}>
                    <p style={{marginTop:"10px"}} >.</p>
                     {/*img*/}
                     <span>
                        <Upload
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                            
                        >
                            {fileList.length >= 1 ? null : uploadButton}
                        </Upload>
                        </span>
                         <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                            <img
                              alt="example"
                              style={{
                                width: '100%',
                              }}
                              src={previewImage}
                            />
                          </Modal>
                    <img className='newpostimg' src={editPostImg} alt="soon" />  
                    <div className='newpostbtns' >
                        <span>
                        <input
                            type="text"
                            className='newposttitle'
                            placeholder='Enter Title'
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                         />
                        </span>
                        <span>
                        <button className='publish' type='submit' onClick={()=> {handleEdit(allpost.id)}}>Publish</button>
                        </span>
                    </div>
                    
                    <textarea
                        className='newpostbody'
                        placeholder='Write Your Lines'
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                    />
                </form>
                <Footer className='footer' />           
            </div>
        }
        { !allpost &&
            <div>
                <h2>Post Not Found</h2>
                <p>Well, that's disappointing </p>
                <p>
                    <Link to='/'>Visit Our Homepage</Link>
                </p>
            </div>
        }
   </>
  )
}

export default Edit