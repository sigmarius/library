const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // возвращаем пустой объект {}
    }

    // добавляем к объекту все, что пришло через querySelectorAll
    Object.assign(this, document.querySelectorAll(selector));

    // записали в объект новое свойство, отвечающее за количество элементов в этом объекте
    this.length = document.querySelectorAll(selector).length;

    return this;
};

// ! записываем в прототип возвращаемого объекта прототип главной функции
$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;
