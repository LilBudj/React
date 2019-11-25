import {Field} from "redux-form";
import React from 'react'

export const required = (value) => {
    if (value) return undefined;
    return "Text required"
};

export const maxLengthCreator = (length) => (value) => {
    if (value.length < length) return undefined;
    return `Max length is ${length} symbols`
};

export const createField = (placeholder, name, validators, component, props={}, text='') => (
    <div>
    <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/> {text}
    </div>
);