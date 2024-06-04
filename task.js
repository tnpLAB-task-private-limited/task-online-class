//////////////////////////dubplicte/////////////

// function dubplicte(array){
// let result =[];

// for(let i=0 ; i<=array.length; i++){

//     dubplicte= false;

//     for (let j=0 ; j<=result.length; j++){
//         if (array[i]===result[j]){
//             dubplicte=true;
//             break;
//         }
//     }
//     if(!dubplicte){
//         result.push(array[i]);
//     }

// }
// return result;
// }
// let number=[11,22,22,33.44,66,66,88,99,9,8,33,4,5,66,7,88,88,9];
// let callfunction=dubplicte(number);
// console.log(callfunction)

////////////////////reverse a string////////////////////////

// function reverse(str){
//     let newstring = "";
//     for (i=str.length-1 ; i>=0 ; i--){
//         newstring+=str[i]
//     }
//     return newstring;
// }
// let call = reverse("tarun ")

// console.log(call)

//////////////// reverse a words in a string////////////////////
function reverse(str){
    let newstring = [];
    for (i=str.length-1 ; i>=0 ; i--){
        newstring+=str[i]
    }
    return newstring;
}
let call = reverse(["tarun "," ", "arun"," ", "varun"])

console.log(call)

