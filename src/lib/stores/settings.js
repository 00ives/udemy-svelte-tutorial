//writeable stores
import { writable } from 'svelte/store';

const settings = writable(
	{
		colorScheme: 'dark',
		language: 'en',
		fontSize: 12
	},
	() => {
		console.log(1111, 'from 0 to 1');
		return () => {
			console.log(1111, 'from 1 to 0');
		};
	}
);

export default settings;
