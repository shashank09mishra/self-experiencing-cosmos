export default function CosmicSeparator({ variant = 'default' }) {
  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center gap-4 py-8">
        {['#00f5ff', '#7c3aed', '#00f5ff'].map((color, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: i === 1 ? 6 : 4,
              height: i === 1 ? 6 : 4,
              background: color,
              boxShadow: `0 0 8px ${color}`,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="cosmic-separator my-2 mx-8 md:mx-20" />
  )
}
