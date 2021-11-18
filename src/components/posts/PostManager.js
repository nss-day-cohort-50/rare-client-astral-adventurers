export const getAllPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
        }
    })
    .then(res => res.json())
};

export const getPostById = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
        }
    })
    .then(res => res.json())
};

export const deletePost = (postId, func) => {
    fetch(`http://localhost:8000/posts/${postId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
        }
    })
        .then(func)
}

export const getMyPosts = (authorId) => {
    return fetch(`http://localhost:8000/posts?author_id=${authorId}}`,{
        headers:{
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`
        }})
    .then(res => res.json())
}

export const publishOrUnpublish = (postId) => {
    return fetch(`http://localhost:8000/posts/${postId}/publish`, {
        method: "PUT",
        headers:{
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type" : "application/json"
        },
    })
        .then(getAllPosts)
}

export const createNewPost = (post) => {
    return fetch(`http://localhost:8000/posts`,{
        method: "POST",
        headers:{
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
}

export const updatePost = (post) => {
    return fetch(`http://localhost:8000/posts/${post.id}`,{
        method: "PUT",
        headers:{
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
}


