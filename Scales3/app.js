var Scales = /** @class */ (function () {
    function Scales() {
    }
    Scales.prototype.getNameList = function (item) {
        var mas = [];
        for (var i = 0; i < item.getCount(); i++) {
            mas.push(item.getItem(i).getName());
        }
        return mas;
    };
    Scales.prototype.getSumScale = function (item) {
        var summa = 0;
        for (var i = 0; i < item.getCount(); i++) {
            summa += item.getItem(i).getScale();
        }
        return summa;
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
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.masProduct = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.masProduct.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.masProduct[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.masProduct.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocaleStorage = /** @class */ (function () {
    function ScalesStorageEngineLocaleStorage() {
        localStorage.products = JSON.stringify([]);
    }
    ScalesStorageEngineLocaleStorage.prototype.addItem = function (item) {
        var newMas = JSON.parse(localStorage.products);
        newMas.push(item);
        localStorage.products = JSON.stringify(newMas);
    };
    ScalesStorageEngineLocaleStorage.prototype.getItem = function (index) {
        var item = JSON.parse(localStorage.products)[index];
        console.log(JSON.parse(localStorage.products)[index]);
        return item;
    };
    ScalesStorageEngineLocaleStorage.prototype.getCount = function () {
        return JSON.parse(localStorage.products).length;
    };
    return ScalesStorageEngineLocaleStorage;
}());
var apple = new Product('Яблоко', 100);
var apple2 = new Product('Яблоко', 130);
var tomato = new Product('Помидор', 200);
var orange = new Product('Апельсин', 145);
var MyScale1 = new Scales();
var MyScale2 = new Scales();
var MyScales1 = new ScalesStorageEngineArray;
var MyScales2 = new ScalesStorageEngineLocaleStorage;
MyScales1.addItem(apple);
MyScales1.addItem(apple2);
MyScales2.addItem(tomato);
MyScales2.addItem(orange);
console.log(MyScale1.getNameList(MyScales1) + ' -  Взвешенные продукты первый способ');
console.log(MyScale1.getSumScale(MyScales1) + ' -  Вес продуктов первый способ');
console.log(MyScale2.getNameList(MyScales2) + ' -  Взвешенные продукты второй способ');
console.log(MyScale2.getSumScale(MyScales2) + ' -  Вес продуктов второй способ');
//# sourceMappingURL=app.js.map