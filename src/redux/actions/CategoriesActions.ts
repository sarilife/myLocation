import { getCategories } from "../../data/storage/LocalStorage";

export enum CategoriesActions {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

export const fetchCategories = ()=>{
    return async (dispatch:any,state:any)=> {
      try {
        // const categoriesFromStorage = getCategories();
        const categoriesFromStorage = ['stores','places']
        dispatch ({
          type: CategoriesActions.FETCH_CATEGORIES,
          categories: categoriesFromStorage
        });
      }catch(error:any){
        console.log(error);
      }
    }
  }