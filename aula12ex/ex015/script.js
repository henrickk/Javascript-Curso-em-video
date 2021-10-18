function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO!] verifique os dados e tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'foto_menino_criança.jpg')
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute('src', 'foto_jovem_homem.jpg')
      } else if (idade >= 21 && idade < 50) {
        //Adulto
        img.setAttribute('src', 'foto_adulto_homem.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'foto_idoso_homem.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'foto_menina_criança.jpg')
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute('src', 'foto_jovem_mulher.jpg')
      } else if (idade >= 21 && idade < 50) {
        //Adulto
        img.setAttribute('src', 'foto_mulher_adulto.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'foto_mulher_idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}