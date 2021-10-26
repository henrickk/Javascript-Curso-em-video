function parimpar(n) {
  if (n % 2 == 0) { //se o n %'resto' de 2 for igual a 0
    return 'Par!'
  } else {
    return 'ímpar!'
  }
}
let res = parimpar(101)
console.log(res)
