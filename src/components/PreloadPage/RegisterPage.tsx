import React, { useCallback } from "react";
import { Flex, Image, Input, Button } from "@chakra-ui/react";
import { Form, useZodForm } from "@/utils/form";
import { object, string } from "zod";
import { electronActions } from "@/actions";

const newRegisterUserSchema = object({
    name: string().min(1),
    password: string().min(1),
    repeatPassword: string().min(1),
    specialCode: string().min(1)
})

const RegisterPage = () => {
    const form = useZodForm({schema: newRegisterUserSchema})

    const RegisterCallback = useCallback((name:string, password:string)=>{

        const registerData = {name,password};
        electronActions.register(registerData);

    },[])

    return(
        <Flex
        w='100vw'
        h='100hw'
    >
        <Flex>
            <Image/>
            <Form form={form} onSubmit={RegisterCallback}>
                <Input {...form.register('name')}/>
                <Input {...form.register('password')}/>
                <Input {...form.register('repeatPassword')}/>
                <Button type='submit'> Log in!</Button>
            </Form>
            <Button> Register! </Button>
        </Flex>
    </Flex>
    )
}

export default RegisterPage;