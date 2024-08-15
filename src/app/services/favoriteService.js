const API_URL = '/api/favorite';

export const toggleFavorite = async (productId, isFavorited, token) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // ส่ง token ไปด้วย
        },
        body: JSON.stringify({ productId, isFavorited, token }),
    });

    if (!response.ok) {
        throw new Error('Failed to update favorite status');
    }
    return await response.json();
};
