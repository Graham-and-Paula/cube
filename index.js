//

// a is lower bound, b is upper bound, and x is to be tested
function inRange(a, b, x) {
	return x >= a && x <= b;
}

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
			inRange(left, right, x) &&
			inRange(top, bottom, y) &&
			inRange(back, front, z)
			// (x >= left && x <= right) &&
			// (y >= top && y <= bottom) &&
			// (z >= back && z <= front)
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
			!inRange(left, right, x) ||
			!inRange(top, bottom, y) ||
			!inRange(back, front, z)
			// x < left || x > right ||
			// y < top || y > bottom ||
			// z < back || z > front
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

// const point
// const point = [-1, 1, 1];
// log point
// console.log(point);
// test if inside cube
// console.log(cube.isInside(point));
// log that result

// points.forEach(point => {
// 	console.log(cube.isInside(point));
// });

// const results = points.map((point) => cube.isInside(point));
// for (const result of results)
// 	console.log(`[x, y, z] => ${result}`);

for (const point of points)
	console.log(`${point} => ${cube.isInside(point)}`);
