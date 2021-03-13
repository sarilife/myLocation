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
        // case ContactsActions.ADD_CONTACT:
        //     // console.log("action.contact",action.contact)
        //     let newContacts = [...state.contactsList];
        //     newContacts.push(action.contact)
        //     return {...newState,contactsList:[...newContacts]};
        // case ContactsActions.DELETE_CONTACT:
        //      let contact = state.contactsList.filter(con=>con.id!=action.id);
        //      return {...newState,contactsList:contact};
        // case ContactsActions.EDIT_CONTACT:
        //     console.log("action.contact",action.contact)

        //      return {...newState,};
        default:
            return state;
        }
};

export default authReducer;
