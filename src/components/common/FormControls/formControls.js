import React from 'react';
import classes from './formControls.module.css';

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return <div className={`${classes.formControls} ${hasError ?classes.error : "" }`}>
        <textarea {...input} {...props}></textarea>
{hasError && <span>{meta.error}</span> }
    </div>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}