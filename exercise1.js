function multiplicationTable(number){

   var answer = `La tabla del ${number}`
   console.log(answer)

    for(let i = 1; i <= number; i++) {

let result =`${i} x ${number} = ${number * i}`
console.log(result)
    }
    
}


multiplicationTable(10)
