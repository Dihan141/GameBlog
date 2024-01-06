import React from 'react'
import base_url from '../URL'

function NormalBlogDetails({ blog }) {
  return (
    <div>
        <h3>Normal Blog</h3>
        <h3>{ blog.author }</h3>
        <p>{ blog.body }</p>
        {blog.images && blog.images.map((image) => (
            <img src= {base_url + '/postImage/' + image} height='300px' width='300px'/>
        ))}

        {blog.videos && blog.videos.map((video) => (
            <video controls src= {base_url + '/postImage/' + video} height='400px' width='600px' type="video/mp4"/>
        ))}
    </div>
  )
}

export default NormalBlogDetails