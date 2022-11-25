import React, { useState } from 'react'
import { Link} from 'react-router-dom'

const AddPost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState(1)

  // function for Posting new post
  
  const addPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json),alert("Your Post is uploaded"));
  }

  return (
    <div className='signup-container'>
      <input className='input' type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Enter title' />
      <input className='input' type="text" value={body} onChange={(e) => { setBody(e.target.value) }} placeholder='Enter body' />
      <input className='input' value={userId} onChange={(e) => { setUserId(e.target.value) }} placeholder='Enter userId' />

      <Link to='/'><button className='button' onClick={addPost}>Add Post</button></Link>
    </div>
  )
}

export default AddPost