export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const createCategory = category => {
    return fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
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
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(func)
}

export const getCategoryById = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(res => res.json())
}

export const updateCategory = category => {
    return fetch(`http://localhost:8000/categories/${category.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
        .then()
}