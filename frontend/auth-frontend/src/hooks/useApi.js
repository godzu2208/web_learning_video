// hooks/useApi.js
import { useState, useCallback } from 'react';
import axiosInstance from '@/lib/api/axios';

export const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(async (endpoint, options = {}) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axiosInstance(endpoint, options);
            return response;
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return { execute, loading, error };
};