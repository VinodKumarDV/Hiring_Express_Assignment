const initData = {
    list: []
}

const todoReducer = (state = initData, action) => {
    switch (action.type) { 
        case "ADD_TODO":

            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                    ] 
            }
        
        case "DELETE_TODO":
            const filteredList = state.list.filter((element, index) => {
                return element.id !== action.id
            })
            return {
                ...state,
                list: filteredList
            }
        
        case "DELETE_ALL_TODO":

            return {
                list: []
            }
        
        case "UPDATE_TODO":
            
            const updatedItem = state.list.map((elm) => {
                return elm.id === action.id ? action.currentProd : elm;
            });
            return {
                list: updatedItem
            }
        default: return state
    }
}

export default todoReducer;