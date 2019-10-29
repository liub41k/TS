class TS {
	version: string

	constructor(version:string) {
		this.version = version
	}

	info(name: string) {
		return `${name} is name`
	}
}

// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
	readonly numberOfWheels: number = 4
	constructor(readonly model: string) {} // readonly can change ONLY in constructor
}

/**
|--------------------------------------------------
| Modifiers
|--------------------------------------------------
*/

class Animal {
	public color: string = 'black' // default
	protected voice: string = '' // access in own Class and all children Classes
 
	constructor() {
		this.go()
	}
 
	private go() { // access only in own Class
		console.log('Go')
	}
 }
 
class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
	}
}

const cat = new Cat() // instance of Class cant access protected vars/methods
// cat.voice
cat.setVoice('test')
console.log(cat.color)

/**
|--------------------------------------------------
| Abstract
|--------------------------------------------------
*/

abstract class Component {
	abstract render(): void
	abstract info(): string
}

class AppComponent extends Component {
	render(): void {
		console.log('Component on render')
	}
 
	info(): string {
		return 'This is info';
	}
}