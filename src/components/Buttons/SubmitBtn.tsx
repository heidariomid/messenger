import clsx from 'clsx';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset' | undefined;
	fullWidth?: boolean;
	children?: React.ReactNode;
	onClick?: () => void;
	secondary?: boolean;
	danger?: boolean;
	disabled?: boolean;
}

const SubmitBtn: React.FC<ButtonProps> = ({type = 'button', fullWidth, children, onClick, secondary, danger, disabled}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={clsx(
				`
        btn 
        `,
				disabled && 'opacity-50 cursor-default',
				fullWidth && 'w-full',
				secondary ? 'text-gray-900' : 'text-white',
				danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-red-600',
				!secondary && !danger && 'bg-secondary-400 hover:bg-secondary-600 focus-visible:outline-secondary-600',
			)}
		>
			{children}
		</button>
	);
};

export default SubmitBtn;
