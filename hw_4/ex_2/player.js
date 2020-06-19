'use strict';

/**
 * объект игрока, содержащий все его свойства и методы
 * @property {int} x позиция игрока по X-координате
 * @property {int} y позиция игрока по Y - координате
 */
const player = {
	x: 0,
	y: 0,

	/**
	 * двигает игрока по переданному направлению
	 * @param {{x: int, y: int}} nextPoint следующая точка пользователя
	 */
	move(nextPoint) {
		this.x = nextPoint.x;
		this.y = nextPoint.y;
	}
}