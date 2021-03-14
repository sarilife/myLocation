export enum webPages {
    addEditCategory = '/addEditCategory',
    categoryList = '/categories',

}


export const navigation = () => ({
    addEditCategory: {
        visit: webPages.addEditCategory
    },
    categoryList: {
        visit: webPages.categoryList
    },
})

export function getJsonFromUrl(url:string) {
    if(!url) url = window.location.search;
    let query:string = url.substr(1);
    let result:any = {};
    query.split("&").forEach(function(part:string) {
      let item:any = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }

