import Card from '../components/card'

export default class Dashboard {
  constructor () {
  }


  getContent(data) {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = '#E0FFFF'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'center'
    title.style.fontFamily = 'stencil'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '50px'

    title.append('J.A.R.V.I.S. - Avengers Initiative')

    container.appendChild(title)

    data.forEach((item) => {
      let characterCard = new Card(item)
      container.append(characterCard.getContent())
    })

    return container
  }

  animate() {
  }
}