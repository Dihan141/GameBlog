import React, { useEffect, useState } from 'react'
import axios from 'axios'
import base_url from '../URL'
import NormalBlogDetails from '../Components/NormalBlogDetails'
import ReviewBlogDetails from '../Components/ReviewBlogDetails'

function Dashboard() {
  const [ blogs, setBlogs ] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(`${base_url}/api/posts/all`)
      const data = response.data
      console.log(data)

      if(response.status === 200){
        console.log('ok response')
        setBlogs(data)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="blogs">
        {blogs && blogs.map((blog) => {
          if(blog.postType === 'normal')
            return <NormalBlogDetails blog={blog} key={blog._id} />
          else
            return <ReviewBlogDetails blog={blog} key={blog._id} />
        })}
      </div>
    </div>
  )
}

export default Dashboard