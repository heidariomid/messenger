import http from './httpService';

export const getOtp = async (phoneNumber: string) => {
	const {data} = await http.post('/user/get-otp', {phoneNumber});
	return data;
};
