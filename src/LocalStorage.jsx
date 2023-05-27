export const setItemsToStorage=(data,name)=>{
    localStorage.setItem(name,JSON.stringify(data))
}
export const getItemsFromStorage=(name)=>{
    return JSON.parse(localStorage.getItem(name))||[]
}