// features/auth/components/LoginForm/LoginForm.jsx
import { useForm } from '@/hooks/useForm';
import { loginSchema } from '@/lib/validation/schemas';
import { useAuth } from '@/contexts/auth/useAuth';

export const LoginForm = () => {
    const { login } = useAuth();
    const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
        { email: '', password: '' },
        loginSchema
    );

    const onSubmit = async (formData) => {
        await login(formData);
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit);
        }}>
            <Input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
            />
            <Input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={errors.password}
            />
            <Button type="submit" loading={isSubmitting}>
                Login
            </Button>
        </form>
    );
};