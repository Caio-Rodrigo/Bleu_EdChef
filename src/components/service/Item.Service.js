import { Api } from '../API/Api';

const parseResponse = (response) => response.json();

const transformItem = (item) => {
	return {
		...item,
		id: item._id,
		name: item.name,
		description: item.description,
		image: item.image,
	};
};

const parseTransformItem = (response) =>
	parseResponse(response).then((items) => items.map(transformItem));

const parseTransformItemId = (response) =>
	parseResponse(response).then(transformItem);

export const ItemService = {
	getAll: () => fetch(Api.itemList(), { method: 'GET' }).then(parseTransformItem),
	getById: (id) =>
		fetch(Api.itemById(id), { method: 'GET' }).then(parseTransformItemId),
	create: () => fetch(Api.createItem(), { method: 'POST' }).then(parseResponse),
	updateItem: (id) =>
		fetch(Api.updateItem(id), { method: 'PUT' }).then(parseResponse),
	deleteItem: (id) =>
		fetch(Api.deleteItem(id), { method: 'DELETE' }).then(parseResponse),
};
