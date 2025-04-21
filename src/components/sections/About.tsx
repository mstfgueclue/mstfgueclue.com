import { ContactCard } from "./ContactCard";
import { TextSection } from "./TextSection";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <TextSection title="Mustafa Gueclue">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-4">
          <p>
            Senior Software Engineer bei PwC mit über acht Jahren Erfahrung in
            der Entwicklung moderner Web- und Softwarelösungen. Ich interessiere
            mich besonders für saubere Architekturen, effiziente Systeme und
            technische Weiterentwicklung.
          </p>
          <div>
            <a
              href='mailto:"Mustafa Gueclue" hi@mstfgueclue.com'
              className="font-semibold text-indigo-500 inline-flex gap-1 items-center"
            >
              <span>Schreib mir per Mail</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="relative lg:-top-24 flex justify-center md:justify-start">
          <ContactCard />
        </div>
      </div>
    </TextSection>
  );
}
