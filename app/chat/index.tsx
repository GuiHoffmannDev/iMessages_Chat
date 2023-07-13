import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Channel as ChannelType } from 'stream-chat';
import { ChannelList, Channel, MessageList, MessageInput } from 'stream-chat-expo';

const ChatScreen = () => {
  const router = useRouter();
  return (
    <ChannelList onSelect={(channel) => router.push(`/chat/channel/${channel.id}`)} />
  );
};

export default ChatScreen