var Scales = /** @class */ (function () {
    function Scales(storage) {
        this.storage = storage;
    }
    Scales.prototype.getNameList = function () {
        var names = [];
        for (var i = 0; i < this.storage.getCount(); i++) {
            names.push(this.storage.getItem(i).getName());
        }
        return names;
    };
    Scales.prototype.getSumScale = function () {
        var summa = 0;
        for (var i = 0; i < this.storage.getCount(); i++) {
            summa += this.storage.getItem(i).getScale();
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
        var product = new Product(item.Name, item.Scale);
        return product;
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
var MyScales1 = new ScalesStorageEngineArray;
var MyScales2 = new ScalesStorageEngineLocaleStorage;
MyScales1.addItem(apple);
MyScales1.addItem(apple2);
MyScales2.addItem(tomato);
MyScales2.addItem(apple);
MyScales2.addItem(orange);
var MyScale1 = new Scales(MyScales1);
var MyScale2 = new Scales(MyScales2);
console.log(MyScale1.getNameList() + ' -  Взвешенные продукты первый способ');
console.log(MyScale1.getSumScale() + ' -  Вес продуктов первый способ');
console.log(MyScale2.getNameList() + ' -  Взвешенные продукты второй способ');
console.log(MyScale2.getSumScale() + ' -  Вес продуктов второй способ');
//# sourceMappingURL=app.js.map