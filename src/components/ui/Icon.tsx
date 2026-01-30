import { cn } from '../../lib/cn'

export type IconProps = {
  src: string
  alt?: string
  className?: string
}

export default function Icon({ src, alt = '', className }: IconProps) {
  return <img src={src} alt={alt} className={cn('h-6 w-6', className)} />
}

