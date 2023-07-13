import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo';

const API_KEY = 'ghnhwe98euaa';
const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout() {

    useEffect(() => {
            //connect the user
            const connectUser = async () => {
                await client.connectUser(
                    {
                    id: 'gui',
                    name: 'Gui',
                    image: 'https://i.imgur.com/fR9Jz14.png'
                    }, 
                client.devToken('gui')
                );

                const channel = client.channel('livestream', 'public', {
                    name: 'Public',
                  });
                  await channel.create();
                };

            connectUser();

            return () => {
                client.disconnectUser();
            };
    }, []);

    return (
        <OverlayProvider>
            <Chat client={client} >
                <Stack>
                    <Stack.Screen name="index" options={{ title: 'Messages' }} />
                </Stack>
            </Chat>
        </OverlayProvider>
    );
}
