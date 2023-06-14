'use client';
import CheckOTP from '@/components/OTP/CheckOTP';
import {checkOtpCode, getOtp} from '@/services/authServices';
import {useMutation} from '@tanstack/react-query';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-hot-toast';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import {set} from 'lodash';

const Otp = () => {
	let TIME_TO_RESEND_OTP_CODE = 60000;
	const router = useRouter();
	const [time, setTime] = useState(TIME_TO_RESEND_OTP_CODE);
	const [otp, setOtp] = useState('');
	const {mutateAsync: checkOtpAsync} = useMutation({mutationFn: checkOtpCode});
	const {mutateAsync: getOtpAsync} = useMutation({mutationFn: getOtp});
	const {
		register,
		getValues,
		formState: {errors},
		handleSubmit,
		clearErrors,
		reset,
	} = useForm<FieldValues>({
		mode: 'onSubmit',
		reValidateMode: 'onBlur' || 'onChange',
		defaultValues: {
			phoneNumber: '',
			otp: '',
		},
	});
	const otpResponse = null;
	const phoneNumber = localStorage.getItem('phoneNumber');
	const onResendOtp = () => {
		setTime(TIME_TO_RESEND_OTP_CODE);
		getOtpAsync({phoneNumber});
		setOtp('');
	};
	const onSubmit: SubmitHandler<FieldValues> = async (e) => {
		e.preventDefault();
		try {
			const {data, status}: any = await checkOtpAsync({phoneNumber, otp});
			if (status === 200) {
				toast.success(data.message);
				router.push('/');
			}
		} catch (error: any) {
			toast.error(error?.response?.data?.message);
		}
	};
	useEffect(() => {
		const timeout = setTimeout(() => {
			setTime(time - 1000);
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, [time]);
	return (
		<div className=' flex flex-col  mx-auto w-full min-h-screen justify-center -mt-10  '>
			<div className='flex justify-center items-center text-center   '>
				<CheckOTP
					otpResponse={otpResponse}
					onSubmit={onSubmit}
					otp={otp}
					setOtp={setOtp}
					onBack={() => router.push('/auth')}
					time={time}
					onResendOtp={onResendOtp}
					isCechkingOtp={false}
				/>
			</div>
		</div>
	);
};

export default Otp;
