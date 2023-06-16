// interface IUser

export interface IUser {
	_id: string;
	biography: string;
	likedProducts: string[];
	phoneNumber: string;
	resetLink: string;
	isVerifiedPhoneNumber: boolean;
	isActive: boolean;
	Products: string[];
	role: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	email: string;
	name: string;
	cart: {
		products: {
			quantity: number;
			productId: string;
			_id: string;
		}[];
		_id: string;
		coupon: null;
	};
	avatarUrl: string;
}
