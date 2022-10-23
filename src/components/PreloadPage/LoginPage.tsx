import React, { useCallback } from "react";
import { Box, Button, Flex, Image, Input } from '@chakra-ui/react'
import { Form, useZodForm } from "@/utils/form";
import { object, string } from "zod";

const newLoginSchema = object({
    name: string().min(1),
    password: string().min(1)
})

const LoginPage = () => {
    const form = useZodForm({ schema: newLoginSchema})

    const LoginInCallback = useCallback(()=>{

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