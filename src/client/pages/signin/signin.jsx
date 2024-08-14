import React, { useEffect, useState } from 'react';
import { Input, Button, Checkbox, Card, CardBody, Divider } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { RiEyeFill, RiEyeCloseFill, RiGithubFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../customer/userSlice';

const SignIn = () => {
    const mainHeight = useSelector((state) => state.app.mainHeight)

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [emailOrUsername, setEmailOrUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((res) => {
                setUsers([...res.data])
            })
    }, [])

    const handleSingIn = async () => {
        const isUser = users.filter((user) => (user.email === emailOrUsername) || (user.username === emailOrUsername))
        if (isUser.length) {
            const userMatched = isUser[0].password === password
            if (userMatched) {
                dispatch(setUser(isUser[0]))
                navigate("/products")
            }
        }
    }

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
                            placeholder='Enter you email or username'
                            className="max-w-xs"
                            defaultValue={emailOrUsername}
                            onChange={(e) => setEmailOrUsername(e.target.value)}
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

                        <span className='text-sm max-w-xs flex justify-between'><Checkbox className='text-sm'>Remember Me</Checkbox> <span className='text-blue-500'>Forgot Password?</span></span>
                        <Button variant='bordered' color="primary" className="max-w-xs" onClick={handleSingIn}>Sign Up</Button>
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
