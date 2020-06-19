'use strict';

let mover = {
	/**
	 * получает и отдает направление от пользователя
	 * @returns {int} возвращает направление, введенное пользователем
	 */
	getDirection() {
		const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9,];
		while (true) {
			let direction = parseInt(prompt('Для перемещения используйте числа [1, 2, 3, 4, 6, 7, 8, 9]. Для выхода введите "Отмена".'));
			if (isNaN(direction)) {
				return null;
			}
			if (!availableDirections.includes(direction)) {
				alert('Для перемещения необходимо ввести одно из чисел [1, 2, 3, 4, 6, 7, 8, 9].');
				continue;
			}
			return direction;
		}
	},

	/**
	 * отдает следующую точку, в которой будет находиться пользователь после передвижения
	 * @param {int} direction направление движения игрока
	 * @returns {{x: int, y: int}} следующая позиция игрока
	 */
	getNextPosition(direction) {
		const nextPosition = {
			x: player.x,
			y: player.y,
		};
		switch (direction) {
			//первый вариант ограничения движения за поле прописал в кейсах
			//вариант ужасен, но работает) тем не менее переделал
			//решил ужас оставить, так что старый код закомментирован
			case 1:
				/*if (nextPosition.x === 0 || nextPosition.y === config.rowsCount - 1) {
					break;
				}*/
				nextPosition.y++;
				nextPosition.x--;
				break;
			case 2:
				/*if (nextPosition.y === config.rowsCount - 1) {
					break;
				}*/
				nextPosition.y++;
				break;
			case 3:
				/*if (nextPosition.x === config.colsCount - 1 || nextPosition.y === config.rowsCount - 1) {
					break;
				}*/
				nextPosition.y++;
				nextPosition.x++;
				break;
			case 4:
				/*if (nextPosition.x === 0) {
					break;
				}*/
				nextPosition.x--;
				break;
			case 6:
				/*if (nextPosition.x === config.rowsCount - 1) {
					break;
				}*/
				nextPosition.x++;
				break;
			case 7:
				/*if (nextPosition.x === 0 || nextPosition.y === 0) {
					break;
				}*/
				nextPosition.y--;
				nextPosition.x--;
				break;
			case 8:
				/*if (nextPosition.y === 0) {
					break;
				}*/
				nextPosition.y--;
				break;
			case 9:
				/*if (nextPosition.x === config.rowsCount - 1 || nextPosition.y === 0) {
					break;
				}*/
				nextPosition.y--;
				nextPosition.x++;
				break;
		}
		return nextPosition;
	},

	/**
	 * метод проверяет, находится ли точка для хода в пределах игрового поля
	 * @param {object} nextPoint объект с координатами x и y
	 * @returns {boolean} возвращает false, если точка находится за пределами поля
	 */
	isDirectionAvailable(nextPoint) {
		return nextPoint.x >= 0 &&
			   nextPoint.x < config.colsCount &&
			   nextPoint.y >= 0 &&
			   nextPoint.y < config.rowsCount;
	},
}