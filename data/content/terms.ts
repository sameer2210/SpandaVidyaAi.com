export interface TermsSection {
  title: string;
  items: string[];
}

export const termsAndConditionsContent: TermsSection[] = [
  {
    title: "1. Acceptance of Terms",
    items: [
      "By accessing the website or downloading and using the SpandaVidya AI Cataract Detection application, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our software, APIs, or research platform."
    ]
  },
  {
    title: "2. Eligibility & Registration",
    items: [
      "You must be at least 18 years of age to register an account or upload eye images. If you are under 18, you may only use this application under the active supervision of a parent, guardian, or licensed health practitioner."
    ]
  },
  {
    title: "3. Scope of Services",
    items: [
      "AI Cataract Detection: The application provides a computer vision image-processing service to analyze anterior segment photograph uploads and output machine learning classification probabilities related to cataract indicators.",
      "AI Consultation Chatbot: The conversational agent offers general Ayurvedic health guidance and matches symptoms to historical Naadi Pariksha categories.",
      "Research Support: All services are provided as a screening aid and research support initiative. The application does not write medical prescriptions, diagnose medical conditions, or provide direct clinical care."
    ]
  },
  {
    title: "4. Medical Disclaimer & AI Limitations",
    items: [
      "NOT A SUBSTITUTE FOR MEDICAL CARE: The AI predictions, classifications, and text recommendations do not substitute for professional medical judgment, diagnosis, or clinical ophthalmic care.",
      "No Doctor-Patient Relationship: Your use of the SpandaVidya AI platform does not establish a doctor-patient relationship.",
      "Inaccuracy Risk: Machine learning algorithms are subject to margin of error and can return false positives, false negatives, or inaccurate classifications depending on photo lighting, quality, and focus. You assume full risk for relying on these screening classifications, and we urge you to consult an ophthalmologist for any visual health concern."
    ]
  },
  {
    title: "5. User Conduct & Acceptable Use",
    items: [
      "True Information: You must upload only genuine, well-lit photograph representations of eye anterior segments for analysis.",
      "Prohibited Activities: You agree not to upload malware, script injections, or bulk execute automated API requests to bypass frontend validations. Attempting to decompile or extract model weights from our backend endpoints is strictly prohibited.",
      "Responsible Sharing: Do not upload images of third parties without obtaining their explicit consent."
    ]
  },
  {
    title: "6. Intellectual Property Rights",
    items: [
      "The SpandaVidya AI branding, website design systems, source code, pre-trained custom computer vision models, API integrations, and original Ayurvedic logic databases are the exclusive intellectual property of the SpandaVidya Research Initiative.",
      "No license is granted to copy, distribute, or reverse-engineer our software without explicit written permission."
    ]
  },
  {
    title: "7. Third-Party API Services",
    items: [
      "We rely on third-party cloud infrastructure and API endpoints (such as AWS S3, Google Gemini, and HuggingFace) to host, secure, and run our AI models. We are not liable for transient downtime, transmission failures, or performance caps imposed by these external service providers."
    ]
  },
  {
    title: "8. Limitation of Liability",
    items: [
      "To the maximum extent permitted by applicable law, the SpandaVidya Research Initiative and its team members shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our AI predictions, chatbot consults, or reports."
    ]
  },
  {
    title: "9. Termination of Service",
    items: [
      "We reserve the right to suspend or terminate user accounts, revoke API access, or block IP addresses that violate these acceptable use guidelines or compromise system stability, without prior notice."
    ]
  },
  {
    title: "10. Governing Law & Jurisdiction",
    items: [
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts located in Kanpur, India."
    ]
  },
  {
    title: "11. Contact Details",
    items: [
      "If you have questions regarding these Terms & Conditions, please contact us at:",
      "Email: Dilpar99@gmail.com / spandavidyaai@gmail.com",
      "Address: IIT Kanpur, India"
    ]
  }
];
