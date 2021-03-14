import React, { PureComponent, Suspense } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/shared_components/navbar/Navbar';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';

import AddEditCategory from './components/pages/AddEditCategory/AddEditCategory';
import CategoryList from './components/pages/CategoriesList/CategoryList';
import {navigation,webPages} from "./components/shared_components/pure_functions/PathNavigation";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchCategories} from "./redux/actions/CategoriesActions";


interface Props {
  fetchCategories:()=>void
}
export class App extends PureComponent<Props, any> {

  componentDidMount(){
    this.props.fetchCategories();
  }

  render(){
  return (
    <div className="App">
      <Navbar />
      {<div className="pages-border">
                <BrowserRouter >
                  <Switch>
                    <Route exact path={webPages.addEditCategory} component={AddEditCategory}/>
                    <Route exact path={webPages.categoryList} component={CategoryList}/>
                    <Redirect from="/" to="/"/>
                  </Switch>
                </BrowserRouter>
      </div>}

    </div>
    
  );
}

}

// export default ;


const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ 
        fetchCategories
    }, 
    dispatch);

const mapStateToProps = (state: any) => {
    return {
        categories:state.categoriesReducer.categories,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)