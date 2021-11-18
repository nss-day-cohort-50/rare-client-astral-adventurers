import React, { useEffect, useState } from "react";
import { deleteTag, getAllTags } from "./TagManager";
import { Tag } from "./Tag";
import { TagForm } from "./TagForm";
import { Link, useHistory } from "react-router-dom"


export const TagList = () => {
    const [tags, setTags] = useState([])
    const [viewForm, setViewForm] = useState(false) //Change the state onClick of button
    const history = useHistory()

    const getTagList = () => {
        getAllTags()
        .then((data) => setTags(data))
    }
    
    useEffect(() => {
        getTagList()   
    }, [])

    const handleDelete = (id, func) => {
        deleteTag(id, func)
    }

    const toggleForm = () => {
        if (viewForm == true) {
            setViewForm(false)
        } else {
            setViewForm(true)
        }
    }

    const formJSX = 
    <div>
        <TagForm getTags={getTagList} changeView={toggleForm}/>
    </div>

    const noFormJSX = 
    <div>
        <button onClick={() => toggleForm()}>Add New Tag</button>
    </div>



    return (
        <>
        
            <h2 className="titleTags">All Tags</h2>
                <div>
                {
                    tags.map(tag => {
                        return <section className="tag" key={tag.id}>
                            {tag.label} <button  
                            onClick={() => handleDelete(tag.id, getTagList)
                            }
                            className='delete-btn'>
                                delete</button> 
                            <button onClick={() => history.push(`/tags/${tag.id}`)
                            }
                            className='delete-btn'>
                                edit</button> 
                        </section>
                    })
                }
                </div>
                
                    {viewForm ? formJSX
                 
                    : noFormJSX}    
        </>
    )
}









// return (
//     <>
    
//         <h2 className="titleTags">All Tags</h2>
//             <div>
//             {
//                 tags.map(tag => <Tag key={tag.id} singleTag={tag}/>) //Passing singleTag as a prop to Tag.js
//             }
//             </div>
            
//                 {viewForm ? formJSX
             
//                 : noFormJSX}    
//     </>
// )
// }

