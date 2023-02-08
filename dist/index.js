"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const b = 3;
const a = "umang";
const c = undefined;
const d = null;
const e = true;
// console.log(b,a,c,d,e);
const f1 = [1, 2, 3, 4, 5];
const f2 = [2, 3, 4, 5, 6];
const g1 = ["umang", "bunny"];
const g2 = ["umang", 3, "bunny", 5];
const h1 = [[0, "umang"], [3, "bunny"]];
const i = [
    { id: 1, name: "umang", bol: true, age: { value: 1 } },
    { id: 2, name: "prashant", bol: false },
    { id: 3, name: "deepak", bol: true }
];
var a3 = i[0].age?.value;
console.log(a3);
// console.log(f1,f2,g1,g2,h1,i);
//# sourceMappingURL=index.js.map