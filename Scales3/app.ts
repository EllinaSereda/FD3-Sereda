interface IStorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}



class Scales <StorageEngine extends IStorageEngine> {
private mas:Array<Product>
constructor(item:StorageEngine){
    this.mas=[];
    for (let i=0;i<item.getCount();i++){
        this.mas.push(item.getItem(i));
    }
}
    public getNameList():Array<string> {
        let names:Array<string>=[];
        for (let i=0;i<this.mas.length;i++){
            names.push(this.mas[i].getName());
        }
        return names;
    }
    public getSumScale():number {
        let summa:number=0;
        for (let i=0;i<this.mas.length;i++){
            summa+=this.mas[i].getScale();
        }
        return summa;
    }
    
}
class Product {
    constructor(protected Name:string, protected Scale:number ) {
         
    }
    public getName():string{
        return this.Name;
    }
    public getScale():number{
        return this.Scale;
    }
    

}

class ScalesStorageEngineArray  implements IStorageEngine{
    protected masProduct:Array<Product>;
    
    constructor() {
        this.masProduct=[];
    }
    addItem(item:Product):void{
        this.masProduct.push(item);
    }
    getItem(index:number):Product{
        return this.masProduct[index];
    }
    getCount():number{
        return this.masProduct.length;
    }
    
}
class ScalesStorageEngineLocaleStorage  implements IStorageEngine{
    
    constructor() {
        localStorage.products=JSON.stringify([]);
    }
    addItem(item:Product):void{
        let newMas:Array<Product>=JSON.parse(localStorage.products);
        newMas.push(item);
        localStorage.products=JSON.stringify(newMas);
    }
    getItem(index:number):Product{
        let item:{Name:string, Scale:number}=JSON.parse(localStorage.products)[index];
        let product:Product=new Product(item.Name,item.Scale)
        return product;
    }
    getCount():number{
        return JSON.parse(localStorage.products).length;
    }
}






var apple:Product=new Product('Яблоко',100);
var apple2:Product=new Product('Яблоко',130);
var tomato:Product=new Product('Помидор',200);
var orange:Product=new Product('Апельсин',145);
var MyScales1:ScalesStorageEngineArray=new ScalesStorageEngineArray;
var MyScales2:ScalesStorageEngineLocaleStorage=new ScalesStorageEngineLocaleStorage;
MyScales1.addItem(apple);
MyScales1.addItem(apple2);
MyScales2.addItem(tomato);
MyScales2.addItem(apple);
MyScales2.addItem(orange);
var MyScale1=new Scales<ScalesStorageEngineArray>(MyScales1);
var MyScale2=new Scales<ScalesStorageEngineLocaleStorage>(MyScales2);

console.log(MyScale1.getNameList() + ' -  Взвешенные продукты первый способ' );
console.log(MyScale1.getSumScale() + ' -  Вес продуктов первый способ' );
console.log(MyScale2.getNameList() + ' -  Взвешенные продукты второй способ' );
console.log(MyScale2.getSumScale() + ' -  Вес продуктов второй способ' );