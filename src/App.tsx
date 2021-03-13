import React, { PureComponent, Suspense } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/shared_components/navbar/Navbar';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';

import { AddEditCategory } from './components/pages/AddEditCategory/AddEditCategory';
import CategoryList from './components/pages/CategoriesList/CategoryList';
import {navigation,webPages} from "./components/shared_components/pure_functions/PathNavigation";
export class App extends PureComponent<any, any> {

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

export default App;
