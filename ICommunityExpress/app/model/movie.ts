export class Movie 
{
  id: number;
  name: string;
  year: number;

    constructor();
    constructor(id:number,name:string);   
    constructor(id:number,name:string,year:number);    
    constructor(id?:number,name?:string,year?:number)
    {
        this.id = id;
        this.name = name;
        this.year = year;
    }

}