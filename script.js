let line = 0;
const fprint = (text) => {
    e = document.createElement("p")
    e.appendChild(document.createTextNode(`Print ${++line} : ` + text))
    document.getElementById("print").appendChild(e)
}

const a = {
    name: 'amine',
    age: 18
}

const b = ({name,age}) => (
    console.log(`${name} is the best on js, he has ${age} year old`)
);

const day ='sunday'

switch(day){
    case 'monday':
        fprint("course of monday")
        break
    case 'tursday':
        fprint("course of tursday")
        break
    case 'saturday':
    case 'sunday':
        fprint("enjoy the Weekend")
        break
    default: 
        fprint("course default")
        break
}

let bill = 100
let tip = (bill>=50 && bill<= 300)? bill*0.15 : bill*0.20;
fprint(`The bill was ${bill}, the tip was ${tip}, the total was ${bill+tip}`)