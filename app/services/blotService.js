import { AppState } from "../AppState.js"
import { blot } from "../models/blot.js"
import { loadState, saveState } from "../utils/Store.js"







class BlotService {



  selectBlot(blotId) {
    // console.log('blot', blotId)
    let selectedBlot = AppState.blots.find((blot) => blot.id == blotId)
    AppState.activeBlot = selectedBlot
    // console.log(AppState.activeBlot)
  }


  createBlot(blotData) {
    console.log(blotData)
    const newBlot = new blot(blotData)
    AppState.blots.push(newBlot)
    this.saveBlotState()
  }

  saveBlot(form) {
    // console.log(form)
    const activeBlot = AppState.activeBlot
    activeBlot.body = form.body
    activeBlot.updatedDate = new Date()
    AppState.emit('activeBlot')
    AppState.emit('blots')
    this.saveBlotState()
  }


  deleteBlot(blotid) {
    console.log(blotid)
    const blotIndex = AppState.blots.findIndex((blot) => blot.id == blotid)
    console.log(blotIndex)
    AppState.blots.splice(blotIndex, 1)
    AppState.emit('activeBlot')
    AppState.activeBlot = null
    this.saveBlotState()
  }

  saveBlotState() {
    let blots = AppState.blots
    saveState('blots', blots)
  }

  loadBlotState() {
    let loadedBlots = loadState('blots', [blot])
    AppState.blots = loadedBlots
  }



}






export const blotservice = new BlotService()