import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Category } from "../../../data/models/Category";
import './AddEditCategory.scss';
import {addCategory,editCategory} from "../../../redux/actions/CategoriesActions";
import { getJsonFromUrl, webPages } from "../../shared_components/pure_functions/PathNavigation";


interface Props {
    addCategory:(category:Category)=>void;
    editCategory:(category:Category)=>void;

    history:any;
    location:any;
    categories:Category[];
}

interface State {
    categoryName:string;
    action:string;
    currentCategory:Category;
}

class AddEditCategory extends PureComponent<Props,State> {
    
    constructor(props:any){
        super(props);
        this.state = {
            categoryName:'',
            action:'Add',
            currentCategory:{id:'',name:''}

        }
        
    }

    componentDidMount(){
        
        const params = getJsonFromUrl(this.props.location.search);
        if(params.categoryId&&params.action=='Edit'){
            let currentCategory = this.props.categories.filter((category:Category)=>category.id ===params.categoryId)[0];
            this.setState({action:'Edit',currentCategory:currentCategory});
        }
    }

    handleChange = (event:any)=>{
        this.setState({currentCategory:{...this.state.currentCategory,name:event.target.value}})
    }

    saveButton = ()=>{
        
        if(this.state.currentCategory.name!=''){
            if(this.state.action==='Edit'){
                this.props.editCategory(this.state.currentCategory);
                this.props.history.push(webPages.categoryList);
            }else{
                this.props.addCategory({id:new Date().getTime().toString(),name:this.state.currentCategory.name})
                this.props.history.push(webPages.categoryList);
            }
        }else{
            alert("please fill the category name")
        }
    }

  
    render(){
        return (<div className="add-container">
            <div className="form">
                <input className="input" placeholder="Category Name" 
                    value={this.state.currentCategory?.name} 
                    onChange={this.handleChange} />
                <br/>
                <button className="button" onClick={this.saveButton}> 
                    {this.state.action} Category 
                </button>
            </div>
        </div>)
    }
}


const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ 
        addCategory,editCategory
    }, 
    dispatch);

const mapStateToProps = (state: any) => {
    return {
         categories:state.categoriesReducer.categories,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEditCategory)