'use strict';

/*
в этом задании уже пришлось стыдливо подглядывать в заготовку
*/

let chess = {
	config: {
		rows: [8, 7, 6, 5, 4, 3, 2, 1],
		cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
	},

	run() {
		let board = this.generateBoard();
		document.body.innerHTML = board;
		this.insertFigures();
		this.insertPawns();
		this.addRowsNumbers();
		this.addColsChars();
	},

	generateBoard() {
		let board = '';
		let rowStartColor = 'white';

		for (let i = 0; i < chess.config.rows.length; i++) {
			let row = '';
			if (rowStartColor === 'white') {
				row = this.generateRow(rowStartColor, this.config.rows[i]);
				rowStartColor = 'black';
			} else {
				row = this.generateRow(rowStartColor, this.config.rows[i]);
				rowStartColor = 'white';
			}
			board += row;
		}
		return `<table><tbody>${board}</tbody></table>`;
	},

	generateRow(startColor, rowNumber) {
		let currentColor = startColor;
		let row = '';

		for(let i = 0; i < chess.config.rows.length; i++) {
			let field = '';
			if (currentColor === 'white') {
				field = this.generateField('white', rowNumber, chess.config.cols[i]);
				currentColor = 'black';
			} else {
				field = this.generateField('black', rowNumber, chess.config.cols[i]);
				currentColor = 'white';
			}
			row += field;
		}
		return `<tr>${row}</tr>`;
	},

	generateField(color, rowNumber, colChar) {
		return `<td data-rownum='${rowNumber}' data-colchar='${colChar}' class='${color}'></td>`;
	},

	addRowsNumbers() {
		let trs = document.querySelectorAll('tr');

		for (let i = 0; i < chess.config.rows.length; i++) {
			let td = document.createElement('td');
			td.innerText = this.config.rows[i];
			trs[i].insertAdjacentElement('afterbegin', td);
		}
	},

	addColsChars() {
		let tr = document.createElement('tr');
		tr.innerHTML = '<td></td>';

		for (let i = 0; i < chess.config.cols.length; i++) {
			tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
		}

		let tbody = document.querySelector('tbody');

		tbody.insertAdjacentElement('beforeend', tr);
	},

	insertFigures() {
		for (let i = 0; i < figures.length; i++) {
			let cell = document.querySelector(`[data-rownum='${figures[i].coordRow}'][data-colchar='${figures[i].coordCol}']`);
			let figure = this.getFigure(figures[i].figure, figures[i].color + 'Figure');
			cell.innerHTML = figure;
		}
	},

	getFigure(name, color) {
		return `<i class="fas fa-chess-${name} ${color}"></i>`;
	},

	insertPawns() {
		let whitePawns = document.querySelectorAll('tr:nth-child(7) td');
		for (let i = 0; i < whitePawns.length; i++) {
			whitePawns[i].innerHTML = this.getFigure('pawn', 'whiteFigure');
		}

		let blackPawns = document.querySelectorAll('tr:nth-child(2) td');
		for (let i = 0; i < blackPawns.length; i++) {
			blackPawns[i].innerHTML = this.getFigure('pawn', 'blackFigure');
		}
	},
}

chess.run();