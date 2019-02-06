interface IStorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}



class Scales <StorageEngine extends IStorageEngine> {

    public getNameList(item:StorageEngine):Array<string> {
        let mas:Array<string>=[];
        for (let i=0;i<item.getCount();i++){
            mas.push(item.getItem(i).getName());
        }
        return mas;
    }
    public getSumScale(item:StorageEngine):number {
        let summa:number=0;
        for (let i=0;i<item.getCount();i++){
            summa+=item.getItem(i).getScale();
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
        let item:Product=<Product>JSON.parse(localStorage.products)[index]
        return item;
    }
    getCount():number{
        return JSON.parse(localStorage.products).length;
    }
}






var apple:Product=new Product('Яблоко',100);
var apple2:Product=new Product('Яблоко',130);
var tomato:Product=new Product('Помидор',200);
var orange:Product=new Product('Апельсин',145);
var MyScale1=new Scales<ScalesStorageEngineArray>();
var MyScale2=new Scales<ScalesStorageEngineLocaleStorage>();
var MyScales1:ScalesStorageEngineArray=new ScalesStorageEngineArray;
var MyScales2:ScalesStorageEngineLocaleStorage=new ScalesStorageEngineLocaleStorage;
MyScales1.addItem(apple);
MyScales1.addItem(apple2);
MyScales2.addItem(tomato);
MyScales2.addItem(orange);
console.log(MyScale1.getNameList(MyScales1) + ' -  Взвешенные продукты первый способ' );
console.log(MyScale1.getSumScale(MyScales1) + ' -  Вес продуктов первый способ' );
console.log(MyScale2.getNameList(MyScales2) + ' -  Взвешенные продукты второй способ' );
console.log(MyScale2.getSumScale(MyScales2) + ' -  Вес продуктов второй способ' );