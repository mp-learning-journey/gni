const initialState = {
    count: 1,
    todoList: ["myname"]
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1,
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1,
            };
        case "ADD_TODO":
            return {
                ...state,
                todoList: state.todoList.push(["Seun"]),
            };
        default:
            return state;
    }
};

export { counterReducer }