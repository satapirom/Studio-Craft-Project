export const registerUser = async (userData) => {
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await response.json();

        if (response.ok) {
            return { success: true, message: 'Registration successful! Redirecting to login...' };
        } else {
            if (result.error === 'Email already exists') {
                return { success: false, message: 'Email already exists' };
            } else {
                return { success: false, message: result.error || 'Registration error' };
            }
        }
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, message: 'An error occurred. Please try again.' };
    }
};



