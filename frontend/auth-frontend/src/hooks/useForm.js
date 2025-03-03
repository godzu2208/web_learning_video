// hooks/useForm.js
import { useState, useCallback } from 'react';
import { validate } from '@/utils/validation';

export const useForm = (initialValues, validationSchema) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    }, [errors]);

    const handleSubmit = useCallback(async (onSubmit) => {
        setIsSubmitting(true);
        try {
            const validationErrors = validate(values, validationSchema);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }
            await onSubmit(values);
        } finally {
            setIsSubmitting(false);
        }
    }, [values, validationSchema]);

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    };
};
