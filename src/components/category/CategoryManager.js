export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`
        }
    })
        .then(res => res.json())
}

export const createCategory = category => {
    return fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: {
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
        .then(getCategories)
}

export const deleteCategory = (categoryId, func) => {
    return fetch(`http://localhost:8000/categories/${categoryId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`
        }
    })
        .then(func)
}

export const getCategoryById = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`, {
        headers: {
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`
        }
    })
        .then(res => res.json())
}

export const updateCategory = category => {
    return fetch(`http://localhost:8000/categories/${category.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
        .then()
}