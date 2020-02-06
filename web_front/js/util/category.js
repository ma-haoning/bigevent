// 把所有与文章分类相关的操作写在这里

var category = {
    // 获取文章的类别
    get: function () {
        return $.get(APILIST.category_get)
    }
}