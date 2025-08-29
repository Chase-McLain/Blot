import { AppState } from "../AppState.js"
import { blotservice } from "../services/blotService.js"






export class blotController {
  constructor() {
    // console.log('blot')
    this.drawBlotSelector()
    AppState.on('activeBlot', this.drawActiveBlot)


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


  drawActiveBlot() {
    let activeBlotElement = document.getElementById('blot-zone')
    const activeBlot = AppState.activeBlot
    if (AppState.activeBlot != null) {
      activeBlotElement.innerHTML = activeBlot.activeBlotTemplate
    } else
      activeBlotElement.innerHTML = `<div class="text-center">
        <h2 class="text-black">The Blot Zone</h2>
        <div>
          <img class="img-fluid mt-3 splatter" src="assets\img\black-paint-splatter.png" alt="splatter">
        </div>`

  }


  selectBlot(blotId) {
    // console.log('blot', blotId)
    blotservice.selectBlot(blotId)

  }




}










