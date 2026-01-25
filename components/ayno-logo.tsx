import Image from 'next/image';
import logo from '../public/logo.png';

export default function AynoLogo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "w-12 h-12",
    default: "w-16 h-16",
    large: "w-36 h-36"
  }

  return (
    <div className={`flex items-center justify-start ${className} py-4`}>
      <Image
        src={logo}
        alt="Ayno Logo"
        className={sizeClasses[size] + "object-contain"}
      />
    </div>
  )
}