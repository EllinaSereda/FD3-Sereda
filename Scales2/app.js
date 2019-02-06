var Scales = /** @class */ (function () {
    function Scales() {
        this.masProduct = [];
    }
    Scales.prototype.add = function (newProd) {
        this.masProduct.push(newProd);
    };
    Scales.prototype.getNameList = function () {
        return this.masProduct.map(function (v, i, a) { return v.getName(); });
    };
    Scales.prototype.getSumScale = function () {
        function sum(r, v, i, a) {
            return r + v.getScale();
        }
        return this.masProduct.reduce(sum, 0);
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(Scale, Sort, Sweet) {
        this.Scale = Scale;
        this.Sort = Sort;
        this.Sweet = Sweet;
        this.Name = "Яблоко";
    }
    Apple.prototype.getName = function () {
        return this.Name;
    };
    Apple.prototype.getScale = function () {
        return this.Scale;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(Scale, color) {
        this.Scale = Scale;
        this.color = color;
        this.Name = "Помидор";
    }
    Tomato.prototype.getName = function () {
        return this.Name;
    };
    Tomato.prototype.getScale = function () {
        return this.Scale;
    };
    return Tomato;
}());
var Orange = /** @class */ (function () {
    function Orange(Scale) {
        this.Scale = Scale;
        this.Name = "Апельсин";
    }
    Orange.prototype.divide = function () {
        this.newMas = this.getScale() / 2;
    };
    Orange.prototype.getName = function () {
        return this.Name;
    };
    Orange.prototype.getScale = function () {
        return this.Scale;
    };
    return Orange;
}());
var apple1 = new Apple(100, 'Голден', true);
var tomato1 = new Tomato(200, 'красный');
var tomato2 = new Tomato(350, 'желтый');
var orange1 = new Orange(145);
var orange2 = new Orange(100);
var MyScales = new Scales;
MyScales.add(apple1);
MyScales.add(tomato1);
MyScales.add(tomato2);
MyScales.add(orange1);
MyScales.add(orange2);
console.log(MyScales.getNameList() + ' -  Взвешенные продукты');
console.log(MyScales.getSumScale() + ' -  Вес продуктов');
//# sourceMappingURL=app.js.map