import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { Select } from './Select';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const agents = [
    { value: 'ptah', label: 'Ptah - Innovation Guide' },
    { value: 'seshat', label: 'Seshat - Planning Expert' },
    { value: 'thoth', label: 'Thoth - Knowledge Advisor' },
    { value: 'human', label: 'Human Support' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Handle message submission
    setMessage('');
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
        <div className="fixed bottom-6 right-6 w-96 bg-light rounded-xl shadow-2xl border border-surface overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-white border-b">
            <h3 className="font-semibold text-primary">Chat Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 space-y-4">
            <Select
              options={agents}
              label="Choose your advisor"
              defaultValue="ptah"
            />
            
            <div className="h-80 border border-surface rounded-lg p-4 space-y-4 overflow-y-auto">
              <div className="text-center text-sm text-gray-500">
                Choose an advisor to start your conversation
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex gap-2">
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
        </div>
      )}
    </>
  );
};