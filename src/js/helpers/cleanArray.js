export const cleanArrayOfUndefinedValues = (array) => {
    if (!array) return [];

    return array.filter(item => {
        return (item !== undefined)
    }); 
}

export const cleanArrayOfEmptyObjects = (array) => {
    if (!array) return [];

    return array.filter(item => {
        return Object.keys(item).length !== 0
    })
}