const b:number|null= 3;
const a:string = "umang";
const c:undefined = undefined;
const d:null = null;
const e:boolean = true;
console.log(b,a,c,d,e);

const f1:number[] = [1,2,3,4,5];
const f2:Array<number> = [2,3,4,5,6];
const g1:string[]= ["umang","bunny"];
const g2:Array<string|number> = ["umang",3,"bunny",5];
const h1:Array<Array<number| string>> =[[0,"umang"],[3,"bunny"]];

const i:Array<{
    id:number,
    name:string,
    bol:boolean,
    age?:{
        value:number
    }
}> = [
    {id:1,name:"umang",bol:true,age:{value:1}},
    {id:2,name:"prashant",bol:false},
    {id:3,name:"deepak",bol:true}
]

var a3:number|undefined = i[0].age?.value;
console.log(a3);


console.log(f1,f2,g1,g2,h1,i);
