import { User } from '../context/auth';
import { API_URL } from '../config';
import { Alert } from 'react-native';

export const login = async (username: string): Promise<User> => {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username })
    });

    if (res.status !== 200) {
        Alert.alert('Error while signing in');
    } else {
        const user = await res.json();
        console.log(user);
    }

}