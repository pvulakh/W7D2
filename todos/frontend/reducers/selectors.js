export const allToDos = (state) => {
    return Object.keys(state.todos).map((id) => {
        return state.todos[id];
    });
};

export const allErrors = (state) => {
    return state.errors;
};

