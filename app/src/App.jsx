import { useState } from 'react'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import './App.css'
import { MainContainer, ChatContainer,MessageList, Message, MessageInput, TypingIndicator} from '@chatscope/chat-ui-kit-react'

function App() {
  const [messages, setMessages] = useState({
    message:"Hello,I am Chatgpt!",
    sender:"Chatgpt",
  })
  const handleSend = async (message) => {
    const newMessage ={
      message,
      sender:"user",
      direction:"outgoing", 
    } 
  //update msgs state
  const newMessages = [...messages, newMessage] //add new msg to msgs
  setMessages(newMessages)
  //process msgs to chatgpt
  }
  return (
   
      <div className="App">
        <div style={{position: 'relative', height:'800px', width: '700px'}}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message, index) => (
                <Message key={index} sender={message.sender}>
                  {message.message}
                </Message>
              ))}

            </MessageList>
            <MessageInput placeholder="Type a message..." onSend={handleSend}/>
            <TypingIndicator content="ChatGPT is typing..." />
          </ChatContainer>
          </MainContainer>
        </div>
      </div>
  )
}

export default App
