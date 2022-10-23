import { zodResolver } from "@hookform/resolvers/zod";
import React, { type ComponentProps, type ReactNode } from "react";
import {
    useForm,
    UseFormProps,
    FormProvider,
    UseFormReturn,
    FieldValues,
    SubmitHandler,
    useFormContext,
} from "react-hook-form";
import { ZodSchema, type TypeOf } from "zod";

interface UseZodFormProps<T extends ZodSchema> extends UseFormProps<TypeOf<T>> {
    schema: T;
}

export const useZodForm = <T extends ZodSchema>({
    schema,
    ...formConfig
}: UseZodFormProps<T>) => {
    return useForm({
        ...formConfig,
        resolver: zodResolver(schema),
    });
};

interface FieldErrorProps {
    name?: string;
}

export function FieldError({ name }: FieldErrorProps) {
    const {
        formState: { errors },
    } = useFormContext();

    if (name === undefined) return null;

    const error = errors[name];

    if (error === undefined) return null;

    return (
        <div className="text-sm text-red-500 font-bold">
            {error.message as ReactNode}
        </div>
    );
}

interface Props<T extends FieldValues>
    extends Omit<ComponentProps<"form">, "onSubmit"> {
    form: UseFormReturn<T>;
    onSubmit: SubmitHandler<T>;
}

export const Form = <T extends FieldValues>({
    form,
    onSubmit,
    children,
    ...props
}: Props<T>) => {
    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
                <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
            </form>
        </FormProvider>
    );
};