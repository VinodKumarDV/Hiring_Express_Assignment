
export const addToDo = (data) => {
    return {
        type: "ADD_TODO",
        payload: data
        }
}

export const daleteToDo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const daleteAllToDo = (data) => {
    return {
        type: "DELETE_ALL_TODO",
    }
}

export const updateToDo = (id, currentProd) => {
    return {
        type: "UPDATE_TODO",
        id, currentProd
    }
}