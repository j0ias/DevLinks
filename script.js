function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const image = document.querySelector('#profile img')
  if (html.classList.contains('light')) {
    image.setAttribute('src', './assets/avatar-light.png')
    image.setAttribute(
      'alt',
      'Foto de Mayk Brito sorrindo, de blusa preta e óculos escuros'
    )
  } else {
    image.setAttribute('src', './assets/avatar.png')
    image.setAttribute(
      'alt',
      'Foto de Mayk Brito sorrindo, de óculos, camiseta preta, barba e fundo amarelo'
    )
  }
}
