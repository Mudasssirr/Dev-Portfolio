import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs text-black/40">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
