import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { getMyPosts, publishOrUnpublish } from "./PostManager";
// import { FaEdit } from "react-icons/fa"

export const UserPostList = (props) => {
    console.log(props)
    // const history = useHistory()
    const [posts, setPosts] = useState([])

    const fetchMyPosts = ()=>{
        getMyPosts()
        .then(data => setPosts(data))
    } 

    useEffect(() => {
        fetchMyPosts()
    }, [])

        
        return (
            <>
            
            <h2 className="title">Your Posts</h2>
            <div className="allPosts">
                {
                    posts.map((post) => {     
                        return <>        
                                <div className="space-between">
                                    <h4 className="mp-title"><Link to={`/posts/${post.id}`}>Title: {post.title}</Link></h4>
                                    <p>{post.author?.first_name} {post.author?.last_name}</p>
                                    <p>{post.publication_date}</p>
                                    <p>{post.content}</p>
                                    <p>Category: {post.category?.label}</p>
                                
                                    <div className="buttons">
                                    {
                                        post.is_published ? 
                                        <button onClick={() => publishOrUnpublish(post.id).then(() => fetchMyPosts())}>Unpublish</button>
                                        : <button onClick={() => publishOrUnpublish(post.id).then(() => fetchMyPosts())}>Publish</button>
                                    }
                                    </div>
                                </div>
                            </>
                        }
                    )}
            </div>
        </>
    )
}
