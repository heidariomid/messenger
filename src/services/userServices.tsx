import http from './httpService';

export const getUserProfile = () => {
	return http.get('/user/profile').then(({data}) => data?.data);
};
