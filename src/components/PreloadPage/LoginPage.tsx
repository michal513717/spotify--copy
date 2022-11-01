import React, { useCallback } from "react";
import { Box, Button, Flex, Image, Input } from '@chakra-ui/react'
import { Form, useZodForm } from "@/utils/form";
import { object, string } from "zod";
import { electronActions } from '@/actions';
import loginImage from './../../assets/login.svg';
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store";

const newLoginSchema = object({
    name: string().min(1),
    password: string().min(1)
})

interface INewLoginUserSchema {
    name: string;
    password: string;
}

type LoginCallbackType = (args: INewLoginUserSchema) => void

const LoginPage:React.FC = () => {
    const form = useZodForm({ schema: newLoginSchema});
    const { setLoginStatus } = useStore();
    const navigator = useNavigate();

    const LoginInCallback = useCallback<LoginCallbackType>(async ( newLoginSchemaData )=>{

        const { name, password } = newLoginSchemaData;
        const loginData = { name, password };
        const loginStatus = await electronActions.login(loginData);

        if(loginStatus === true){

            setLoginStatus(true);
            navigator('/');
        }
    },[setLoginStatus])

    const handleRedirectToRegisterPage = useCallback(()=>{

        navigator('/register')
    },[])

    return(
        <Flex
            w='100vw'
            h='100vh'
            justify={'center'}
            align={'center'}
        >
            <Flex
                w={'50%'}
                h={'70%'}
                flexDirection={'column'}
                justify={'center'}
                align={'center'}
                borderRadius={5}
                borderColor={"black"}
                boxShadow={"0px 0px 24px 0px rgba(66, 68, 90, 1)"}
            >
                <Image
                    src={loginImage}
                    w={'40%'}
                    h={'40%'}
                />
                <Form className="formWrapper" form={form} onSubmit={LoginInCallback}>
                    <Input display={'block'} placeholder={'Nickname'} {...form.register('name')}/>
                    <Input display={'block'} placeholder={'Password'} type={'password'} {...form.register('password')}/>
                    <Button type='submit'> Log in!</Button>
                    <Button onClick={handleRedirectToRegisterPage}> Go to register new account! </Button>
                </Form>
            </Flex>
        </Flex>
    )
}

export default LoginPage;