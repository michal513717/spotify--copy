import React, { useCallback } from "react";
import { Flex, Image, Input, Button } from "@chakra-ui/react";
import { Form, useZodForm } from "@/utils/form";
import { object, string } from "zod";
import { electronActions } from "@/actions";
import loginImage from './../../assets/login.svg';
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store";

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
    const form = useZodForm({schema: newRegisterUserSchema});
    const navigator = useNavigate();

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

    const handleRedirectToLoginPage = useCallback(()=>{

        navigator('/login');
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
            <Form className="formWrapper" form={form} onSubmit={RegisterCallback}>
                <Input display={"block"} {...form.register('name')} placeholder={'Nickname'}/>
                <Input display={"block"} type={'password'} {...form.register('password')} placeholder={'Password'}/>
                <Input display={"block"} type={'password'} {...form.register('repeatPassword')} placeholder={'Repeat password'}/>
                <Button type='submit'> Register</Button>
                <Button onClick={handleRedirectToLoginPage}> Go to login </Button>
            </Form>
        </Flex>

    </Flex>
    )
}

export default RegisterPage;