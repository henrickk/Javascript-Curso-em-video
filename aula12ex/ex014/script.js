function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')

  var data = new Date()
  //var hora = data.getHours()
  var hora = 10
  msg.innerHTML = `Agora são ${hora} horas`
  if (hora >= 00 && hora < 12) {
    //Bom dia
    img.src = 'fotomanhã.png'
    document.body.style.background = '#faebd8'
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = 'fototarde.png'
    document.body.style.background = '#d7ae80'
  } else {
    //Boa noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#000000'
  }
}
