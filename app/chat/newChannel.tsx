import { View, Text, FlatList } from 'react-native'
import { User } from '../../src/context/auth'
import { useEffect, useState } from 'react'
import { getUsers } from '../../src/services/userService';
import UserListItem from '../../src/components/UserListItem';

const newChannel = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then(setUsers);
    }, [])

    console.log(users);
  return (
    <FlatList
        data={users}
        renderItem={({item}) => <UserListItem user={item} />}
    />
  )
}

export default newChannel