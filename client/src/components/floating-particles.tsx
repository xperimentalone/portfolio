export default function FloatingParticles() {
  const particles = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full animate-particle"
          style={{
            left: `${(i + 1) * 10}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
