import { Category } from "../../data/models/Category";
import { addCategoryInStorage, clearStorage, deleteCategoryInStorage, editCategoryInStorage, getCategoriesFromStorage } from "../../data/storage/LocalStorage";

export enum CategoriesActions {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

export const fetchCategories = ()=>{
    return async (dispatch:any)=> {
      try {
        const categoriesFromStorage = getCategoriesFromStorage();
        dispatch ({
          type: CategoriesActions.FETCH_CATEGORIES,
          categories: categoriesFromStorage
        });
      }catch(error:any){
        console.log(error);
      }
    }
  }


  export const addCategory = (category:Category)=>{
    return async (dispatch:any)=> {
      try {
        const categoriesFromStorage = addCategoryInStorage(category);
        dispatch ({
          type: CategoriesActions.FETCH_CATEGORIES,
          categories: categoriesFromStorage
        });
      }catch(error:any){
        console.log(error);
      }
    }
  }


  export const deleteCategory = (categoryId:string)=>{
    return async (dispatch:any)=> {
      try {
        const categoriesFromStorage = deleteCategoryInStorage(categoryId);
        dispatch ({
          type: CategoriesActions.FETCH_CATEGORIES,
          categories: categoriesFromStorage
        });
      }catch(error:any){
        console.log(error);
      }
    }
  }


  export const editCategory = (category:Category)=>{
    return async (dispatch:any)=> {
      try {
        const categoriesFromStorage = editCategoryInStorage(category);
        dispatch ({
          type: CategoriesActions.FETCH_CATEGORIES,
          categories: categoriesFromStorage
        });
      }catch(error:any){
        console.log(error);
      }
    }
  }


  