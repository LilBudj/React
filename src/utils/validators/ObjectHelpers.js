export const updateItemInArray = (items, itemId, itemProp, newObj) => {
    return items.map(u => {
    if (u[itemProp] === itemId){
        return {...u, ...newObj}
    }
    else return u;
})};