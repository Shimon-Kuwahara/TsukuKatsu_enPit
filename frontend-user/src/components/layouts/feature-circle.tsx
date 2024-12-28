import { LucideIcon } from 'lucide-react'

interface FeatureCircleProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCircle({ icon: Icon, title, description, className = '' }: FeatureCircleProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4">
        <div className="absolute inset-0 rounded-full border-8 border-white bg-transparent"></div>
        <div className="absolute inset-4 rounded-full bg-white flex flex-col items-center justify-center p-4">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-2" />
          <h3 className="text-xs sm:text-sm font-bold">{title}</h3>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  )
}
