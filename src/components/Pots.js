import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Pots = () => {
    const [data, setData] = useState([]);
    const { isAuthenticated } = useAuth0();

    // function to fetch data

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setData(json));
    }
    // useEffect for fetching data one time when app load

    useEffect(() => {
        fetchData()
    }, [])

    // delete Post function
    const deletePost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });
        alert("Post deleted")
    }

    // edit post funciton
    const edit = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'foo',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json),alert("post edited"));
    }
    return (
        <div className='posts'>
            
            {isAuthenticated ? <div className='post-container new-posts'>
                <Link to="/addpost"><button className='create-new-posts'>Create New Posts</button></Link>
            </div> : null}
            {data.map((item, index) => {
                return (
                    <div className='post-container' key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        {isAuthenticated ? <div><button className='post-button' onClick={edit}>Edit</button><button className='post-button' onClick={deletePost}>Delete</button></div> : null}
                    </div>
                )
            })}
        </div>
    )
}

export default Pots