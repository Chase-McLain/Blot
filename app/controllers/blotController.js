import { AppState } from "../AppState.js"






export class blotController {
  constructor() {
    // console.log('blot')
    this.drawBlotSelector()



  }



  drawBlotSelector() {
    // console.log('blot')
    let blotDisplay = ''
    AppState.blots.forEach((blot) => {
      blotDisplay += blot.blotTemplate
    })
    let blotDisplayElement = document.getElementById('blot-selector')
    blotDisplayElement.innerHTML = blotDisplay
  }



  selectBlot() {
    console.log('blot')


  }




}










