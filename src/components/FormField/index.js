import React from 'react';
import styled from 'styled-components';
import '../../../src/index.css';

export default function FormField({ value, onChange, type, name, label }) {

    
    const isTextarea = type === 'textarea';
    const Tag = isTextarea ? 'textarea' : 'input';
    const Label = styled.label``;
    Label.Text = styled.span`
        color: #E5E5E5;
        height: 57px;
        /* position: absolute;  */
        top: 0;
        left: 16px;
        display: flex;
        align-items: center;
        transform-origin: 0% 0%;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        
        transition: .1s ease-in-out;
    `;
    const Input = styled.input`
        background: #53585D;
        color: #F5F5F5;
        display: block;
        width: 100%;
        height: 57px;
        font-size: 18px;
        
        outline: 0;
        border: 0;
        border-top: 4px solid transparent;
        border-bottom: 4px solid #53585D;
        
        padding: 16px 16px;
        margin-bottom: 45px;
        
        resize: none;
        border-radius: 4px;
        transition: border-color .3s;
        
        &:focus {
            border-bottom-color: var(--primary);
        }
`;
    const FormFieldWrapper = styled.div``;

    return (
        <FormFieldWrapper>
            <Label>
            <Label.Text>
                    {label}
            </Label.Text>
                <Input
                    as={Tag} // se comporta como
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
               
            </Label>
        </FormFieldWrapper>
    );
}