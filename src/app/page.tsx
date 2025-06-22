import { BusinessCard } from '@/components/BusinessCard';

export default function Home() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: `
          linear-gradient(135deg,rgb(190, 224, 238) 0%,rgb(121, 203, 238) 25%,rgb(28, 130, 255) 75%,rgb(193, 186, 247) 100%),
          radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(240, 171, 252, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.08) 0%, transparent 60%)
        `,
        backgroundAttachment: 'fixed'
      }}
    >
      <BusinessCard />
    </main>
  );
}
