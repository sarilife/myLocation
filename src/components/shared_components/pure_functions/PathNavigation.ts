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

// export const hideFor = (paths: string | string[]) => {
//     return !paths.includes(location.pathname)
// }

export function isMobile() {
    var iOS = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return iOS || document.documentElement?.clientWidth < 420
}

export function getParam(param: string){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

export function insertParam(key: any, value: any) {
    const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?${key}=${value}`;
    window.history.pushState({path:newurl},'',newurl);
}
