//- створити функцію яка виводить масив
// function massiv () {
//     let m =[1,3,7,88,5,66]
//     console.log(m);
//    }
// massiv ()
//- створити функцію яка заповнює масив рандомними числами та виводить його. 
//Для виведення використати попвередню функцію.
//  function massivRandom() {
//      let m =[]
//      let n =Math.random(0)*100
//      m[0]=n
//      m[1]=n
//      m[2]=n
//      console.log(m);        
//  }
//  massivRandom()
//- створити функцію яка приймає три числа та виводить та повертає найменьше.
//  function numMin (a,b,c){
//      if (a<b&&a<c){
//          console.log(a); 
//          return a  
//             }
//         if(b<a&&b<c){
//              console.log(b);
//              return b           
//       }
//   if (c<a&&c<b){
//        console.log(c);
//        return c
//     }}
//                  numMin (a=10, b=11, c=9)
//- створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxNumber(a,b,c) {
//     if (a>b&&a>c){
//         console.log(a);
//         return a
//     }
//     if (b>c&&b>a){
//         console.log(b);
//         return b}
//         if (c>a&&c>b){
//             console.log(c);
//             return c}    
// }
// maxNumber (a=30, b=200, c=10)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
 //а виводить найбільше
//  function maxMinNunber() {
//      let min = arguments [0];
//      let max = arguments [0];
//      for (i=0; i<arguments.length; i++){
//          if (arguments[i]<min){
//              min=arguments[i]
//          }
//          if (arguments[i]>max){
//              max=arguments[i]
//          }
//      }
//      console.log(min);
//      return min   
//  }
//  maxMinNunber(90,8,10,2,55,46,7,8,95,-1)
// - створити функцію яка виводить масив
//   function mas () {
//     let massiv =[]
//      for (let i = 0; i<arguments.length; i++)
//     { massiv [i]=arguments[i]
//       console.log(massiv[i]);}
//     }
//      return massiv
//  }
//  mas([ 1,5,7,88,65,41]);
// console.log(massiv);
// - створити функцію яка повертає найбільше число з масиву
// function maxNumber() {
//     let max = [23,56,4,65,84,78,89,54,2,3]
//     let mNumber = max[0]
//     for (i=1; i<max.length; i++){
//         if (max[i]>mNumber){
//             mNumber=max[i];
//         }
//     }    
//     console.log(mNumber);
// }
// maxNumber ()



// - створити функцію яка повертає найменьше число з масиву
// function minNumber() {
//     let min = [23,56,4,65,84,78,89,54,2,3]
//     let mNumber = min[0]
//     for (i=1; i<min.length; i++){
//         if (min[i]<mNumber){
//             mNumber=min[i];         
//         }     
//     }    
//     console.log(mNumber);
//}
//minNumber ()
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sum (a,b,c){
//     return a+b+c
// }
// console.log(sum (a=55,b=25,c=65));
 
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sumr (a,b,c){
//     return (a+b+c)/sumr.length
// }
// console.log(sumr (a=55,b=25,c=65));
// - Створити функцію яка приймає масив будь яких объектів,
// та повертає значення кількості об'єктів в масиві
// function quantity (a,b,c){
//     return quantity.length
// }
// console.log(quantity (a=55,b=25,c=65));


