import React, { useState } from 'react';
import { Input, Button, Checkbox, Card, CardBody, Divider } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { RiEyeFill,RiEyeCloseFill,RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const mainHeight = useSelector((state) => state.app.mainHeight)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    return (

        <div className='flex justify-center items-center' style={{ height: mainHeight - 65 }}>
            <Card className='p-4 min-w-[400px]'>
                <CardBody className='flex flex-col gap-4'>
                    <h2 className='text-2xl'>Sign Up</h2>
                    <Input
                        isRequired
                        type="text"
                        label="Username"
                        variant="bordered"
                        placeholder='Enter you username'
                        className="max-w-xs"
                    />
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
                    <Input
                        isRequired
                        label="Confirm Password"
                        variant="bordered"
                        placeholder="Confirm your password"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleConfirmPasswordVisibility} aria-label="toggle password visibility">
                                {isConfirmPasswordVisible ? (
                                    <RiEyeCloseFill className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <RiEyeFill className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        className="max-w-xs"
                    />
                    <span className='text-sm max-w-xs'><Checkbox /> I agree with the <span className='text-blue-500'>Term</span> and <span className='text-blue-500'>Privacy Policy</span></span>
                    <Button  variant='bordered' color="primary" className="max-w-xs">Sign Up</Button>
                    <div className='relative max-w-xs'>
                        <Divider className="my-3" />
                        <Card className='absolute top-0 left-[40%] px-4 shadow-none'>OR</Card>
                    </div>
                    <Button startContent={<FcGoogle size={20}/>}   variant='bordered' color="primary" className="max-w-xs">Sign Up with Google</Button>
                    <Button startContent={<RiGithubFill size={20}/>}   variant='bordered' color="primary" className="max-w-xs">Sign Up with Github</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default SignUp;
