import { defineStore } from 'pinia';

export const usePermissStore = defineStore('permiss', {
	state: () => {
		const keys = localStorage.getItem('ms_keys');
		return {
			key: keys ? JSON.parse(keys) : [],
			defaultList:{
				admin: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
				user: ['1', '3']
			}
		};
	},
	actions: {
		handleSet(val) {
			this.key = val;
		}
	}
});
