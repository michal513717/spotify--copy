import React, { useCallback } from "react";
import { Flex, Image, Input, Button } from "@chakra-ui/react";
import { Form, useZodForm } from "@/utils/form";
import { object, string } from "zod";
import { electronActions } from "@/actions";

const newRegisterUserSchema = object({
    name: string().min(1),
    password: string().min(1),
    repeatPassword: string().min(1),
})

interface INewRegisterUserSchema {
    name: string;
    password: string;
    repeatPassword: string;
}

type RegisterCallbackType = (args: INewRegisterUserSchema) => void

const RegisterPage:React.FC = () => {
    const form = useZodForm({schema: newRegisterUserSchema})

    const RegisterCallback = useCallback<RegisterCallbackType>( async (RegisterUserSchemaData)=>{

        const { name, password, repeatPassword } = RegisterUserSchemaData

        if(checkIsPasswordRepeatedCorretly(password, repeatPassword)){
            
            const registerData = {name,password};
            const isRegisterSuccesful =  await electronActions.register(registerData);
            
            if(isRegisterSuccesful){
                // redirect to app
            }
        }
    },[])

    const checkIsPasswordRepeatedCorretly = (str: string, str2:string) => {

        //should be used normalize for unicode 
        if(str === str2){
            return true;
        };
    };

    return(
        <Flex
        w='100vw'
        h='100vh'
        justify={'center'}
        align={'center'}
        
    >
        <Flex
        w='40%'
        borderRadius={5}
        borderColor={"black"}
        boxShadow={"0px 0px 24px 0px rgba(66, 68, 90, 1)"}
        >

            <Image/>
            <Form form={form} onSubmit={RegisterCallback}>
                <Input {...form.register('name')}/>
                <Input type={'password'} {...form.register('password')}/>
                <Input type={'password'} {...form.register('repeatPassword')}/>
                <Button type='submit'> Register</Button>
            <Button> Go to login </Button>
            </Form>
        </Flex>

    </Flex>
    )
}

export default RegisterPage;