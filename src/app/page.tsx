import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Transforme suas ideias"
        highlightedText="em realidade!"
        description="Domine o Premiere: edição precisa, timing perfeito e psicologia nos cortes. Aprenda com quem já gerou resultados."
        buttonText="Comprar agora"
      />
    </main>
  );
}
