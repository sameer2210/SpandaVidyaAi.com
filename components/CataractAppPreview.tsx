import React from 'react';
import { T } from '../theme';

const CataractAppPreview: React.FC = () => {
  return (
    <div 
      className="w-full max-w-[340px] mx-auto rounded-[3.2rem] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden aspect-[9/19] flex flex-col justify-between select-none"
      style={{
        backgroundColor: T.charcoal,
        border: `9px solid ${T.charcoal}`,
      }}
    >
      
      {/* Top Speaker / Camera Notch */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 rounded-b-2xl z-40 flex items-center justify-center"
        style={{ backgroundColor: T.charcoal }}
      >
        <div className="w-10 h-1 bg-neutral-800 rounded-full mb-1" />
      </div>

      {/* Screen Frame */}
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-neutral-950 flex flex-col justify-between p-4 pt-8">
        
        {/* Device Status Bar */}
        <div className="flex justify-between items-center text-[10px] text-neutral-400 font-medium px-2 mb-2 z-10">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
            </svg>
            <div className="w-4 h-2 bg-neutral-400 rounded-sm" />
          </div>
        </div>

        {/* Viewfinder Area (Simulating camera) */}
        <div className="relative flex-grow rounded-2xl border border-neutral-800 bg-[#0e0d0c] overflow-hidden flex items-center justify-center">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          {/* Diagnostics scanner graphic */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full max-w-[170px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            style={{ color: `${T.accent}4d` }} // 30% opacity
          >
            <defs>
              <linearGradient id="laserGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={T.accent} stopOpacity="0" />
                <stop offset="50%" stopColor={T.accent} stopOpacity="0.5" />
                <stop offset="100%" stopColor={T.accent} stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Viewport Reticle Brackets */}
            <path d="M15,35 L15,15 L35,15" stroke={T.accent} strokeWidth="2.2" strokeLinecap="round" />
            <path d="M185,35 L185,15 L165,15" stroke={T.accent} strokeWidth="2.2" strokeLinecap="round" />
            <path d="M15,165 L15,185 L35,185" stroke={T.accent} strokeWidth="2.2" strokeLinecap="round" />
            <path d="M185,165 L185,185 L165,185" stroke={T.accent} strokeWidth="2.2" strokeLinecap="round" />

            {/* Stylized Eye Outlines */}
            <path
              d="M30,100 C50,55 150,55 170,100 Z"
              stroke={T.accent}
              strokeWidth="2"
              opacity="0.45"
            />
            {/* Iris */}
            <circle cx="100" cy="100" r="34" stroke={T.accent} strokeWidth="1.5" opacity="0.65" />
            {/* Pupil */}
            <circle cx="100" cy="100" r="16" fill="#1c1c1c" stroke={T.accent} strokeWidth="1.2" />

            {/* Feature Landmarks */}
            <g fill={T.accent} opacity="0.8">
              <circle cx="65" cy="80" r="2" />
              <circle cx="135" cy="80" r="2" />
              <circle cx="65" cy="120" r="2" />
              <circle cx="135" cy="120" r="2" />
              <circle cx="100" cy="65" r="2" />
              <circle cx="100" cy="135" r="2" />
              {/* Pulsing focal nodes */}
              <circle cx="100" cy="100" r="3" className="animate-ping" style={{ animationDuration: '2s' }} />
              <circle cx="100" cy="100" r="1.5" />
            </g>

            {/* Facial mesh outline */}
            <path
              d="M65,80 L100,65 L135,80 L135,120 L100,135 L65,120 Z"
              stroke={T.accent}
              strokeWidth="0.5"
              strokeDasharray="2 3"
              opacity="0.4"
            />

            {/* Scanning Laser Line */}
            <g>
              <line x1="20" y1="100" x2="180" y2="100" stroke={T.accent} strokeWidth="2.5" opacity="0.85">
                <animate
                  attributeName="y1"
                  values="40;160;40"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values="40;160;40"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </line>
              <rect x="20" y="40" width="160" height="120" fill="url(#laserGrad)" opacity="0.45" pointerEvents="none">
                <animate
                  attributeName="y"
                  values="-10;110;-10"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          </svg>

          {/* Diagnostic Overlay HUD */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[8px] font-mono text-neutral-400 bg-black/60 backdrop-blur-md border border-neutral-800 rounded-lg px-2.5 py-1.5 select-none">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: T.accent }} />
              <span>CLASSIFIER: B3</span>
            </div>
            <div>STATUS: SCANNING</div>
          </div>
        </div>

        {/* Diagnostic Results Card at bottom of screen */}
        <div className="mt-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex flex-col gap-3.5 z-10 shadow-lg">
          <div className="flex justify-between items-start">
            <div>
              <div 
                className="text-[9px] uppercase tracking-wider font-semibold mb-0.5"
                style={{ color: T.accent }}
              >
                Ocular Report
              </div>
              <h4 className="text-sm font-bold text-white font-serif">Anterior Assessment</h4>
            </div>
            <div 
              className="px-2 py-0.5 rounded-full text-[9px] font-semibold border"
              style={{
                backgroundColor: 'rgba(140, 107, 62, 0.15)',
                borderColor: 'rgba(140, 107, 62, 0.2)',
                color: T.accent,
              }}
            >
              98.4% CONF
            </div>
          </div>

          {/* Telemetry data */}
          <div className="grid grid-cols-2 gap-2 text-[9px] font-mono border-t border-b border-neutral-800 py-2.5">
            <div className="text-neutral-400">
              <div className="text-neutral-500 mb-0.5">SEGMENT</div>
              <span className="text-white">Anterior Lens</span>
            </div>
            <div className="text-neutral-400">
              <div className="text-neutral-500 mb-0.5">CLASSIFICATION</div>
              <span style={{ color: T.accent }}>Nuclear Cataract</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-white">
            <span className="text-neutral-400">Secure PDF Report</span>
            <div 
              className="flex items-center gap-1 font-semibold cursor-pointer"
              style={{ color: T.accent }}
            >
              <span>View Report</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CataractAppPreview;
