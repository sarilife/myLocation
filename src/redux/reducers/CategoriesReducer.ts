import { Category } from "../../data/models/Category";
import { CategoriesActions } from "../actions/CategoriesActions";

export interface CategoriesState {
    categories:Category[],
  }

  
// INITIALIZE STATE
const initialState: CategoriesState = {
    categories:[]
}
const authReducer = (state: CategoriesState = initialState, action: any) => {

    switch (action.type) {

    
        case CategoriesActions.FETCH_CATEGORIES:
            return {...state,categories:[...action.categories]};
        default:
            return state;
        }
};

export default authReducer;
