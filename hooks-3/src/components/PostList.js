import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostItem from './PostItem'

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () =>{
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const res = await axios.get(url)
            setPosts(res.data)
        }
        fetchPosts()
        
        // axios.get(url)
        //     .then(res => {
        //         setPosts(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    },[])

    return posts.map(post => <PostItem key={post.id} post={post} />)
}

export default PostList