import React, { useState, setIsLoading,isLoading,useEffect } from 'react';
import './chat.css';
import OpenAI from 'openai';
import Navbar from '../components/Navbar';
const openAi = new OpenAI({ apiKey:process.env.REACT_APP_API_KEY ,dangerouslyAllowBrowser: true });

const ChatBotLogic = () => {
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: 'bot' },]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const trimmedMessage = inputMessage.trim();

    if (trimmedMessage !== '') {
      // Add user's message to the chat
      setMessages([...messages, { text: trimmedMessage, sender: 'user' }]);
      setInputMessage('');
      setIsLoading(true);

      // Send the user's message to the chatbot and get the response
      const botResponse = await getBotResponse(trimmedMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: 'bot' },
      ]);
      setIsLoading(false);
    }
  };

  // Function to send user's message to the chatbot and get a response
  const getBotResponse = async (userMessage) => {
    try {
      const res = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }],
      });

      return res.choices[0].message.content;
    } catch (error) {
      console.error('Error communicating with the chatbot:', error);
      return 'An error occurred while processing your request.';
    }
  };
  const handleKeyPress = (e) => {
    // Check if the "Enter" key (key code 13) is pressed
    if (e.key === 13) {
      e.preventDefault(); // Prevent the default form submission behavior
      handleSendMessage(); // Call the message sending function
    }
  };

  useEffect(() => {
    // Attach the key press event listener to the input field
    document.addEventListener('keydown', handleKeyPress);
    
    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
    <Navbar/>
    
    <div className='container'>
    
    
    <div className='img'>
    
    
       
    </div>
    <div className="chatbot-container">
    
      <div className="chat-area">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        {isLoading && (
  <div className='message bot loading-message'>
    <span>MyBot is typing....</span>
  </div>
)}
      </div>
      <div className="user-input">
  <form onSubmit={handleSendMessage}>
    <input
      type="text"
      placeholder="Type your message..."
      value={inputMessage}
      onChange={handleInputChange}
    />
    <button type="submit">Send</button>
  </form>
</div>

    </div>
    <div className='botbody'>
      <h1 className='h1'>MyBot</h1>
      <p className='p'>Introducing FitBot - your personal AI assistant that can help you with all your fitness and day-to-day queries. With advanced machine learning algorithms, FotBot provides accurate and personalized solutions in real-time. Whether you need workout routines, healthy eating tips, or guidance on managing your daily schedule, FitBot has got you covered. Interact with FotBot through a simple and user-friendly interface, and customize your experience by setting your goals and preferences. FotBot is here to make your life easier, healthier, and more balanced.</p>
      <h3 className='h3'>
      Excuses don't burn calories.
      </h3>
    </div>
    </div>
    </div>
  );
};

export default ChatBotLogic;




