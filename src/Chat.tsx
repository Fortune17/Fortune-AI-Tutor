import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
    text: string;
    sender: 'user' | 'ai';
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    useEffect(() => {
        const loadVoices = () => {
            const availableVoices = speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        loadVoices();
        speechSynthesis.onvoiceschanged = loadVoices;

        return () => {
            speechSynthesis.onvoiceschanged = null;
        };
    }, []);

    const getFemaleVoice = (): SpeechSynthesisVoice | null => {
        const femaleVoice = voices.find(voice =>
            voice.name.toLowerCase().includes('female') ||
            voice.name.toLowerCase().includes('woman') ||
            voice.name.toLowerCase().includes('zira') ||
            voice.name.toLowerCase().includes('hazel') ||
            voice.name.toLowerCase().includes('samantha')
        );
        return femaleVoice || voices.find(voice => voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female')) || voices[0] || null;
    };

    const speakText = (text: string) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            const voice = getFemaleVoice();
            if (voice) {
                utterance.voice = voice;
            }
            utterance.rate = 1;
            utterance.pitch = 1;
            speechSynthesis.speak(utterance);
        }
    };

    // Speak AI response when a new AI message is added
    useEffect(() => {
        if (messages.length === 0) return;
        const lastMessage = messages[messages.length - 1];
        if (lastMessage.sender === 'ai') {
            speakText(lastMessage.text);
        }
    }, [messages]);

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage: Message = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setLoading(true);

        try {
            const systemPrompt = `You are an AI tutor. Whenever a student asks a question, explain the answer step by step in simple, clear language. Use analogies, real-life examples, or stories to make the concept easier to understand. If the topic is technical (like math, physics, or coding), break it down into smaller parts and explain each part as if you are teaching a beginner. Always confirm the student's understanding before moving on, and encourage them to try an example themselves. Now, answer this question: `;
            const fullPrompt = systemPrompt + input;
            const result = await model.generateContent(fullPrompt);
            const aiResponse: Message = { text: result.response.text(), sender: 'ai' };
            setMessages(prev => [...prev, aiResponse]);
        } catch (error) {
            console.error('Error generating AI response:', error);
            const errorMessage: Message = { text: 'Sorry, I encountered an error. Please try again.', sender: 'ai' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }

        setInput('');
    };

    return (
        <Paper elevation={0} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="h6" gutterBottom>AI Assistant</Typography>
            <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2, border: '1px solid #ccc', p: 1, borderRadius: 1 }}>
                <List>
                    {messages.map((msg, index) => (
                        <ListItem key={index} sx={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                            <Paper elevation={1} sx={{ p: 1, bgcolor: msg.sender === 'user' ? 'primary.light' : 'grey.200', maxWidth: '80%' }}>
                                <ListItemText primary={msg.text} />
                            </Paper>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <TextField fullWidth variant="outlined" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask a question..." />
                <Button variant="contained" onClick={handleSend} disabled={loading} sx={{ ml: 1 }}>{loading ? 'Sending...' : 'Send'}</Button>
            </Box>
        </Paper>
    );
};

export default Chat;