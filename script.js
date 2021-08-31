'use strict';
let line = 0;
const fprint = (text) => {
    let e = document.createElement("p")
    e.appendChild(document.createTextNode(`Print ${++line} : ` + text))
    document.getElementById("print").appendChild(e)
}

// const a = {
//     name: 'amine',
//     age: 18
// }

// const b = ({name,age}) => (
//     console.log(`${name} is the best on js, he has ${age} year old`)
// );

// const day ='sunday'

// switch(day){
//     case 'monday':
//         fprint("course of monday")
//         break
//     case 'tursday':
//         fprint("course of tursday")
//         break
//     case 'saturday':
//     case 'sunday':
//         fprint("enjoy the Weekend")
//         break
//     default: 
//         fprint("course default")
//         break
// }

// let bill = 100
// let tip = (bill>=50 && bill<= 300)? bill*0.15 : bill*0.20;
// fprint(`The bill was ${bill}, the tip was ${tip}, the total was ${bill+tip}`)

// //functions 

// //function declaration
// function calAge(birthday){
//     return 2021-birthday;
// }
// //function expression 
// const calAge2 = function(birthday){
//     return 2021-birthday;
// }
// let age = calAge2(1993);

// fprint(calAge(1993));
// fprint(age);

//Arrow functions
// const age = birthday => 2021 - birthday;
// fprint(`your age is : ${age(1993)}`);

// const yearsUntilRetirement = (birthday,firstName)=> {
//     const yearsAge = age(birthday);
//     return `you will be in Retirement after ${60 - yearsAge} years - ${firstName}`;
// }
// fprint(yearsUntilRetirement(1993,"BELFKIH Mohammed Amine"));
// fprint(yearsUntilRetirement(1998,"BELFKIH Chaimae"));
// fprint(yearsUntilRetirement(1963,"BELFKIH Adil"));

// Coding challenge #1 
const calcAverage = (s1,s2,s3) => (s1+s2+s3)/3;

const avgKoalas = calcAverage(44,23,71);
const avgDolphins = calcAverage(85,54,41);

function checkWinner(avgKoalas,avgDolphins){
    if(avgDolphins>avgKoalas){
        fprint(`the Dolphins team win (${avgDolphins} vs. ${avgKoalas})`)
    }else if(avgDolphins<avgKoalas){
        fprint(`the Koalas team win (${avgKoalas} vs. ${avgDolphins})`)
    }else{
        fprint(`No one win this party`)
    }
}
checkWinner(avgKoalas,avgDolphins);