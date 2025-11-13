import styled from '@emotion/styled';

const ButtonPrimitive = styled.button<Record<string, any>>`
    color: #ffffff;
    padding: 10px 16px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #1DE782;
    border: none;

    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        background-color: #727272;
        cursor: not-allowed;
    }

    ${props => props.outline && `
        border: 1px solid #ffffff;
        background-color: transparent;
    `}

    ${props => props.danger && `
        background-color: #DC0000;
    `}
`;

export const Button = (props: React.ComponentPropsWithoutRef<'button'> & Record<string, any>) => {
    return (
        <ButtonPrimitive {...props}>
            {props.children}
        </ButtonPrimitive>
    )
}

Button.displayName = 'Button';