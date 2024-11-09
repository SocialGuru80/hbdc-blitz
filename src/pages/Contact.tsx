import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16">
      <div className="relative py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-text/70">
              Get in touch with our team of experts to discuss your business needs.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <Select
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                options={[
                  { value: 'sales', label: 'Sales' },
                  { value: 'support', label: 'Technical Support' },
                  { value: 'consulting', label: 'Consulting' },
                  { value: 'other', label: 'Other' },
                ]}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  required
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-text/70">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-text/70">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 2:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const contactInfo = [
  {
    label: 'Email',
    value: 'contact@horusbdc.com',
    icon: <Mail className="w-6 h-6 text-secondary" />,
  },
  {
    label: 'Phone',
    value: '+1 (555) 123-4567',
    icon: <Phone className="w-6 h-6 text-secondary" />,
  },
  {
    label: 'Address',
    value: '123 Business Avenue, Tech District, NY 10001',
    icon: <MapPin className="w-6 h-6 text-secondary" />,
  },
];