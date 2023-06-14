import OTPInput from 'react-otp-input';
import {HiArrowNarrowRight} from 'react-icons/hi';
import {CiEdit} from 'react-icons/ci';
import Loading from '../Loading';
interface Props {
	otpResponse: any;
	onSubmit: any;
	otp: any;
	setOtp: any;
	onBack: any;
	time: any;
	onResendOtp: any;
	isCechkingOtp: any;
}
function CheckOTP({otpResponse, onSubmit, otp, setOtp, onBack, time, onResendOtp, isCechkingOtp}: Props) {
	return (
		<div>
			<button onClick={onBack} className='mb-6 flex w-full items-center justify-center '>
				<HiArrowNarrowRight className='w-6 h-6 text-secondary-500 ml-2' /> ویرایش شماره موبایل
			</button>
			{otpResponse && (
				<p>
					{otpResponse?.message}
					<button onClick={onBack}>
						<CiEdit className='w-6 h-6 text-primary-900' />
					</button>
				</p>
			)}

			<form className='space-y-10  ' onSubmit={onSubmit}>
				<p className='font-bold '>کد تایید را وارد کنید</p>
				<OTPInput
					value={otp}
					onChange={setOtp}
					numInputs={6}
					renderSeparator={<span>-</span>}
					inputStyle={{
						width: '2.5rem',
						padding: '0.5rem 0.2rem',
						border: '1px solid rgb(var(--color-primary-300))',
						borderRadius: '0.5rem',
					}}
					containerStyle='flex flex-row-reverse gap-x-2 justify-center'
					renderInput={(props) => <input {...props} />}
				/>
				<div>
					{isCechkingOtp ? (
						<Loading />
					) : (
						<button type='submit' className='btn btn--primary w-full'>
							تایید
						</button>
					)}
				</div>
			</form>
			<div className={`  ${time > 0 ? 'text-secondary-200' : 'text-secondary-500'}  mt-10`}>
				{time > 0 ? <p>{time / 1000} ثانیه تا ارسال مجدد کد</p> : <button onClick={onResendOtp}>ارسال مجدد کد؟</button>}
			</div>
		</div>
	);
}
export default CheckOTP;
