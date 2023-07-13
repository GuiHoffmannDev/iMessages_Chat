import { User } from '../context/auth';
import { API_URL } from '../config';
import { Alert } from 'react-native';

export const login = async (username: string): Promise<User> => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username })
    });

    if (response.status !== 200) {
        Alert.alert('Error while signing in');
    }

    console.log(response)
}