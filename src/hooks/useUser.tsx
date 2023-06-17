'use client';
import {IUser} from '@/Interface/IUser';
import {getUserProfile} from '@/services/userServices';
import {useQuery} from '@tanstack/react-query';

export const useUser = () => {
	const {data, error, isLoading} = useQuery({
		queryKey: ['get-user'],
		queryFn: getUserProfile,
	});
	const user: IUser = data?.user;
	if (!user) {
		return {
			user: null,
			isLoading,
		};
	}
	return {
		user,
		isLoading,
	};
};
