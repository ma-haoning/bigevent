const comment = {
    add: function (name, content, article_id) {
        return $.post(APILIST.comment_add, {
            "name": name,
            "content": content,
            "article_id": article_id
        })
    },
    get: function (id) {
        return $.get(APILIST.comment_get, {
            "article_id": id
        })
    }
}