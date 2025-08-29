import { generateId } from "../utils/GenerateId.js";







export class blot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body
    this.createdDate = data.createdDate
    this.updatedDate = data.updatedDate
  }











}













