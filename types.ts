const strn: string = 'Hello'

const isFetching: boolean = true

let int: number = 42
// int = ''

const numArr: number[] = [1, 1, 2, 3, 5]
const numArr2: Array<number> = [1, 1, 2, 3, 5] //generic
const words: string[] = ['h', 'e','l', 'l', 'o']

// Tuple
const contact: [string, number] = ['name', 123]
// Tuple

// Any
let variable: any = 42
variable = []

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

// Void => returns nothing
function sayName(name: string): void {
	
}

// Never => returns Error, always do smth
function throwErr(message:string): never {
	throw new Error(message)
}

function infinite():never {
	while (true) {
		
	}
}

/**
|--------------------------------------------------
| TYPE
|--------------------------------------------------
*/
type Login = string // alias

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1:ID = 1234
const id2:ID = '1234'
// const id3:ID = true

type Some = string | null | undefined