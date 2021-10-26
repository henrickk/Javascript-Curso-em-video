let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort() //para ordenar em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)

if (pos == -1) {
  console.log(`O válor não existe`)
}else{
  console.log(`O válor está na posição ${pos}`)
}
/*
num[3] = 6 //para adicionar mais um elemento
*/