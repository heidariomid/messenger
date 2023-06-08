interface IErrorSpan {
	message?: any;
}
const ErrorBtn: React.FC<IErrorSpan> = ({message}) => {
	if (message) {
		return (
			<span role={'alert'} className='bg-red-600 text-white px-4  rounded-md mx-auto  '>
				{message}
			</span>
		);
	}
	return <span className='bg-red-600 text-white px-4   '>Something went wrong</span>;
};
export default ErrorBtn;
