// var cards = ["4916-2600-1804-0530", "4779-252888-3972", "4252-278893-7978", "4556-4242-9283-2260"];
//
// //store original values to return when complete
// var myCardOnlyDigits = [],
//     emptyArray = [],
//     anotherArray = [];
//     //output = []
//
// for (let i = 0; i < cards.length; i++) {
//   myCardOnlyDigits.push(cards[i].replace(/-/g, ""));
// };
//
// for (let i = 0; i < myCardOnlyDigits.length; i++) {
//   var numbers = parseInt(myCardOnlyDigits[i]);
//   emptyArray.push(numbers);
// };
// for(let j = 0; j < emptyArray.length; j++){
//   var output = []
//   sNumber = emptyArray[j].toString();
//   for(let k = 0; k < sNumber.length; k++){
//     output.push(+sNumber.charAt(k))
//   }
//   for(var h = 0, sum = 0; h < output.length; sum += output[h++]);
//     console.log('here is the sum: ', sum);
//     anotherArray.push(sum)
// }
// console.log(anotherArray);
// var max = 0;
//     index = 0;
//
// for(let ite = 0; ite < anotherArray.length; ite++){
//   if(anotherArray[ite] >= max){
//     max = anotherArray[ite];
//     index = ite;
//   }
// }
// console.log(cards[index]);
var cards = ["4916-2600-1804-0530", "4779-252888-3972", "4252-278893-7978", "4556-4242-9283-2260"];

var cardSums = [];

for (var i = 0; i < cards.length; i++) {
  var myCardOnlyDigits = cards[i].replace(/-/g, "");
  var mySumForThisCard = 0;

  for (var b = 0; b < myCardOnlyDigits.length; b++) {
    mySumForThisCard += parseInt(myCardOnlyDigits[b]);
  }
  cardSums.push(mySumForThisCard)
}

var max = Math.max(...cardSums);

console.log(cardSums);
console.log(max);

for (var i = 0; i < cardSums.length; i++) {

  if (max === cardSums[i]) {
    console.log("index: ", cardSums.indexOf(max));
  }

  var indeX = cardSums.indexOf(max)

var looseFirstMax = cards.splice(indeX+1, 1);

console.log("answer: ", looseFirstMax[0]);

}
