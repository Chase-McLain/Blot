import { generateId } from "../utils/GenerateId.js";







export class blot {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body || ''
    this.createdDate = data.createdDate
    this.updatedDate = data.updatedDate
  }


  get blotTemplate() {
    return `
    <div onclick="app.BlotController.selectBlot('${this.id}')" style="border-color:${this.color};" class="blots mx-2 my-1 p-1">
      <h4 class="pb-0 mb-0">${this.title}</h4>
      <p class="pb-0 mb-0">Created on: ${this.createdDate}</p>
      <p class="pb-0 mb-0">Last update:${this.updatedDate}</p>
    </div>
    `
  }

  get activeBlotTemplate() {
    return `
    <div style="border-color:${this.color};" class="active-blot m-2">
      <h2 class="mb-0 ms-2 text-black">${this.title}</h2>
      <p class="mb-0 ms-2 text-black">Created on: ${this.createdDate}</p>
      <p class="ms-2 text-black">Last update:${this.updatedDate}</p>
      <form id="active-blot-body" onsubmit="">
        <textarea style="height: 375px" class="w-100" name="" id="">${this.body}</textarea>
        <span>
          <button class="btn btn-success m-2">SAVE <span class="mdi mdi-floppy"></span></button>
      </form>
      <button onclick="" class="btn btn-danger">DELETE <span class="mdi mdi-trash-can-outline"></span></button>
    </span>
      </div >
      `
  }






}













