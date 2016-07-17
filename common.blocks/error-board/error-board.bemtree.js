block('error-board').content()(function() {
    return [
        {
            elem: 'logo'
        },
        {
            elem: 'description',
            content:[
                {
                    elem: 'title',
                    tag: 'h1',
                    content : 'Страница не найдена'
                },
                {
                    elem: 'proposition',
                    content: [
                        'Вы можете перейти на ',
                        {
                            block: 'link',
                            url: '/',
                            content : 'главную страницу.'
                        }
                    ]
                }
            ]
        },
        {
            elem: 'title',
            tag: 'h2',
            content : 'Публикации за последние 30 дней:'
        }
    ]
});
