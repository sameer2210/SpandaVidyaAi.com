export interface PolicySection {
  title: string;
  items: string[];
}

export const privacyPolicyContent: PolicySection[] = [
  {
    title: "1. Introduction",
    items: [
      "Welcome to SpandaVidya. We are committed to protecting the privacy and security of your personal and health-related data. This Privacy Policy details how we collect, store, and process your information when you use our website, digital platform, and the AI Cataract Detection application.",
      "By using the application, you consent to the collection, processing, and storage of your data as described in this policy. We ensure compliance with the Google Play Developer Policies (including Health App and Data Safety requirements) and international healthcare privacy guidelines."
    ]
  },
  {
    title: "2. Information We Collect",
    items: [
      "Account Data: To authenticate your account securely, we support Google Sign-In and email-based One-Time Password (OTP) verification. We collect your email address and profile name associated with these credentials.",
      "Anterior Segment Eye Images: The AI Cataract Detection application requires you to capture or upload high-fidelity anterior segment eye images. These images are processed exclusively for screening and machine learning prediction purposes.",
      "AI Consultation & Chat Records: We collect conversational transcript text and questions from your diagnostic interactions with our Ayurvedic AI assistant for telemetry, audit, and quality improvement.",
      "Telemetry & Device Info: We collect standard technical logs, including IP addresses, browser agents, operating system configurations, and timestamps to ensure application stability and threat prevention."
    ]
  },
  {
    title: "3. How We Process and Store Your Data",
    items: [
      "Secure Image Uploads: All eye images uploaded through the client application are transmitted securely via HTTPS and stored in encrypted Amazon Web Services (AWS) S3 buckets. These buckets are private and restrict access using short-lived pre-signed URLs.",
      "Relational Metadata: User profiles, authentication state, and diagnostic logs are stored securely in a PostgreSQL relational database.",
      "HuggingFace Inference: Machine learning segmentation and initial computer vision classification are run on private, secure HuggingFace inference API instances.",
      "Generative AI Reasoner: Ayurvedic context alignment and consultation reasoning utilize the Google Gemini API. Only anonymized, text-only prompts are transmitted to Gemini; your uploaded eye images are never shared with Gemini or used to train third-party public models."
    ]
  },
  {
    title: "4. Data Retention, Rights, and Account Deletion",
    items: [
      "Retention Policy: We retain user profiles, chat records, and uploaded eye images only as long as necessary to support the clinical research hub or active account status.",
      "Account Deletion Right: In strict compliance with Google Play requirements, you have the absolute right to delete your account at any time. When you trigger account deletion, all personal data, email records, conversational logs, and uploaded eye images are permanently purged from our AWS S3 buckets and PostgreSQL databases within 72 hours.",
      "User Control: To request deletion, you can navigate to the user profile settings within the app or contact our support team at Dilpar99@gmail.com."
    ]
  },
  {
    title: "5. Cookies & Tracking",
    items: [
      "We utilize essential session cookies on our landing page to maintain your authentication state and preferences. These cookies do not track your browsing activities across third-party websites or collect personal health details."
    ]
  },
  {
    title: "6. Medical Disclaimer & Compliance",
    items: [
      "IMPORTANT NOTICE: SpandaVidya is an automated health screening, educational, and research assistance platform. It does not provide medical diagnoses, clinical treatments, or professional medical advice.",
      "The AI-powered cataract prediction model is a screening utility trained on general machine learning sets and must not be used as a standalone diagnostic tool. Users are strictly advised to consult a qualified ophthalmologist or healthcare professional for eye examinations and medical assessments."
    ]
  },
  {
    title: "7. Contact Information",
    items: [
      "For privacy inquiries, data access requests, or help with account deletion, please contact our data Protection Office:",
      "Email: spandavidyaai@gmail.com / Dilpar99@gmail.com",
      "Address: SpandaVidya Research Initiative, Advanced Health-Tech Research Hub, IIT Kanpur, India"
    ]
  }
];

export const securityContent: PolicySection[] = [
  {
    title: "1. Data in Transit (HTTPS)",
    items: [
      "All network traffic between the SpandaVidya client interface and our servers is encrypted using Transport Layer Security (TLS 1.3 / HTTPS). This prevents interception or modification of eye images and chat transcripts."
    ]
  },
  {
    title: "2. Session Controls & Authentication",
    items: [
      "User authentication is governed by JSON Web Tokens (JWT) issued upon successful Google Sign-In or Email OTP check. JWTs are stored in secure browser cookies or session storage and verified on every API request."
    ]
  },
  {
    title: "3. Backend Image & Request Validation",
    items: [
      "Our servers perform strict validation on all incoming uploads. We check file types, file size limits, MIME structures, and image bounds. This prevents malicious file uploads or buffer injection attempts."
    ]
  },
  {
    title: "4. Secure Cloud Access & Rate Limiting",
    items: [
      "AWS S3 resources have zero public read permissions. Access is only authorized through expiring pre-signed URLs generated by our authenticated backend API.",
      "We enforce strict server-side rate limiting on all endpoints to prevent Denial of Service (DoS) attacks and abuse of AI inference channels."
    ]
  },
  {
    title: "5. Server-Side API Architecture",
    items: [
      "All requests to Google Gemini and HuggingFace API services are handled strictly server-to-server. Client bundles contain no embedded API keys or credentials, shielding our core AI architecture from external inspection."
    ]
  },
  {
    title: "6. User Security Recommendations",
    items: [
      "We recommend users access our services on secure networks (avoiding public Wi-Fi for health uploads), log out when using public terminals, and maintain device-level encryption."
    ]
  }
];
