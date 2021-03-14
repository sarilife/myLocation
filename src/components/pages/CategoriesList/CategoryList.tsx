import React, { Component, PureComponent } from "react";
import './CategoryList.scss';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {fetchCategories,deleteCategory} from "../../../redux/actions/CategoriesActions";
import { Category } from "../../../data/models/Category";
import { webPages } from "../../shared_components/pure_functions/PathNavigation";

interface Props {
    categories:Category[];
    deleteCategory:(categoryId:string)=>void;
    history:any;
    
}
class CategoryList extends PureComponent<Props,any> {
    
    constructor(props:Props){
        super(props);
        
    }

    editCategory = (categoryId:string)=>{
        this.props.history.replace(`${webPages.addEditCategory}?action=Edit&categoryId=${categoryId}`);
    }
  
    render(){
        return (<div className="categories-container">
            <table id="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.categories.map((category:Category,index:number)=>{
                        return (
                            <tr key={category.id}>
                                <td >{index+1}</td>
                                <td >{category.name}</td>
                                <td >
                                    <button onClick={this.editCategory.bind(this,category.id)}>
                                        Edit    
                                    </button>   
                                    <button onClick={this.props.deleteCategory.bind(this,category.id)}>
                                        DELETE    
                                    </button>     
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>)
    }
}

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ 
        deleteCategory
    }, 
    dispatch);

const mapStateToProps = (state: any) => {
    return {
        categories:state.categoriesReducer.categories,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)