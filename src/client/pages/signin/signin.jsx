import React, { useState } from 'react';
import { Input, Button, Checkbox, Card, CardBody, Divider } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { RiEyeFill, RiEyeCloseFill, RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    const mainHeight = useSelector((state) => state.app.mainHeight)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    return (

        <div className='flex justify-center items-center' style={{ height: mainHeight - 65 }}>
            <div className='flex flex-col gap-4'>
                <div className='text-center'>
                    <h1 className='text-2xl'>Welcome Back</h1>
                    <p>Log in to your account to continue</p>
                </div>
                <Card className='p-4 min-w-[400px]'>
                    <CardBody className='flex flex-col gap-4'>
                        <Input
                            isRequired
                            type="email"
                            label="Email Address"
                            variant="bordered"
                            placeholder='Enter you email'
                            className="max-w-xs"
                        />
                        <Input
                            isRequired
                            label="Password"
                            variant="bordered"
                            placeholder="Enter your password"
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={togglePasswordVisibility} aria-label="toggle password visibility">
                                    {isPasswordVisible ? (
                                        <RiEyeCloseFill className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                        <RiEyeFill className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                </button>
                            }
                            type={isPasswordVisible ? "text" : "password"}
                            className="max-w-xs"
                        />

                        <span className='text-sm max-w-xs flex justify-between'><Checkbox className='text-sm'>Remember Me</Checkbox> <span className='text-blue-500'>Forgot Password?</span></span>
                        <Button variant='bordered' color="primary" className="max-w-xs">Sign Up</Button>
                        <div className='relative max-w-xs'>
                            <Divider className="my-3" />
                            <Card className='absolute top-0 left-[40%] px-4 shadow-none'>OR</Card>
                        </div>
                        <Button startContent={<FcGoogle size={20} />} variant='bordered' color="primary" className="max-w-xs">Sign Up with Google</Button>
                        <Button startContent={<RiGithubFill size={20} />} variant='bordered' color="primary" className="max-w-xs">Sign Up with Github</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default SignIn;
