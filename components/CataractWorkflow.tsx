import React from 'react';
import { cataractWorkflow } from '@/data';
import { T } from '../theme';

interface WorkflowStepProps {
  item: typeof cataractWorkflow[0];
  idx: number;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ item, idx }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="flex flex-col items-center text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Step Circle */}
      <div 
        className="w-18 h-18 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all"
        style={{
          backgroundColor: T.cream,
          border: isHovered ? `1px solid ${T.accent}` : T.border.light,
          boxShadow: isHovered ? T.shadows.md : T.shadows.sm,
          transform: isHovered ? "translateY(-2px)" : "translateY(0)",
          transitionDuration: T.transitions.duration,
          transitionTimingFunction: T.transitions.easing,
        }}
      >
        {/* Step Number Badge */}
        <div 
          className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold border"
          style={{
            backgroundColor: "rgba(140, 107, 62, 0.1)",
            borderColor: "rgba(140, 107, 62, 0.2)",
            color: T.accent,
          }}
        >
          {item.step}
        </div>
        
        {/* Icon mapping */}
        {idx === 0 && (
          <svg className="w-7 h-7" style={{ color: T.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <circle cx="12" cy="13" r="3" strokeWidth="1.5" />
          </svg>
        )}
        {idx === 1 && (
          <svg className="w-7 h-7" style={{ color: T.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
        )}
        {idx === 2 && (
          <svg className="w-7 h-7" style={{ color: T.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .594-.481 1.08-1.08 1.08H7.125m.002 11.524H8.67c.599 0 1.08.486 1.08 1.08v1.244m3-16.196v1.244c0 .594.481 1.08 1.08 1.08h1.545m-.003 11.524h-1.545c-.599 0-1.08.486-1.08 1.08v1.244M3.75 7.5h6.75M3.75 12h6.75m-6.75 4.5h6.75m7.5-9h6.75M16.5 12h6.75m-6.75 4.5h6.75M12 3v18" />
          </svg>
        )}
        {idx === 3 && (
          <svg className="w-7 h-7" style={{ color: T.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25C7.5 18.996 6.996 19.5 6.375 19.5h-2.25A1.125 1.125 0 013 18.375v-5.25zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-9.75zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
        )}
        {idx === 4 && (
          <svg className="w-7 h-7" style={{ color: T.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        )}
      </div>

      {/* Text */}
      <h4 
        className="text-base font-bold mb-2 px-4 transition-colors duration-300"
        style={{ color: isHovered ? T.accent : T.charcoal }}
      >
        {item.title}
      </h4>
      <p className="text-xs leading-relaxed max-w-[200px]" style={{ color: T.muted }}>
        {item.description}
      </p>
    </div>
  );
};

const CataractWorkflow: React.FC = () => {
  return (
    <div 
      className="w-full mt-32 pt-24"
      style={{ borderTop: T.border.light }}
    >
      {/* Workflow Header */}
      <div className="text-center mb-16">
        <span 
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 inline-block"
          style={{ color: T.accent }}
        >
          Diagnostic Pipeline
        </span>
        <h3 className="font-serif text-3xl md:text-5xl font-bold mb-4" style={{ color: T.charcoal }}>
          Image-to-Report Workflow
        </h3>
        <p className="text-sm max-w-xl mx-auto" style={{ color: T.muted }}>
          A seamless, secure, and instant computer vision processing cycle from the point of capture to the clinical report.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div 
          className="absolute top-[38px] left-[10%] right-[10%] h-px hidden lg:block z-0 pointer-events-none" 
          style={{
            background: `linear-gradient(to right, rgba(140, 107, 62, 0.05), rgba(140, 107, 62, 0.3), rgba(140, 107, 62, 0.05))`
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
          {cataractWorkflow.map((item, idx) => (
            <WorkflowStep 
              key={item.step} 
              item={item} 
              idx={idx} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CataractWorkflow;
