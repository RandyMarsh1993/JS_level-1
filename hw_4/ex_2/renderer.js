'use strict';

let renderer = {
	//карта игрового поля
	map: '',

	/**
	 * отображает игровое поле в консоли
	 */
	render() {
		for (let row = 0; row < config.rowsCount; row++) {
			for (let col = 0; col < config.colsCount; col++) {
				if (row === player.y && col === player.x) {
					this.map += 'o ';
				} else {
					this.map += 'x ';
				}
			}
			this.map += '\n';
		}
		console.log(this.map);
	},

	clear() {
		console.clear();
		this.map = '';
	}
}