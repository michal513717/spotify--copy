import React, { useCallback } from "react";
import { Box, Button, Flex, Image, Input } from '@chakra-ui/react'
import { Form, useZodForm } from "@/utils/form";
import { object, string } from "zod";
import { electronActions } from '@/actions';

const newLoginSchema = object({
    name: string().min(1),
    password: string().min(1)
})

interface INewLoginUserSchema {
    name: string;
    password: string;
    repeatPassword: string;
}

type LoginCallbackType = (args: INewLoginUserSchema) => void

const LoginPage:React.FC = () => {
    const form = useZodForm({ schema: newLoginSchema})

    const LoginInCallback = useCallback<LoginCallbackType>(async ( newLoginSchemaData )=>{

        const { name, password } = newLoginSchemaData;
        const loginData = { name, password };
        console.log(await electronActions.login(loginData))

    },[])

    return(
        <Flex
            w='100vw'
            h='100hw'
        >
            <Flex>
                <Image/>
                <Form form={form} onSubmit={LoginInCallback}>
                    <Input {...form.register('name')}/>
                    <Input {...form.register('password')}/>
                    <Button type='submit'> Log in!</Button>
                </Form>
                <Button> Register! </Button>
            </Flex>
        </Flex>
    )
}

export default LoginPage;