import { cn } from './utils'

export function StatusDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5" title={label}>
      <span className={cn('size-2 rounded-full', color)} aria-hidden />
      <span className="sr-only">{label}</span>
    </span>
  )
}
