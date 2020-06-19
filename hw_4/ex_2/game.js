'use strict';

let game = {
	//запускает игру
	run() {
		while (true) {
			//получаем направление от игрока
			const direction = mover.getDirection();
			if (direction === null) {
				console.log('Игра окончена');
				return;
			}
			const nextPoint = mover.getNextPosition(direction);
			if (mover.isDirectionAvailable(nextPoint)) {
				renderer.clear();
				player.move(nextPoint);
				renderer.render();
			}
		}
	},

	//выполняется при открытии страницы
	init() {
		console.log('ваше положение на поле в виде о.');
		renderer.render();
		console.log('чтобы начать игру наберите game.run() и нажмте Enter.');
	}
}

game.init();