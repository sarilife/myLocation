import { Category } from "../models/Category";

export enum StorageKeys {
    CATEGORY_LIST = 'CATEGORY_LIST',
    ADD_CATEGORY = 'ADD_CATEGORY'
}

export const getCategoriesFromStorage = ():Category[]=>{
    const catgeoryList = localStorage.getItem(StorageKeys.CATEGORY_LIST);
    if(!catgeoryList){
        return [];
    }
    return JSON.parse(catgeoryList);
}

export const addCategoryInStorage = (category:Category)=>{
    const catgeoryList = getCategoriesFromStorage();
    catgeoryList.push(category);
    localStorage.setItem(StorageKeys.CATEGORY_LIST,JSON.stringify(catgeoryList));
    return catgeoryList;
}

export const deleteCategoryInStorage = (categoryId:string)=>{
    let catgeoryList = getCategoriesFromStorage();
    catgeoryList =catgeoryList.filter((category:Category)=>category.id!=categoryId)
    localStorage.setItem(StorageKeys.CATEGORY_LIST,JSON.stringify(catgeoryList));
    return catgeoryList;
}

export const editCategoryInStorage = (category:Category)=>{
    let catgeoryList = getCategoriesFromStorage();
    catgeoryList = catgeoryList.map((cat:Category)=>{
        if(cat.id ===category.id){
            return category;
        }
        return cat;
    })
    localStorage.setItem(StorageKeys.CATEGORY_LIST,JSON.stringify(catgeoryList));
    return catgeoryList;
}


export const clearStorage = ()=>{
    localStorage.removeItem(StorageKeys.CATEGORY_LIST);
}

