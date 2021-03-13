import React, { Component, PureComponent } from "react";
import './CategoryList.scss';
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {fetchCategories} from "../../../redux/actions/CategoriesActions";
import { Category } from "../../../data/models/Category";

interface Props {
    categories:Category;
    fetchCategories:()=>void
}
class CategoryList extends PureComponent<Props,any> {
    
    constructor(props:Props){
        super(props);
        
    }
    componentDidMount(){
        this.props.fetchCategories();
    }
  
    render(){
        return (<div className="categories-container">
            CategoryList
        </div>)
    }
}

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ 
        fetchCategories
    }, 
    dispatch);

const mapStateToProps = (state: any) => {
    // console.log("state.categoriesReducer.categories",state.categoriesReducer.categories)
    return {
        categories:state.categoriesReducer.categories,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)