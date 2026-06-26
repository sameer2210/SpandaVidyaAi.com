export interface CataractHeroData {
  readonly badge: string;
  readonly title: string;
  readonly description: string;
  readonly ctaDownloadText: string;
  readonly ctaDownloadHref: string;
  readonly ctaLearnMoreText: string;
  readonly ctaLearnMoreHref: string;
}

export interface CataractCapability {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface CataractWorkflowStep {
  readonly step: number;
  readonly title: string;
  readonly description: string;
}


export interface UpcomingFeature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly status: string;
}

export const cataractHero = {
  badge: "AI Cataract Detection",
  title: "AI Cataract Detection\nPowered by SpandaVidya AI",
  description: "Upload eye images through the SpandaVidya AI mobile application to receive AI-assisted cataract analysis. Powered by computer vision and deep learning, the system provides instant, secure, and reliable clinical assessments.",
  ctaDownloadText: "Download App",
  ctaDownloadHref: "https://drive.google.com/drive/folders/1bD0n2DUudqTkjEFt3JOjVrHUdHw7Y-Ah?usp=sharing",
  ctaLearnMoreText: "Learn More",
  ctaLearnMoreHref: "https://github.com/sameer2210/SpandaVidyaAi-App"
} as const satisfies CataractHeroData;

export const cataractCapabilities = [
  {
    id: "image-analysis",
    title: "AI Image Analysis",
    description: "High-precision image processing segments the anterior eye structure to identify lens clouding."
  },
  {
    id: "efficientnet-b3",
    title: "EfficientNet-B3 Model",
    description: "Uses a state-of-the-art convolutional neural network optimized for clinical diagnostic accuracy."
  },
  {
    id: "ml-classification",
    title: "ML Classification",
    description: "Categorizes diagnostic scans into clinical cataract stages based on trained density parameters."
  },
  {
    id: "confidence-score",
    title: "Confidence Score",
    description: "Calculates an exact statistical probability score alongside every classification result."
  },
  {
    id: "cloud-processing",
    title: "Secure Cloud Processing",
    description: "Processes uploads using secure, end-to-end encrypted pipelines via NestJS and AWS S3."
  },
  {
    id: "instant-report",
    title: "Instant Report",
    description: "Generates structured clinical reports immediately for practitioners and patients."
  },
  {
    id: "mobile-first",
    title: "Mobile First",
    description: "Optimized user interface for easy camera capture on portable handheld devices."
  }
] as const satisfies readonly CataractCapability[];

export const cataractWorkflow = [
  {
    step: 1,
    title: "Capture Eye Image",
    description: "Align your eye with the guided mobile viewfinder grid to take a clear, high-resolution anterior image."
  },
  {
    step: 2,
    title: "Secure Upload",
    description: "Your image is automatically encrypted and sent to our secure AWS S3 cloud storage for analysis."
  },
  {
    step: 3,
    title: "AI Analysis",
    description: "EfficientNet-B3 neural networks process the image, segmenting the lens to measure opacity."
  },
  {
    step: 4,
    title: "Prediction",
    description: "Our machine learning model classifies the cataract stage and calculates a statistical confidence score."
  },
  {
    step: 5,
    title: "Clinical Report",
    description: "Receive a detailed, structured PDF report that can be shared with an eye care professional instantly."
  }
] as const satisfies readonly CataractWorkflowStep[];


export const upcomingFeatures = [
  {
    id: "ayurvedic-ai",
    title: "Ayurvedic AI Consultation",
    description: "Context-aware conversational intelligence trained on classical Ayurvedic texts for holistic wellness guidance.",
    status: "In Development"
  },
  {
    id: "pulse-diagnostics",
    title: "Pulse Diagnostics",
    description: "Multi-dimensional arterial pulse analysis using PPG sensors to map Vata, Pitta, and Kapha bio-energies.",
    status: "R&D Phase"
  },
  {
    id: "extended-suite",
    title: "Extended Diagnostic Suite",
    description: "Future computer vision integrations for dermatological and oral mucosal health screening.",
    status: "Planned"
  }
] as const satisfies readonly UpcomingFeature[];
