class Scales {

    protected summWeight:number;

    protected masProduct:Array<string>;
    
    constructor() {
        this.summWeight=0; 
        this.masProduct=[];
        
    }

    public add(newProd:Product):void{
        var newElem:string=newProd.getName();
        this.masProduct.push(newElem);
        this.summWeight+=newProd.getScale();
    }
    public getNameList():Array<string> {
        return this.masProduct;
    }
    public getSumScale():number {
        return this.summWeight;
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



class Apple extends Product{
    constructor(protected Name:string, protected Scale:number, protected Sort:string, protected Sweet:boolean){
    super(Name,Scale);
    }
}



class Tomato extends Product{
    constructor(protected Name:string, protected Scale:number, protected color:string){
    super(Name,Scale);
    }
}


class Orange extends Product{
    protected newMas:number;
    constructor(protected Name:string, protected Scale:number){
    super(Name,Scale);
    }
    public divide():void{
        this.newMas=this.getScale()/2;
    }
}







var apple1:Apple=new Apple('Яблоко',100,'Голден',true);
var tomato1:Tomato=new Tomato('Помидор',200,'красный');
var tomato2:Tomato=new Tomato('Помидор',350,'желтый');
var orange1:Orange=new Orange('Апельсин',145);
var MyScales:Scales=new Scales;

MyScales.add(apple1);
MyScales.add(tomato1);
MyScales.add(tomato2);
MyScales.add(orange1);
console.log(MyScales.getNameList() + ' -  Взвешенные продукты' );
console.log(MyScales.getSumScale() + ' -  Вес продуктов' );
