'use client';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {ArrowPathIcon} from '@heroicons/react/24/solid';
import ErrorBtn from '@/components/Buttons/ErrorBtn';
import {useEffect, useState} from 'react';
import SubmitBtn from '@/components/Buttons/SubmitBtn';
import {BsGithub, BsGoogle} from 'react-icons/bs';
import SocialBtn from '@/components/Buttons/SocialBtn';
import {useRouter} from 'next/navigation';
import {signIn, useSession} from 'next-auth/react';
import {toast} from 'react-hot-toast';
import axios from 'axios';
import Input from '@/components/Inputs/Input';

type Variant = 'login' | 'signup';
const AuthForm = () => {
	const router = useRouter();
	const session = useSession();
	const [variant, setVariant] = useState<Variant>('login');
	const [isLoading, setIsLoading] = useState<boolean>(false);
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
		setError,
		clearErrors,
		reset,
	} = useForm<FieldValues>({
		mode: 'onSubmit',
		reValidateMode: 'onBlur' || 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		const {email, password, name} = getValues();
		if (variant === 'signup') {
			axios
				.post('/api/auth/register', data)
				.then(() => {
					return signIn('credentials', {
						...data,
						redirect: true,
					});
				})
				.then((callback) => {
					if (callback?.error) {
						toast.error('Invalid credentials!');
					}
					if (callback?.ok) {
						router.push('/conversations');
					}
				})
				.catch(() => toast.error(' something went wrong '))
				.finally(() => setIsLoading(false));
		}
		if (variant === 'login') {
			signIn('credentials', {
				...data,
				redirect: true,
			})
				.then((callback) => {
					if (callback?.error) {
						toast.error('Invalid credentials!');
					}

					if (callback?.ok) {
						router.push('/conversations');
					}
				})
				.finally(() => setIsLoading(false));
		}

		// loginHandler({variables: {data: {email: lowerCaseEmail, password}}});
	};
	const socialAction = (action: string) => {
		setIsLoading(true);

		signIn(action, {redirect: false})
			.then((callback) => {
				if (callback?.error) {
					toast.error('Invalid credentials!');
				}

				if (callback?.ok) {
					router.push('/conversations');
				}
			})
			.finally(() => setIsLoading(false));
	};
	const emailPattern =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const emailRegister = {
		required: {value: true, message: 'email is required'},
		pattern: {value: emailPattern, message: 'email format is incorrect'},
		minLength: {value: 5, message: 'email must be more than 5 charachter'},
		validate: (current: any) => current.includes('@'),
	};
	const passwordRegister = {
		required: {value: true, message: 'password could not be empty'},
		minLength: {value: 4, message: 'password should be greater than 4'},
	};
	const nameRegister = {
		required: {value: true, message: 'name could not be empty'},
	};
	const clearEmailErrors = () => clearErrors('email');
	const clearPasswordErrors = () => clearErrors('password');
	const clearNameErrors = () => clearErrors('password');
	return (
		<div className='container flex flex-col mx-auto h-full items-center justify-center'>
			<div className='w-full max-w-screen-sm flex flex-col items-center py-10 px-5 text-center '>
				<div className='flex flex-col gap-y-2 mx-auto w-full justify-center items-center '>
					{/* {state?.message !== undefined ? <span className='bg-green-600 span text-white'>{state?.message}</span> : null}
				{state?.error !== undefined ? <ErrorBtn message={state?.error} /> : null} */}
					{errors.email?.type === 'validate' && <ErrorBtn message={'email must include @'} />}
					{errors?.email?.message && <ErrorBtn message={errors?.email?.message} />}
					{errors?.password?.message && <ErrorBtn message={errors?.password?.message} />}
					{errors?.name?.message && <ErrorBtn message={errors?.name?.message} />}
				</div>
				<div className='flex h-10 relative'></div>
				<h3 className={`font-bold text-lg  text-left w-full pl-10 `}>Welcome</h3>
				{/* <span className={`  text-xs md:text-base text-left w-full pl-10`}>Sign in with your email address and password.</span> */}
				<div className='w-[400px]'>
					<form className='flex flex-col w-full mt-5 px-10 ' onSubmit={handleSubmit(onSubmit)}>
						{variant === 'signup' && (
							<>
								<Input
									id='1'
									placeholder='name'
									name={'name'}
									register={register}
									registerName={nameRegister}
									errors={errors}
									onKeyDown={clearNameErrors}
									disabled={isLoading}
									type='text'
								/>
							</>
						)}
						<Input
							id='2'
							placeholder='email'
							name={'email'}
							register={register}
							registerName={emailRegister}
							errors={errors}
							onKeyDown={clearEmailErrors}
							disabled={isLoading}
							type='text'
						/>
						<Input
							id='3'
							placeholder='password'
							name={'password'}
							register={register}
							registerName={passwordRegister}
							errors={errors}
							onKeyDown={clearPasswordErrors}
							disabled={isLoading}
							type='password'
						/>

						<div className='mt-5'>
							<SubmitBtn type='submit' disabled={isLoading} fullWidth>
								{variant === 'login' && !isLoading && 'Log In'}
								{variant === 'signup' && !isLoading && 'Register'}
								{isLoading && (
									<div className='flex flex-row  w-full  justify-between'>
										<div className='flex flex-row mx-auto gap-x-3'>
											<span className='text-white '>Loading</span>
											<div>
												<ArrowPathIcon className=' animate-spin  w-5 h-5 absolute  text-green-200' />
											</div>
										</div>
									</div>
								)}
							</SubmitBtn>
						</div>
					</form>
					<div className='mt-6'>
						<div className='relative'>
							<div className=' absolute inset-0 flex items-center'>
								<div className='w-full border-t border-gray-300' />
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='bg-white px-2 text-gray-500'>Or {variant === 'login' ? 'continue with' : 'Sign Up'} with</span>
							</div>
						</div>

						<div className='mt-6 flex gap-2'>
							<SocialBtn icon={BsGithub} onClick={() => socialAction('github')} text='github' />
							<SocialBtn icon={BsGoogle} onClick={() => socialAction('google')} text='google' />
						</div>
					</div>
				</div>
				<div className='mt-8'>
					<span className=' font-medium'>{variant === 'login' ? 'New User?' : 'Have an account?'}</span>
					<button className='pl-2 text-secondary-500 font-medium hover:underline' onClick={toggleVariant}>
						{variant === 'login' ? 'Create an account ' : 'Log In'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
