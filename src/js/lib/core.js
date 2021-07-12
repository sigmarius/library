(() => {
    // короткий вызов querySelectorAll по символу $
    const $ = function (selector) {
        const elements = document.querySelectorAll(selector);

        const obj = {};

        // скрывает элементы
        obj.hide = () => {
            elements.forEach(elem => {
                elem.style.display = 'none';
            });
            // чейнинг вызовов
            return obj;
        };

        // показывает элементы (на усмотрение браузера, т.к. могут быть инлайновые элементы и т.д.)
        obj.show = () => {
            elements.forEach(elem => {
                elem.style.display = '';
            });
            // чейнинг вызовов
            return obj;
        };

        // чейнинг вызовов
        return obj;
    };

    window.$ = $;

})();
