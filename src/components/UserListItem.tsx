import { View, Text, Pressable } from 'react-native'
import { User } from '../context/auth'
import { useChatContext } from 'stream-chat-expo'


const UserListItem = ({user}: {user: User }) => {
    const {client} = useChatContext();

    const startChannel = () => {
        const channel = client.channel('messaging', )
    }

  return (
    <Pressable onPress={startChannel} style={{ backgroundColor: 'white', margin: 5, marginVertical: 3, padding: 15, borderRadius: 5}}>
      <Text>{user.name}</Text>
    </Pressable>
  )
}

export default UserListItem