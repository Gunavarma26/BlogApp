import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import '../style/postpage.css'
import Footer from './Footer';
import { Modal } from 'antd';
import { MdOutlineCancel } from "react-icons/md";



const PostPage = () => {

  const {post, handleDelete} = useContext(DataContext)
  const {id} = useParams();
  const AllPost = post.find(post => (post.id).toString()===id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const page = useNavigate()
  return (
    <>
      
      <article>
        {AllPost && 
          <div>
            <div className='container' >
              <img className='img' src={AllPost.img} alt={AllPost.title} />
              <div className='titlecontiner'>
                <h2 className='title' >{AllPost.title}</h2>
                <FaEdit className='editbtn' onClick={()=>{page(`/edit/${AllPost.id}`)}} />
                <FaTrashAlt className='deletbtn' onClick={()=>{setIsModalOpen(true)}} />
              </div>
              <p style={{margin:"10px",fontFamily:"cursive",fontSize:"22px"}} >{AllPost.body}</p>
            </div>
              <Footer className='footer' /> 
             
              <Modal width={400} okText={"Delete"} open={isModalOpen} onOk={()=>{handleDelete(AllPost.id); setIsModalOpen(false)}} onCancel={handleCancel}>
                <div className='modal_content' >
                  <MdOutlineCancel style={{width:"70px",color:"red",height:"60px"}} />
                  <h4>Are you sure ?</h4>
                  <p>Do you really-want to delete these recordes? this process cannot be undo</p>
                </div>
              </Modal>        
          </div>
        }
        {!AllPost && 
          <div>
            <h2>Post Not Found </h2>
            <p>Well, that's disappointing</p>
            <p>
              <Link to='/'>Go To Homepage</Link>
            </p>
          </div>
        }
      </article>
    
    </>
  )
}

export default PostPage