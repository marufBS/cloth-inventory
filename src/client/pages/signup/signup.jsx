import React, { useRef, useState } from 'react';
import { Input, Button, Checkbox, Card, CardBody, Divider } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { RiEyeFill, RiEyeCloseFill, RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

const SignUp = () => {
    const mainHeight = useSelector((state) => state.app.mainHeight)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    const [fullname, setFullname] = useState("")
    const [address, setAddress] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSignUpFormSubmit = (e) => {
        e.preventDefault()
        axios.post('/signup', {
            fullname, address, username, email, password
        })
            .then((res) => {
                console.log(res)
            })
    }

    return (

        <div className='flex justify-center items-center' style={{ height: mainHeight - 65 }}>
            <Card className='p-4 min-w-[400px]'>
                <CardBody className='flex flex-col gap-4'>
                    <h2 className='text-2xl'>Sign Up</h2>
                    <form onSubmit={handleSignUpFormSubmit}>
                        <div className='flex flex-col gap-2'>
                            <Input
                                isRequired
                                type="text"
                                label="Full Name"
                                variant="bordered"
                                placeholder='Enter your full name'
                                className="max-w-xs"
                                defaultValue={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />
                            <Input
                                isRequired
                                type="text"
                                label="Address"
                                variant="bordered"
                                placeholder='Enter your address'
                                className="max-w-xs"
                                defaultValue={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <Input
                                isRequired
                                type="text"
                                label="Username"
                                variant="bordered"
                                placeholder='Enter your username'
                                className="max-w-xs"
                                defaultValue={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Input
                                isRequired
                                type="email"
                                label="Email Address"
                                variant="bordered"
                                placeholder='Enter your email'
                                className="max-w-xs"
                                defaultValue={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                defaultValue={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />



                            <span className='text-sm max-w-xs'><Checkbox /> I agree with the <span className='text-blue-500'>Term</span> and <span className='text-blue-500'>Privacy Policy</span></span>
                            <Button type='submit' variant='bordered' color="primary" className="max-w-xs">Sign Up</Button>
                        </div>
                    </form>
                    <div className='relative max-w-xs'>
                        <Divider className="my-3" />
                        <Card className='absolute top-0 left-[40%] px-4 shadow-none'>OR</Card>
                    </div>
                    <Button startContent={<FcGoogle size={20} />} variant='bordered' color="primary" className="max-w-xs">Sign Up with Google</Button>
                    <Button startContent={<RiGithubFill size={20} />} variant='bordered' color="primary" className="max-w-xs">Sign Up with Github</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default SignUp;
