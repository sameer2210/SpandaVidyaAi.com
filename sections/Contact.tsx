
import React from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-[8vw] bg-brand-bg">
      <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
              Connect with <br />SpandaVidya
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              We are inviting researchers, medical clinicians, Ayurvedic experts, and mission-aligned investors to join our research hub.
            </p>
            <Button href="mailto:contact@naadiraksha.ai" className="w-full md:w-auto">
              Send an Inquiry
            </Button>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 p-4 rounded-2xl bg-brand-bg hover:bg-brand-accent/5 transition-all">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-accent shadow-sm" aria-hidden="true">
                ✉️
              </div>
              <div>
                <p className="font-bold">Official Email</p>
                <p className="text-brand-muted text-sm font-medium">Dilpar99@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-2xl bg-brand-bg hover:bg-brand-accent/5 transition-all">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-accent shadow-sm" aria-hidden="true">
                📍
              </div>
              <div>
                <p className="font-bold">Headquarters</p>
                <p className="text-brand-muted text-sm font-medium">Advanced Health-Tech Research Hub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
