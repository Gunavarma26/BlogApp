
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/post.css';

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <article className='post-container'> 
        <Link className='post' to={`post/${post.id}`}>
          <img className='postimg' src={post.img}  alt={post.title} />
          <h2 className='posttitle' >{post.title}</h2>
          <p className='postbody' >{post.body.length <= 25 ? post.body : `${post.body.slice(0, 135)}...`}</p> 
          <p className='posttime' >{post.datetime}</p>
        </Link>
      </article>
    </div>
  );
};

export default Post;
