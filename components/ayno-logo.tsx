export default function AynoLogo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "w-6 h-6",
    default: "w-8 h-8", 
    large: "w-12 h-12"
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Eye-inspired logo */}
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
        <svg viewBox="0 0 32 32" className="w-full h-full">
          {/* Outer eye shape */}
          <ellipse 
            cx="16" 
            cy="16" 
            rx="15" 
            ry="10" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className="opacity-80"
          />
          {/* Inner iris */}
          <circle 
            cx="16" 
            cy="16" 
            r="6" 
            fill="currentColor"
            className="opacity-90"
          />
          {/* Pupil */}
          <circle 
            cx="16" 
            cy="16" 
            r="3" 
            fill="currentColor"
            className="opacity-95"
          />
          {/* Light reflection */}
          <circle 
            cx="18" 
            cy="14" 
            r="1.5" 
            fill="white"
            className="opacity-60"
          />
          

        </svg>
      </div>
      
      {/* Brand name */}
      <span className="font-bold text-xl tracking-tight text-primary">
        Ayno
      </span>
    </div>
  )
}