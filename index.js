class Cube {
	cx = 0;
	cy = 0;
	cz = 0;

	length = 1;

	get halfLength() {
		return this.length / 2;
	}

	constructor(cx, cy, cz, length) {
		if (length <= 0)
			throw `Length must be larger than zero`;

		Object.assign(this, { cx, cy, cz, length });
	}

	getBounds() {
		const [
			[left, right],
			[top, bottom],
			[back, front]
		] = [this.cx, this.cy, this.cz].map(coordinate => {
			return [
				coordinate - this.halfLength,
				coordinate + this.halfLength
			];
		});

		return {
			left, right, top, bottom, back, front
		};
	}

	isInside([x, y, z]) {
		const {
			top,
			bottom,
			left,
			right,
			front,
			back
		} = this.getBounds();

		// GOOD
		return (
			x >= left && x <= right &&
			y >= top && y <= bottom &&
			z >= back && z <= front
		);
	}

	isOutside([x, y, z]) {
		const {
			top,
			bottom,
			left,
			right,
			front,
			back
		} = this.getBounds();

		return (
			x
		);
	}
}

const cube = new Cube(1, 2, 3, 4);
console.log(cube);

const points = [
	[1, 6, 7],
	[-1, 1, 1],
	[8, -9, 3],
	[-2, 2, 7],
	[-6, -3, -1]
];






const list = [1, 2, 3];

const newList = list.map(num => num * 2);
