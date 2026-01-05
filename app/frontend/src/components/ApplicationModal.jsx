import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { X } from 'lucide-react';
import { toast } from 'sonner';

export const ApplicationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organizationType: 'individual',
    startupName: '',
    website: '',
    description: '',
    program: 'spring-2025',
    teamSize: '1',
    fundingStage: 'pre-seed',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage for now (mock)
    const existingApplications = JSON.parse(localStorage.getItem('applications') || '[]');
    existingApplications.push({ ...formData, submittedAt: new Date().toISOString() });
    localStorage.setItem('applications', JSON.stringify(existingApplications));
    
    toast.success('Application submitted! We\'ll review and get back to you within 5 business days.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      organizationType: 'individual',
      startupName: '',
      website: '',
      description: '',
      program: 'spring-2025',
      teamSize: '1',
      fundingStage: 'pre-seed',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Apply as Founder</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="organizationType">Applying as *</Label>
              <select
                id="organizationType"
                required
                value={formData.organizationType}
                onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="individual">Individual Founder</option>
                <option value="team">Team/Co-founders</option>
                <option value="student">Student</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="startupName">Startup Name</Label>
              <Input
                id="startupName"
                type="text"
                value={formData.startupName}
                onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                placeholder="Your Startup Name (if any)"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="website">Website/LinkedIn</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                placeholder="https://"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">What are you building? *</Label>
            <Textarea
              id="description"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your startup, the problem you're solving, and your progress so far..."
              className="mt-1 min-h-32"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="program">Program *</Label>
              <select
                id="program"
                required
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="spring-2025">Spring Cohort 2025</option>
                <option value="validation-workshop">Idea Validation Workshop</option>
                <option value="summer-camp">Summer Innovation Camp</option>
              </select>
            </div>

            <div>
              <Label htmlFor="teamSize">Team Size *</Label>
              <select
                id="teamSize"
                required
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="1">Solo Founder</option>
                <option value="2">2 Members</option>
                <option value="3-5">3-5 Members</option>
                <option value="6+">6+ Members</option>
              </select>
            </div>

            <div>
              <Label htmlFor="fundingStage">Funding Stage *</Label>
              <select
                id="fundingStage"
                required
                value={formData.fundingStage}
                onChange={(e) => setFormData({ ...formData, fundingStage: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="pre-seed">Pre-Seed/Bootstrapped</option>
                <option value="seed">Seed Funded</option>
                <option value="none">Not Yet Funded</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Submit Application
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};