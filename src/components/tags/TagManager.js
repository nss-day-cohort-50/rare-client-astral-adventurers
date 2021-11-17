
export const getAllTags = () => {
    return fetch("http://localhost:8000/tags", {
        headers: {
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`
        }
    }
    
    )
        .then(res => res.json())
}

export const createNewTag = (newTag) => {
    return fetch("http://localhost:8000/tags", {
        method: "POST",
        headers: {
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTag)
    })
        .then(res => res.json())
        .then(getAllTags())
}

export const updateTag = tag => {
    return fetch(`http://localhost:8000/categories/${tag.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
        .then()
}

export const deleteTag = (tagId, func) => {
    return fetch(`http://localhost:8000/categories/${tagId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`
        }
    })
        .then(func)
}