import $ from '../core';

// с помощью REST-оператора передаем классы
$.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        // с помощью Spread-оператора разворачиваем аргументы
        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        // с помощью Spread-оператора разворачиваем аргументы
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        // toggle применяется только для 1 переданного класса
        this[i].classList.toggle(className);
    }

    return this;
};
