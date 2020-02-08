// 配置文件
// 把这个项目中所有用到的接口地址全放在这里

// 所有接口的基地址
// 就是运行小黑窗服务器的地址.如果当前的服务器就是在自已电脑上，就可以直接写成localhost
var BASEURL = 'http://localhost:8000'
// var BASEURL = 'http://192.168.0.108:8000'
// var BASEURL = 'http://39.99.130.177:8000'

// 用来保存所有的接口信息
var APILIST = {


    // 获取文章分类
    category_get: BASEURL + '/admin/category_search',


    // 获取文章
    article_get: BASEURL + '/admin/search',

    //获取排行榜
    rank_get: BASEURL + "/rank",

    //获取最新资讯
    zixun: BASEURL + "/lastest",

    //获取list.html上的各个文章的内容
    article_get: BASEURL + '/search',

    //获取文章的详情
    article_detail: BASEURL + "/article",

    //添加评论
    comment_add: BASEURL + "/post_comment",

    //获取评论
    comment_get: BASEURL + "/get_comments"
}