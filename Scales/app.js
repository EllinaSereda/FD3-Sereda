var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.summWeight = 0;
        this.masProduct = [];
    }
    Scales.prototype.add = function (newProd) {
        var newElem = newProd.getName();
        this.masProduct.push(newElem);
        this.summWeight += newProd.getScale();
    };
    Scales.prototype.getNameList = function () {
        return this.masProduct;
    };
    Scales.prototype.getSumScale = function () {
        return this.summWeight;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(Name, Scale) {
        this.Name = Name;
        this.Scale = Scale;
    }
    Product.prototype.getName = function () {
        return this.Name;
    };
    Product.prototype.getScale = function () {
        return this.Scale;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(Name, Scale, Sort, Sweet) {
        var _this = _super.call(this, Name, Scale) || this;
        _this.Name = Name;
        _this.Scale = Scale;
        _this.Sort = Sort;
        _this.Sweet = Sweet;
        return _this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(Name, Scale, color) {
        var _this = _super.call(this, Name, Scale) || this;
        _this.Name = Name;
        _this.Scale = Scale;
        _this.color = color;
        return _this;
    }
    return Tomato;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(Name, Scale) {
        var _this = _super.call(this, Name, Scale) || this;
        _this.Name = Name;
        _this.Scale = Scale;
        return _this;
    }
    Orange.prototype.divide = function () {
        this.newMas = this.getScale() / 2;
    };
    return Orange;
}(Product));
var apple1 = new Apple('Яблоко', 100, 'Голден', true);
var tomato1 = new Tomato('Помидор', 200, 'красный');
var tomato2 = new Tomato('Помидор', 350, 'желтый');
var orange1 = new Orange('Апельсин', 145);
var MyScales = new Scales;
MyScales.add(apple1);
MyScales.add(tomato1);
MyScales.add(tomato2);
MyScales.add(orange1);
console.log(MyScales.getNameList() + ' -  Взвешенные продукты');
console.log(MyScales.getSumScale() + ' -  Вес продуктов');
//# sourceMappingURL=app.js.map