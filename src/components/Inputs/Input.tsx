'use client';

import clsx from 'clsx';
import {HtmlHTMLAttributes} from 'react';
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form';

interface InputProps {
	placeholder: string;
	id: string;
	type?: string;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	disabled?: boolean;
	name: string;
	registerName?: object;
	onKeyDown?: HtmlHTMLAttributes<HTMLInputElement>['onKeyDown'];
}

const Input: React.FC<InputProps> = ({placeholder, onKeyDown, id, register, name, registerName, errors, type = 'text', disabled}) => {
	return (
		<div>
			<div className='mt-2'>
				<input
					id={id}
					type={type}
					onKeyDown={onKeyDown}
					autoComplete={id}
					placeholder={placeholder}
					disabled={disabled}
					{...register(name, registerName)}
					className={clsx(
						`
            form-input
            block 
            w-full 
            rounded-md 
            border-0 
            py-2 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            hover:border-secondary-400
            hover:transition-colors
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-1 
            focus:ring-inset 
            hover:ring-secondary-400 
            focus:outline-none
            focus:ring-secondary-400
            sm:text-sm 
            sm:leading-6`,
						errors[name] && 'focus:ring-red-400',
						disabled && 'opacity-50 cursor-default',
					)}
				/>
			</div>
		</div>
	);
};

export default Input;
