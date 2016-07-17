block('page').mod('view', '500').content()(function() {

    var errorPage = `<!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>Internal Server Error</title>
                        </head>

                        <body style = 'font-family: Verdana, Arial; margin: 40px'>
                            <h1>Внутреняя серверная ошибка</h1>
                            <p>Извините, что-то пошло не так. Сервер не смог обработать Ваш запрос.</p>
                            <p>Пожалуйста, попробуйте еще раз позже.</p>
                        </body>
                    </html>`

    return errorPage;

});
