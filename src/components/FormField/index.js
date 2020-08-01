import React from 'react';

export default function FormField({ value, onChange, type, name, label }) {
    return (
        <div>
            <label>
                {label}
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}