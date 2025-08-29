import { AppState } from "../AppState.js"
import { blotservice } from "../services/blotService.js"
import { getFormData } from "../utils/FormHandler.js"






export class blotController {
  constructor() {
    // console.log('blot')
    this.drawBlotSelector()
    AppState.on('blots', this.drawBlotSelector)
    AppState.on('activeBlot', this.drawActiveBlot)
    // blotservice.saveBlotState()
    blotservice.loadBlotState()

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
          <img class="img-fluid mt-3 splatter" src="./assets/img/black-paint-splatter.png" alt="splatter">
        </div>`

  }


  selectBlot(blotId) {
    // console.log('blot', blotId)
    blotservice.selectBlot(blotId)

  }


  createBlot() {
    // console.log('blot')
    event.preventDefault()
    const submittedForm = event.target
    const blotData = getFormData(submittedForm)
    blotservice.createBlot(blotData)
    submittedForm.reset()
  }

  saveBlot() {
    // console.log('blot')
    event.preventDefault()
    let formBody = event.target
    let form = getFormData(formBody)
    blotservice.saveBlot(form)
  }


  deleteBlot(blotid) {
    console.log('blot')
    const confirmed = window.confirm('Are you sure you wish to delete this Blot?')
    if (!confirmed) {
      return
    }
    blotservice.deleteBlot(blotid)
  }


}










