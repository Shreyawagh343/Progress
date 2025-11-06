var users = [{
    name:"shreya",
    kidneys:[{
        heathly:"true",
    }]
}]

const shreyakidney = users[0].kidneys;
const numberofkid = shreyakidney.length;
let  numberofheathofkid = 0;
for(let i=0;i<shreyakidney.length;i++){
    if(shreyakidney[i].heathly){
        numberofheathofkid +=1 ;
    }
}
console.log(numberofheathofkid);

let unnumberofheathofkid = numberofkid - numberofheathofkid;
console.log(unnumberofheathofkid);
