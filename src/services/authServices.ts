import http from './httpService';

export const getOtp = async (phoneNumber: string) => {
	return await http.post('/user/get-otp', {phoneNumber});
};
