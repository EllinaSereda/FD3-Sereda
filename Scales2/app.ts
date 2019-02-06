class Scales {

    protected masProduct:Array<Product>;
    
    constructor() {
   
        this.masProduct=[];
        
    }

    public add(newProd:Product):void{
        this.masProduct.push(newProd);
    }
    public getNameList():Array<string> {
        return this.masProduct.map((v:Product,i:number,a:Array<Product>):string => {return v.getName()});
    }
    public getSumScale():number {
        function sum(r:number,v:Product,i:number,a:Array<Product>):number{
            return r+v.getScale();
        }
        return this.masProduct.reduce(sum,0);
    }
    
}
interface Product {
    getName():string;
    getScale():number;
}


class Apple implements Product{
    protected Name:string;
    constructor(protected Scale:number, protected Sort:string, protected Sweet:boolean){
        this.Name="Яблоко";
    }
    getName():string{
        return this.Name;
    }
    getScale():number{
        return this.Scale;
    }
}



class Tomato implements Product{
    protected Name:string;
    constructor( protected Scale:number, protected color:string){
        this.Name="Помидор";
    }
    getName():string{
        return this.Name;
    }
    getScale():number{
        return this.Scale;
    }
}


class Orange implements Product{
    protected newMas:number;
    protected Name:string;
    constructor(protected Scale:number){
        this.Name="Апельсин";
    }
    public divide():void{
        this.newMas=this.getScale()/2;
    }
    getName():string{
        return this.Name;
    }
    getScale():number{
        return this.Scale;
    }
}







var apple1:Apple=new Apple(100,'Голден',true);
var tomato1:Tomato=new Tomato(200,'красный');
var tomato2:Tomato=new Tomato(350,'желтый');
var orange1:Orange=new Orange(145);
var orange2:Orange=new Orange(100);
var MyScales:Scales=new Scales;

MyScales.add(apple1);
MyScales.add(tomato1);
MyScales.add(tomato2);
MyScales.add(orange1);
MyScales.add(orange2);
console.log(MyScales.getNameList() + ' -  Взвешенные продукты' );
console.log(MyScales.getSumScale() + ' -  Вес продуктов' );
