'use client';

import {IUser} from '@/Interface/IUser';
import {FC} from 'react';

interface DahboardProps {
	user: IUser;
}

const Dahboard: FC<DahboardProps> = ({user}) => {
	return <div>{user?.name}</div>;
};

export default Dahboard;
