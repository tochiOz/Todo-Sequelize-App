/**
 *
 * @description inValidName is function which validates a name
 *
 * @param {name} name is the eniity you want to validate
 *
 * @param {value} value is the data yur want to validate
 *
 * @returns {boolean} return true or false
 */
export const inValidName = (name, value) => {
	if (!value) return `${name} is required`;
	if (!/^[A-Z][a-z]+\s([A-Z][a-z]+\s)?[A-Z][a-z]+$/.test(value)) return `${name} is not valid`;
	return null;
};

export const inValidInput = (text) => {
	if (!text) return 'Input invalid, field cannot be empty';
	if (!/^.{4,100}$/.test(text)) return 'text should be minimum of 5 characters and maximum of 100';
};
