//1
const reverseNum = (x) =>{
    // x = String(x);
    return x.toString().split("").reverse().join("");
}
console.log(reverseNum(32243));

//2
const isPalindrome = (str) =>{
    const reverseStr = str.toString().split("").reverse().join("");
    return reverseStr == str;
}
console.log(isPalindrome(121));

//3
const combinationString = (str) =>{
    let combinStr = [];
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length+1; j++){
            combinStr.push(str.slice(i,j));
        }
    }
    return combinStr;
}
console.log(combinationString("dog"));

//4
function orderAlphabet(str){
    return str.toString().toLowerCase().split('').sort().join('');
}
console.log(orderAlphabet("webmaster"));

//5
function convertFirstLetter(str){
    str = str.split(' ');
    var newStr = [];
    for(let i = 0; i<str.length; i++){
       newStr.push(str[i].charAt(0).toUpperCase()+str[i].slice(1));
    }
    return newStr.join(' ');
}
console.log(convertFirstLetter("the quick brown fox"))

//6
function longestWord(str){
    str = str.split(' ');
    var longest = str[0].length;
    var word = str[0];
    for(let i = 0; i<str.length; i++){
        var max = str[i].length;
        if(max>longest){
           word = str[i]
           longest = max;
        }
        
    }
    return word;
}
console.log(longestWord('we should go outside' ));

//7 
function findVowel(str){
    var vowelList = 'aeiouAEIOU';
    var count = 0;
    str = str.split(' ');
    for(let i = 0; i<str.length; i++){
        if(vowelList.indexOf(str[i] !== -1)){
            count++;
        }
    }
    return count;
}
console.log(findVowel('the quick brown fox'));

//8
function primeNum(num){
    if(num = 1){
        return false;
    }
    else if(num = 2){
        return true;
    }
    else{
        for(let i = 2; i<num; i++){
            if(n%i ===0){
                return false;
            }
        }
        return true;
    }  
}
console.log(primeNum(42));

//9
function theType(input){
    var dataType = [Function, RegExp, Number,String, Boolean, Object];
    if(typeof input === "object"||typeof input ==="function"){
        for(let i = 0; i<dataType.length; i++){
            if(input instanceof dataType[i]){
                return dataType[i];
            }
        }
    }
    return typeof input;
}
console.log(theType(function(num){}));

//10
function identityMatrix(num){
    let matrix = [];
    for(let i = 0; i<num; i++){
        let row = [];
        for(let j = 0; j<num; j++){
            if(i == j){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
console.log(identityMatrix(4));

//11
function greatest_lowest(arr){
    arr.sort(function(a,b){
        return a-b;
    });
    let secondLowest = arr[1];

    let reversedArr = arr.reverse();
    let secondGreatest = reversedArr[1];
    return [secondLowest, secondGreatest];
}
console.log(greatest_lowest([1,69,90,29,59]));

//12
function perfectNum(num){
    var temp = 0;
    for(let i = 1; i<=num/2; i++){
        if(num % i === 0){
            temp+=i;
        }
    }
    if(temp === num && temp!==0){
        console.log("Its perfect");
    }
    else{
        console.log("Its not perfect");
    }
}
perfectNum(28);

//13
function factorInteger(num){
    var temp = [];
    for(let i = 1; i <= num/2; i++){
        if(num % i ===0){
            temp.push(i);
        }
    }
    temp.push(num);
    return temp;
}
console.log(factorInteger(15));
console.log(factorInteger(0));

//14
function convertCoins(amount, coins){
    if(amount === 0){
        return [];
    }
    else{
        if(amount >= coins[0]){
            left = amount - coins[0];
            return [coins[0]].concat(convertCoins(left,coins));
        }
        else{
            coins.shift();
            return convertCoins(amount,coins);
        }
    }
}
console.log(convertCoins(46, [25, 10, 5, 2,1]));

//15
function computeExponent(b,n){
    var temp = 1;
    for(let i = 1; i <= n ;i++){
        temp = b * temp;
    }
    return temp;
}
console.log(computeExponent(5,3));

//16
function uniqueChar(str){
    var newStr = str;
    var unique = ' ';
    for(let i = 0; i<newStr.length; i++){
        if(unique.indexOf(newStr.charAt(i)) == -1){
            unique += newStr[i];
        }
    }
    return unique;
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

//17
const occurence = (str) =>{
    let unique = {};
    for(const letter of str){
        unique[letter]? unique[letter]++ : unique[letter] = 1;
    }
    return unique;
}
console.log(occurence("The quick brown fox jumps over the lazy dog"));

//18
function binarySearch(arr, target){
    var first = 0;
    var last = arr.length - 1;
    var middle_index = Math.floor((last+first)/2);
    while(arr[middle_index] != target && first < last){
        if(target < arr[middle_index]){
            last = middle_index -1;

        }
        else if(target > arr[middle_index]){
            first = middle_index +1;
        }
        middle_index = Math.floor((last + first )/2);
        
    }
    return (arr[middle_index] != target)? -1 : middle_index;
}
var arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
console.log(binarySearch(arr, 1));

//19
function larger(val){
    return function(evalue, index, array){
        return evalue >= val;
    };
}
var result = [20,50,11,34,45,78].filter(larger(25));
console.log(result);

//20
function generateID(length){
    const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = ' ';
    for(let i = 0; i<length; i++){
        id += list.charAt(Math.floor(Math.random() * list.length-1));
    }
   return id;
}
console.log(generateID(6));

//21
function subsetLength(arr, length){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let temp = [];
        temp.push(arr[i]);

        for(let j = i+1; j<arr.length; j++){
            temp.push(arr[j]);
            if(temp.length === length){
                newArr.push(temp);
                temp = [];
                temp.push(arr[i]);
            }
        }
    }
    return newArr;
}
console.log(subsetLength([1,2,3,4],2));

//22
const occurencesOfStr = (str, letter) =>{
    var count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == letter){
            count++;
        }
    }
    return count;
}
console.log(occurencesOfStr( 'microsoft.com', 'o' ));

//23
const noRepeat = (str) =>{
    str = str.split('');
    var target = '';
    for(let i = 0; i<str.length; i++){
       for(let j = i+1; j<str.length; j++){
        if(str[i] !== str[j]){
            target = str[i];
        }
       }
    }
    return target;
}
console.log(noRepeat('abacddbec'));

//24
function bubbleSort(str){
    str.sort(function(a,b){return b-a;})
    return str;
}
console.log(bubbleSort( [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 
    3223, 455, 23, 234, 213] ));

//25
function Longest_Country_Name(arr){
    return arr.reduce((a,b)=> a.length>b.length ? a:b);
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))

//26
function Longest_Substring(str){
    function noRepeatSub(str){
        let substr = '';
        for(let letter of str){
            if(substr.indexOf(letter)===-1){
                substr+= letter;
            }
            else{
                break;
            }
        }
        return substr;
    }
        let substr, result ='';
        for(let i in str){
            substr = noRepeatSub(str.substring(i));
            if(substr.length > result.length){
                result = substr;
            }
        }
        return result;
}

//27
function longestP(str){
    var longest = '';

    for(let i = 0; i<str.length; i++){
        for(let j = 0; j<str.length; j++){
            let temp = str.substring(i, j);
            let rev = temp.split('').reverse().join('');
            if(temp === rev){
                if(temp.length>longest.length){
                    longest= temp;
                }
            }
        }
    }
    return longest;
}
console.log(longestP("abracadabra"));

//28
const passParameter = (callbackfn) =>{
    callbackfn();
}
function foo(){
    console.log("dafergjhksjrghkjshrgjkrjshgkj");
}
console.log(passParameter(foo()));


//29
function functionName(fn){
    return fn.name;
}
