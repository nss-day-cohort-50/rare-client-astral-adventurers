import React, { useState, useEffect } from "react"
// import { useHistory, Link } from "react-router-dom"
import { getAllPosts } from "./PostManager";
// import { FaEdit } from "react-icons/fa"

export const UserPostList = (props) => {
    console.log(props)
    // const history = useHistory()
    const [posts, setPosts] = useState([])


        useEffect(() => {
            getAllPosts()
            .then(data => setPosts(data))
        }, [])


    return (
        <>

            <h2 className="title">Your Posts</h2>
            <div className="allPosts">

                {
                    posts?.map((post) => {
                      
                        if (post?.user_id === parseInt(localStorage.getItem("rare_user_id"))) {
                        
                         <>
                                <div className="space-between">
                                    <h4 className="mp-title">Title: {post.title}</h4>
                                    <p>Author: {post.user.first_name} {post.user.last_name}</p>
                                    <p>Date: {post.publication_date}</p>
                                    <p>{post.content}</p>
                                    <p>Category: {post.category.label}</p>
                                
                                    <div className="buttons">
                                    {post.published} ?
                                    <button>Unpublish</button> :
                                    <button>Publish</button>
                                    </div>
                                </div>
                          </>


                        }
                    }
                    )}
            </div>

        </>
    )
}
