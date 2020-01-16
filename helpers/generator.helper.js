/**
 * Генерирует уникальное значение id (uuidv4)
 * Там маска xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 * crypto это штука в ES6 вроде
 * Я хз, как работает этот код, вот ссылка на него
 * https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
function IDGenerator() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
		(c ^ (window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
	);
}

export { IDGenerator };
