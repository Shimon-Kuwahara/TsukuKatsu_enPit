interface HeroBadgeProps {
  color: 'purple' | 'mint'
  children: React.ReactNode
}

export function HeroBadge({ color, children }: HeroBadgeProps) {
  return (
    <div
      className={`
        inline-flex items-center justify-center px-4 py-2 rounded-full text-white font-medium
        ${color === 'purple' ? 'bg-main-col' : 'bg-sub-col'}
      `}
    >
      {children}
    </div>
  )
}

