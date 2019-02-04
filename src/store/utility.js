export const updatedObject = (previousState, nextState) => {
    return {
        ...previousState,
        ...nextState
    }
}