function isalgoram(str1,str2){

   let arr1 = str1.split("");
   let arr2 = str2.split("");

   let resStr1 = arr1.sort();
   let resStr2 = arr2.sort();

   let final1 = resStr1.join("");
   let final2 = resStr2.join("");

    if(final1 == final2){
        console.log(" is a alg..");
    }else {
        console.log(" is not a alg..");
    }



}

isalgoram("shreya","ayrehs ");



