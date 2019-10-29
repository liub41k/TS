function add(a:number, b:number):number {
	return a + b
}

add(1,2)

/**
|--------------------------------------------------
| Перегрузка
|--------------------------------------------------
*/
interface MyPosition {
	x: number | undefined
	y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
	default: string
}

function position(): MyPosition // 1
function position(a: number): MyPositionWithDefault // 2
function position(a: number, b: number): MyPosition // 3

function position(a?: number, b?: number) {
	if (!a && !b) { // 1
		return {x: undefined, y: undefined}
	}

	if (a && !b) { // 2
		return {x: a, y: undefined, default: a.toString()}
	}

	return {x: a, y: b} // 3
}
