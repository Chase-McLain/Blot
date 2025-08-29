import { AppState } from "../AppState.js"







class BlotService {



  selectBlot(blotId) {
    // console.log('blot', blotId)
    let selectedBlot = AppState.blots.find((blot) => blot.id == blotId)
    AppState.activeBlot = selectedBlot
    // console.log(AppState.activeBlot)
  }




}






export const blotservice = new BlotService()