export const getAllPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
        }
    })
    .then(res => res.json())
};

export const getPostById = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`)
    .then(res => res.json())
};

export const deletePost = (postId, func) => {
    fetch(`http://localhost:8000/posts/${postId}`, {
        method: "DELETE"
    })
        .then(func)
}

const authorId = localStorage.getItem('rare_user_id')
export const getMyPosts = (authorId) => {
    return fetch(`http://localhost:8000/posts?author_id=${authorId}}`,{
        headers:{
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
        }})
    .then(res => res.json())
}


