'use client'

interface Props {
  show: boolean
  onClick?: () => void
}

export default function BlurOverlay({
  show,
  onClick
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`
        fixed inset-0 z-40
        backdrop-blur-sm
        bg-black/20
        transition-all duration-300
        ${
          show
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
      `}
    />
  )
}
