import React from 'react'
import Post from './Post'

const Feed = ({post}) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',rowGap:"0.5cm",padding:"10px"}}>
        {post.map( (post) =>(
            <Post key={post.id} post={post} />
        ))}
    </div>
  )
}

export default Feed