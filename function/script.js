function toggleMode( ) {
    const html = document.documentElement
    html.classList.toggle("light")
  //  if(html.classList.contains('light')){
   //    html.classList.remove('light') 
   // } else {
   //     html.classList.add('light')
   // }
   //se isso que esta aqui for true verdadeiro executar tal coisa else executar outra 

      //pegar a taf img
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', '/assets/avatar-light.png')
           //se tiver lightmode, adicionar a imagem light
    } else {
        img.setAttribute('src', '/assets/avatar.png')
    }
   //se tiver sem light mode, manter a imagem normal
   if(img.setAttribute('light')) {
    img.setAttribute('alt', "keven de camisa Preta")
   }
}