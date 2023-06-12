'use client';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import ErrorBtn from '@/components/Buttons/ErrorBtn';
import {useEffect, useState} from 'react';
import APPBtn from '@/components/Buttons/SubmitBtn';
import {useRouter} from 'next/navigation';
import {useSession} from 'next-auth/react';
import {toast} from 'react-hot-toast';
import APPInput from '@/components/Inputs/Input';
import {useMutation} from '@tanstack/react-query';
import {getOtp} from '@/services/authServices';
import Loading from '@/components/Loading';

type Variant = 'login' | 'signup';
const AuthForm = () => {
	const router = useRouter();
	const session = useSession();
	const [variant, setVariant] = useState<Variant>('login');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {mutateAsync} = useMutation({mutationFn: getOtp});
	useEffect(() => {
		if (session?.status === 'authenticated') {
			router.push('/conversations');
		}
	}, [session?.status, router]);
	const toggleVariant = () => {
		if (variant === 'login') {
			setVariant('signup');
		} else {
			setVariant('login');
		}
	};
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
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async () => {
		setIsLoading(true);
		const {phoneNumber} = getValues();
		try {
			const {data, status} = await mutateAsync(phoneNumber);
			if (status === 200) {
				toast.success(data.data.message);
				router.push('/');
			}
		} catch (error) {
			toast.error(' something went wrong ');
		}
	};

	const phoneNumberRegister = {
		required: {value: true, message: 'phoneNumber is required'},
		minLength: {value: 0, message: 'phoneNumber must be more than 0 charachter'},
	};

	const clearEmailErrors = () => clearErrors('phoneNumber');
	return (
		<div className='container flex flex-col mx-auto h-full items-center justify-center'>
			<div className='w-full max-w-screen-sm flex flex-col items-center py-10 px-5 text-center '>
				<div className='flex flex-col gap-y-2 mx-auto w-full justify-center items-center '>
					{/* {state?.message !== undefined ? <span className='bg-green-600 span text-white'>{state?.message}</span> : null}
				{state?.error !== undefined ? <ErrorBtn message={state?.error} /> : null} */}
					{errors.phoneNumber?.type === 'validate' && <ErrorBtn message={'phoneNumber must include @'} />}
					{errors?.phoneNumber?.message && <ErrorBtn message={errors?.phoneNumber?.message} />}
					{errors?.password?.message && <ErrorBtn message={errors?.password?.message} />}
					{errors?.name?.message && <ErrorBtn message={errors?.name?.message} />}
				</div>
				<div className='flex h-10 relative'></div>
				<h3 className={`font-bold text-lg text-secondary-500  text-right pr-10 w-full   `}>خوش آمدید</h3>
				<div className='w-[400px]'>
					<form className='flex flex-col w-full mt-5 px-10 ' onSubmit={handleSubmit(onSubmit)}>
						<APPInput
							id='2'
							placeholder='شماره موبایل'
							name={'phoneNumber'}
							register={register}
							registerName={phoneNumberRegister}
							errors={errors}
							onKeyDown={clearEmailErrors}
							disabled={isLoading}
							type='text'
						/>

						<div className='mt-5'>
							<APPBtn type='submit' disabled={isLoading} fullWidth>
								{variant === 'login' && !isLoading && 'ورود'}
								{variant === 'signup' && !isLoading && 'Register'}
								{isLoading && <Loading />}
							</APPBtn>
						</div>
					</form>
				</div>
				<div className='mt-8'>
					<span className=' font-medium ml-4 '>{variant === 'login' ? '  کاربر جدید؟' : 'حساب کاربری دارید؟'}</span>
					<button className='pl-2  font-medium hover:underline text-primary-800' onClick={toggleVariant}>
						{variant === 'login' ? '  ثبت نام کنید ' : 'ورود'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
