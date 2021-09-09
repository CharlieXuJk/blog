let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  api for index page
    getArticleById:ipUrl + 'getArticleById/',  //  api for detailed page
    getTypeInfo:ipUrl + 'getTypeInfo',  //  api for article type
    getListById:ipUrl + 'getListById/',

}
export default servicePath;
