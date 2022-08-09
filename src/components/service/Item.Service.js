import { Api } from "../API/Api";

const parseResponse =(response) => response.json();

export const ItemService ={
  getAll:() => 
  fetch(Api.itemList(), {method: "GET"}).then(parseResponse),
  getById:(id) =>
  fetch(Api.itemById(id), {method: "GET"}).then(parseResponse),
  create:() =>
  fetch(Api.createItem(), {method: "POST"}).then(parseResponse),
  updateItem:(id) =>
  fetch(Api.updateItem(id), {method: "PUT"}).then(parseResponse),
  deleteItem:(id) =>
  fetch(Api.deleteItem(id), {method: "DELETE"}).then(parseResponse),
}
