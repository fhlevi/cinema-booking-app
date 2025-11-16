import * as FormPrimitive from '@radix-ui/react-form';
import React from 'react';
import { cn } from '@lib/cn';

const Form = FormPrimitive.Root;

const FormField = React.forwardRef<
    React.ElementRef<typeof FormPrimitive.Field>,
    React.ComponentPropsWithoutRef<typeof FormPrimitive.Field>
>(({ className, ...props }, ref) => {
    return (
        <FormPrimitive.Field
            ref={ref}
            className={cn('grid gap-2', className)}
            {...props}
        />
    );
});
FormField.displayName = 'FormField';

const FormLabel = React.forwardRef<
    React.ElementRef<typeof FormPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof FormPrimitive.Label>
>(({ className, ...props }, ref) => {
    return (
        <FormPrimitive.Label
            ref={ref}
            className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                className,
            )}
            {...props}
        />
    );
});
FormLabel.displayName = 'FormLabel';

const FormControl = React.forwardRef<
    React.ElementRef<typeof FormPrimitive.Control>,
    React.ComponentPropsWithoutRef<typeof FormPrimitive.Control>
>(({ ...props }, ref) => {
    return <FormPrimitive.Control ref={ref} {...props} />;
});
FormControl.displayName = 'FormControl';

const FormMessage = React.forwardRef<
    React.ElementRef<typeof FormPrimitive.Message>,
    React.ComponentPropsWithoutRef<typeof FormPrimitive.Message>
>(({ className, children, ...props }, ref) => {
    return (
        <FormPrimitive.Message
            ref={ref}
            className={cn('text-sm font-medium text-red-500', className)}
            {...props}
        >
            {children}
        </FormPrimitive.Message>
    );
});
FormMessage.displayName = 'FormMessage';

export { Form, FormField, FormLabel, FormControl, FormMessage };
