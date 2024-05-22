// src/components/ChatBot.js

import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css';

const ChatBot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        try {
            // const response = await axios.get("https://c3534c25-8d2d-48e8-a5b9-972ea7aa5a0a.mock.pstmn.io/chat", { question: input });
            // print the response to the console
            const response = { data: { answer: 'This is a dummy response' } };

            console.log(response.data);
            const botMessage = { sender: 'bot', text: response.data.answer };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error communicating with the backend', error);
        }

        setInput('');
    };

    return (
        <div className="chatbot-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBot;
