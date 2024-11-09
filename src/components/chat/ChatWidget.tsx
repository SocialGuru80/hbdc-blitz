import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

type ChatStep = 'agent-type' | 'ai-agents' | 'department' | 'user-info' | 'chat';

interface UserInfo {
  name: string;
  email: string;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>('agent-type');
  const [agentType, setAgentType] = useState<'ai' | 'human' | ''>('');
  const [selectedAgent, setSelectedAgent] = useState('');
  const [department, setDepartment] = useState('');
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '' });
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'agent' }>>([]);

  const agentTypes = [
    { value: 'ai', label: 'AI Assistant' },
    { value: 'human', label: 'Human Support' }
  ];

  const aiAgents = [
    { value: 'ptah', label: 'Ptah - Innovation Guide' },
    { value: 'seshat', label: 'Seshat - Planning Expert' },
    { value: 'thoth', label: 'Thoth - Knowledge Advisor' }
  ];

  const departments = [
    { value: 'investors', label: 'Investor Relations' },
    { value: 'pr', label: 'Public Relations' },
    { value: 'sales', label: 'Sales' },
    { value: 'support', label: 'Technical Support' }
  ];

  const handleAgentTypeSelect = (type: string) => {
    setAgentType(type as 'ai' | 'human');
    setStep(type === 'ai' ? 'ai-agents' : 'department');
  };

  const handleAiAgentSelect = (agent: string) => {
    setSelectedAgent(agent);
    setStep('department');
  };

  const handleDepartmentSelect = (dept: string) => {
    setDepartment(dept);
    setStep('user-info');
  };

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email) {
      setStep('chat');
      setMessages([
        {
          text: `Hello ${userInfo.name}! How can I help you today?`,
          sender: 'agent'
        }
      ]);
    }
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages([...messages, { text: message, sender: 'user' }]);
    setMessage('');

    // Simulate agent response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'Thank you for your message. How else can I assist you?',
        sender: 'agent'
      }]);
    }, 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 'agent-type':
        return (
          <div className="space-y-4">
            <h4 className="font-medium">Choose Support Type</h4>
            <Select
              options={agentTypes}
              value={agentType}
              onChange={(e) => handleAgentTypeSelect(e.target.value)}
            />
          </div>
        );

      case 'ai-agents':
        return (
          <div className="space-y-4">
            <h4 className="font-medium">Select AI Assistant</h4>
            <Select
              options={aiAgents}
              value={selectedAgent}
              onChange={(e) => handleAiAgentSelect(e.target.value)}
            />
          </div>
        );

      case 'department':
        return (
          <div className="space-y-4">
            <h4 className="font-medium">Select Department</h4>
            <Select
              options={departments}
              value={department}
              onChange={(e) => handleDepartmentSelect(e.target.value)}
            />
          </div>
        );

      case 'user-info':
        return (
          <form onSubmit={handleUserInfoSubmit} className="space-y-4">
            <Input
              label="Name"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              required
            />
            <Input
              label="Email"
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              required
            />
            <Button type="submit" variant="primary" className="w-full">
              Start Chat
            </Button>
          </form>
        );

      case 'chat':
        return (
          <div className="space-y-4">
            <div className="h-80 border border-surface rounded-lg p-4 space-y-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-secondary/10 ml-auto'
                      : 'bg-surface mr-auto'
                  } max-w-[80%]`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleMessageSubmit} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" variant="primary" className="!py-2">
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        );
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 !p-4 !rounded-full shadow-lg"
          variant="secondary"
        >
          <MessageSquare className="w-6 h-6 text-primary" />
        </Button>
      )}
      
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-light rounded-xl shadow-2xl border border-surface overflow-hidden z-50">
          <div className="flex items-center justify-between p-4 bg-white border-b">
            <h3 className="font-semibold text-primary">Chat Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4">
            {renderStep()}
          </div>
        </div>
      )}
    </>
  );
};