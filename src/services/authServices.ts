import http from './httpService';

export const getOtp = (data: any) => {
	return http.post('/user/get-otp', data).then(({data}) => {
		return {
			data: data?.data,
			status: data?.statusCode,
		};
	});
};

export const checkOtpCode = (data: any) => {
	return http.post('/user/check-otp', data).then(({data}) => {
		return {
			data: data?.data,
			status: data?.statusCode,
		};
	});
};
