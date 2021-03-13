export enum StorageKeys {
    CATEGORY_LIST = 'CATEGORY_LIST'
}

export const getCategories = ()=>{
    const catgeoryList = localStorage.getItem(StorageKeys.CATEGORY_LIST);
    if(!catgeoryList){
        return [];
    }
    return catgeoryList;
}