import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface IUser {
	id: number;
	name: string | undefined;
	email?: string | null;
	age?: number | null;
	gender?: string | null;
	country?: string | null;
	flag?: string | null;
	posts?: IPost[];
}

export interface IPost {
	id: number;
	title: string;
	content?: string | null;
	published?: boolean | null;
	user?: IUser | null;
	userId?: number | null;
}

export interface SearchState {
	search: string;
	message: string;
	users: IUser[];
}

const initialState: SearchState = {
	search: '',
	users: [],
	message: '',
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setUsers: (state, action: PayloadAction<IUser[]>) => {
			state.users = action.payload;
		},
		setMessage: (state, action: PayloadAction<string>) => {
			state.message = action.payload;
		},
	},
});

export const {setSearch, setUsers, setMessage} = searchSlice.actions;

export default searchSlice.reducer;
