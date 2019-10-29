interface Rect {
	readonly id: string
	color?: string
	size: {
		width: number
		height: number
	}
}

const rect1: Rect = {
	id: '123',
	size: {
		width: 20,
		height: 30
	},
	color: 'ccc'
}

const rect3 = {} as Rect
//same but older
const rect4 = <Rect>{}

/**
|--------------------------------------------------
| Interfaces inheritance
|--------------------------------------------------
*/
interface RectWithArea extends Rect {
	getArea: () => number
}

const rect5: RectWithArea = {
	id: '12',
	size: {
		width: 20,
		height: 20
	},
	getArea(): number {
		return this.size.width * this.size.height
	}
}

/**
|--------------------------------------------------
| Classes implementation
|--------------------------------------------------
*/

interface IClock {
	time:Date
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date()

	setTime(date: Date): void {
		this.time = date
	}
}

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

interface Styles {
	[key: string]: string
}

const css: Styles = {
	border: '1px solid red',
	marginTop: '2px',
	borderRadius: '5px'
}