import React, { useState, useEffect } from "react"
import { createNewPost, updatePost, getPostById } from "./PostManager"
import { getCategories } from "../category/CategoryManager"
import { useParams, useHistory } from 'react-router-dom'
import { HumanDate } from "../utils/HumanDate"

export const PostForm = () => {
    const [ categories, setCategories ] = useState([])
    const { postId } = useParams()
    const [post, setPost] = useState({})
    const history = useHistory()
    const editMode = postId ? true : false  // true or false

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newPost = Object.assign({}, post)          // Create copy
        newPost[event.target.name] = event.target.value  // Modify copy
        setPost(newPost)                                 // Set copy as new state
    }

    // Get posts from API when component initializes
    useEffect(() => {
        if (editMode) {
            
            getPostById(parseInt(postId)).then((postData) => {
                setPost(
                    {...postData,
                        authorID : post.author.id,
                        categoryId: post.category.id,
                        imageUrl: post.image_url,
                        publicationDate: post.publication_date,
                        isPublished: post.is_published
                    }
            )}
            )}
        getCategories().then(categoriesData => setCategories(categoriesData))
    }, [])

    

    const createPost = () => {
        // debugger
        const categoryId = parseInt(post.category_id)

        if (categoryId === 0) {
            window.alert("Please select a category")
        } else {
            if (editMode) {
                // PUT
                updatePost({
                    title: post.title,
                    publication_date: post.publicationDate,
                    content: post.content,
                    author: post.authorId,
                    category: post.categoryId,
                    is_published: post.isPublished,
                    image_url: post.imageUrl
                })
                    .then(() => history.push("/posts"))
            } else {
                // POST
                createNewPost({
                    title: post.title,
                    publication_date: HumanDate(),
                    content: post.content,
                    author: parseInt(localStorage.getItem("rare_user_id")),
                    category: post.categoryId,
                    is_published: false,
                    image_url: post.imageUrl
                })
                    .then(() => history.goBack())
            }
        }
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">{editMode ? "Update Post" : "Create Post"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Post Title: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Title"
                        defaultValue={post.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Content: </label>
                    <textarea type="text" name="content" required className="form-control"
                        placeholder="Post Content"
                        defaultValue={post.content}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Category: </label>
                    <select name="category" className="form-control"
                        value={post.categoryId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a Category</option>
                        {
                            categories.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Image: </label>
                    <textarea type="text" name="content"  className="form-control"
                        placeholder="Image url"
                        defaultValue={post.imageUrl}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createPost()
                }}
                className="btn btn-primary">
                {editMode ? "Save Update" : "Create Post"}
            </button>
        </form>
    )
}