import React, { useState, useEffect } from "react"
// import { useHistory, Link } from "react-router-dom"
import { getMyPosts } from "./PostManager";
// import { FaEdit } from "react-icons/fa"

export const UserPostList = (props) => {
    console.log(props)
    // const history = useHistory()
    const [posts, setPosts] = useState([])
    const [isPublished, setIsPublished] = useState(true)



    useEffect(() => {
        getMyPosts()
        .then(data => setPosts(data))
    }, [])

    const togglePublishButton = () => {
        if (isPublished === true) {
            setIsPublished(false)
        } else {
            setIsPublished(true)
        }
    }
        
        return (
            <>

            <h2 className="title">Your Posts</h2>
            <div className="allPosts">

                {
                    posts.map((post) => {     
                        return <>        
                                <div className="space-between">
                                    <h4 className="mp-title">Title: {post.title}</h4>
                                    <p>{post.author?.first_name} {post.author?.last_name}</p>
                                    <p>{post.publication_date}</p>
                                    <p>{post.content}</p>
                                    <p>Category: {post.category?.label}</p>
                                
                                    <div className="buttons">
                                    {
                                        isPublished ? 
                                        <button onclick={() => togglePublishButton()}>Unpublish</button>
                                        : <button onClick={() => togglePublishButton()}>Publish</button>
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
