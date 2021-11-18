import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getPostById } from "./PostManager"  // <---.js or no?
//import author post detail view css 

export const PostDetails = () => {
    const [post, setPost] = useState({})
    const { postId } = useParams()
    //const history = useHistory()  <--- for future edit post button

    useEffect(() => {
        getPostById(postId).then((res) => {
    setPost({
        id: res.id,
        title: res.title,
        imageUrl: res.image_url,
        publicationDate: res.publication_date,
        content: res.content,
        username: res.author.user.username,
        label: res.category.label
    })
})
    },
[])

return (
    <section className="post">
        <h3 className="post__title">Title: {post.title}</h3>
        <div className="post__publication_date">{post.imageUrl!= "" ? <img src={post.imageUrl} alt="profile Picture" />: ""}</div>
        <div className="post__publication_date">Date Published: {post.publicationDate}</div>
        <div className="post__content">Content: {post.content}</div>
        <div className="post__user_id">By: {post.username}</div>
        <div className="post__category_name">Category: {post.label}</div>

        {/* <button onClick={() => {                            <--- for future edit post button
                history.push(`/posts/edit/${post.id}`)
            }}>Edit</button> */}

    </section>
)
}


