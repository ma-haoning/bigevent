// 把所有与文章相关的操作写在这里

var article = {
    // 获取
    // page 就是当前要取出来的第几页的数据
    // type 就是当前文章的类型编号
    // status 就是当前文章的状态
    get: function (page, type, status) {
        return $.get(APILIST.article_get, {
            'page': page,
            'type': type,
            'state': status
        })
    },
    /**
     * 根据id去获取文章的详情
     * @param {Number}} id 
     */
    getById: function (id) {
        return $.get(APILIST.article_get, {
            'id': id
        })
    },
    //焦点图
    getFocusFive: function () {
        return $.get(APILIST.article_get, {
            perpage: 5
        })
    },

    // 排行榜
    getRank: function (id) {
        return $.get(APILIST.rank_get, {
            "type": id
        })
    },

    //最新资讯
    getZixun: function () {
        return $.get(APILIST.zixun)
    },

    //获取在list.html上的各个文章内容
    getList: function (type, page) {
        return $.get(APILIST.article_get, {
            "type": type,
            "page": page
        })
    },

    //获取文章的详情
    getDetail: function (id) {
        return $.get(APILIST.article_detail, {
            "id": id
        })
    }
}