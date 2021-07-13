import $ from '../core';

$.prototype.show = function() {
    for(let i = 0; i < this.length; i++) {
        // если у элемента не существует свойства style
        if (!this[i].style) {
            continue; // пропускаем цикл
        }
        this[i].style.display = '';
    }

    // возвращаем объект, чтобы можно было применять чейнинг
    return this;
};

$.prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        // если у элемента не существует свойства style
        if (!this[i].style) {
            continue; // пропускаем цикл
        }
        this[i].style.display = 'none';
    }

    // возвращаем объект, чтобы можно было применять чейнинг
    return this;
};

$.prototype.toggle = function() {
    for(let i = 0; i < this.length; i++) {
        // если у элемента не существует свойства style
        if (!this[i].style) {
            continue; // пропускаем цикл
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    // возвращаем объект, чтобы можно было применять чейнинг
    return this;
};
