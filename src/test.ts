// function addAll(...nums:number[]) :number[]{
//     let max = nums[0];
//     let min = nums[0];
// for(let i = 0; i < nums.length; i++) {
       
//         if(nums[i]  > max){
//          max = nums[i];  
        
            
//         }
//     if(nums[i] < min){
//     min = nums[i]
//     ;}
// }
// return [min, max]
// }
// console.log(addAll(10, 12, 99, 23, 2, 3, 2))
let roundScores: number[] = [1, 0, 2, 1, 1, 0, 1];



interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

const storeProducts: Product[] = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 50, inStock: false },
    { name: "Keyboard", price: 120, inStock: true },
    { name: "Monitor", price: 300, inStock: true }
];

function calculateAvailableTotal(products: Product[]):number{
     let stock:number =0;
     for(let product of products) {
        if(product.inStock ===true) {
            stock   += product.price;
        }
     }
     return stock;
} 
console.log(calculateAvailableTotal(storeProducts));

let user = {
    name :"Mashol",
    age  : 26,
    adress: function () {
        return ` ${user["adress"] }  `
    } 
}


// مصفوفة فيها بيانات ناقصة أو عناصر غير موجودة
const stores = [
    { name: "Tech Shop", city: "Casablanca" },
    undefined, // مشكل! هاد العنصر غير موجود تماماً
    { name: "Game Store", city: "Rabat" }
];

for (let i = 0; i < stores.length; i++) {
    // ❌ هنا غاتوقع كارثة (Crash) في العنصر رقم 1 لأنه undefined ومافيش خاصية city
    console.log(stores[i]?.city); 
}