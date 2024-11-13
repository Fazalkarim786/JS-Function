// function to return vowels in string
function countVowels ( str ){
let count = 0;
for(let i of str){
    if(i==="a" || i==="e" || i==="i" || i==="o"||i==="u"){
        count++;
    }
    return count;
}
let w = countVowels("apnacollege");
console.log(w);
}