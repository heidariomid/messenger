import {IconType} from 'react-icons';

interface SocialBtnProps {
	icon: IconType;
	onClick: () => void;
	text?: string;
}

const SocialBtn: React.FC<SocialBtnProps> = ({icon: Icon, text, onClick}) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className='
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-white 
        px-2 
        py-2 
        text-gray-500 
        shadow-sm 
        ring-1 
        ring-inset 
        ring-gray-300 
        hover:bg-gray-50 
        focus:outline-offset-0
      '
		>
			<div className='flex items-center gap-x-2'>
				<Icon />
				<span>{text}</span>
			</div>
		</button>
	);
};

export default SocialBtn;
