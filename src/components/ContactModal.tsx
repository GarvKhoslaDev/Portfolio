import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Copy, Check, Send, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Network Analyst Inquiry',
    message: ''
  });

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      // Allow user to see confirmation
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 font-mono-code">
      <div className="relative w-full max-w-xl bg-[#0f1012] text-white rounded-2xl border border-neutral-700 p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-5">
          <div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
              COMMUNICATION CHANNEL
            </div>
            <h2 className="font-display font-black text-2xl text-white tracking-tight uppercase mt-0.5">
              CONTACT GARV KHOSLA
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close contact modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
          <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-neutral-400" />
              <div>
                <div className="text-[9px] text-neutral-500 uppercase">DIRECT EMAIL</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white hover:underline truncate block max-w-[150px] font-sans"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="p-1.5 text-neutral-400 hover:text-white"
              title="Copy email"
            >
              {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-neutral-400" />
              <div>
                <div className="text-[9px] text-neutral-500 uppercase">TELEPHONE</div>
                <span className="text-white font-sans">{PERSONAL_INFO.phone}</span>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
              className="p-1.5 text-neutral-400 hover:text-white"
              title="Copy phone"
            >
              {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Transmission Form */}
        {formSent ? (
          <div className="py-8 bg-neutral-900/60 border border-emerald-500/40 rounded-xl text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              MESSAGE DISPATCHED
            </div>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto font-sans">
              Thank you for reaching out. Garv Khosla will respond to your inquiry at {formData.email || 'your email'} shortly.
            </p>
            <button
              onClick={() => { setFormSent(false); onClose(); }}
              className="mt-3 px-4 py-1.5 bg-neutral-800 text-xs uppercase font-semibold text-white rounded hover:bg-neutral-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">
                Your Name / Organization
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Jane Doe, Tech Lead"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 font-sans"
              />
            </div>

            <div>
              <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">
                Your Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 font-sans"
              />
            </div>

            <div>
              <label className="block text-[10px] text-neutral-400 uppercase tracking-wider mb-1">
                Message / Opportunity Overview
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Discussing Network Analyst or Systems Support opportunities in Vancouver..."
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 font-sans"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[10px] text-neutral-500 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Vancouver, British Columbia
              </span>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-neutral-200 transition-colors shadow"
              >
                <Send className="w-3.5 h-3.5" />
                Transmit Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
