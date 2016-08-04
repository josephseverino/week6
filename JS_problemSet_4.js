function addNumbers(str) {
 var arr = str.split('');
 var sum = 0;
 for (var i=0;i<arr.length;i++) {
   if(!isNaN(arr[i]) && arr[i] !== ' ') {
     for(var ii=i;ii<Infinity;ii++) {
       if(isNaN(arr[ii]) || arr[ii] === ' ') {
         sum += parseInt(arr.slice(i,ii).join(''));
         i=ii;
         break;
       }
     }
   }
 }
 console.log(sum);
}

addNumbers('123hello333 666world');
// addNumbers('55hello');
// addNumbers('5hello 5');

function longestWord(str){
    var arr = str.split(" "),
        newarr = [],
        longest;

    for (var i = 0; i < arr.length; i++){
        newarr[i] = arr[i].length;
    }
    var largest = Math.max.apply(Math, newarr);
    var indices = [];
    var index = newarr.indexOf(largest);
    while (index != -1) {
      indices.push(index);
      index = newarr.indexOf(largest, index + 1);
    }
    console.log(arr[indices[0]])
}
longestWord('Guess which word is the longest one in this ridiculous sentnce')


