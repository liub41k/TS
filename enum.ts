enum Membership {
	Simple, // 0
	Standart, // 1
	Premium // 2
}

const membership = Membership.Standart // 1
const membershipReverse = Membership[2] // Premium


enum Socials {
	VK = 'VK',
	FACEBOOK = 'FACEBOOK',
	INSTA = 'INSTA'
}

const social = Socials.INSTA // 'INSTA'