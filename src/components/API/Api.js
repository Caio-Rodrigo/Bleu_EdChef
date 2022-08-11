const itemContext = {
	itemEndPoint: () => `${Api.baseUrl}/Menu`,
	itemList: () => `${itemContext.itemEndPoint()}/allItens`,
	itemById: (id) => `${itemContext.itemEndPoint()}/itens/${id}`,
	createItem: () => `${itemContext.itemEndPoint()}/createItem`,
	updateItem: (id) => `${itemContext.itemEndPoint()}/updateItem/${id}`,
	deleteItem: (id) => `${itemContext.itemEndPoint()}/deleteItem/${id}`,
};

const userContext = {
	userEndPoint: () => `${Api.baseUrl}/User`,
	createUser: () => `${userContext.userEndPoint()}/Create`,
	allUsers: () => `${userContext.userEndPoint()}/AllUsers`,
};

// eslint-disable-next-line no-unused-vars
const auth = {
	Auth: () => `${Api.baseUrl}/Auth/`,
};

export const Api = {
	baseUrl: 'https://api-restaurant-menu.herokuapp.com',
	...itemContext,
};
