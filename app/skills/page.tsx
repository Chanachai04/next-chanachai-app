import CardSkill from "@/components/CardSkill";

export default function page() {
  return (
    <div>
      <h1 className="text-4xl text-white py-2 font-bold">
        My <span className="text-[#FF5C00]">Skills</span>
      </h1>
      <div className="grid grid-cols-4 justify-items-start">
        <CardSkill img="/react.png" title="React" percent="60%" />
        <CardSkill img="/figma.png" title="Figma" percent="85%" />
        <CardSkill img="/html.png" title="HTML/CSS" percent="80%" />
        <CardSkill img="/nextjs.png" title="Next.js" percent="80%" />
        <CardSkill img="/js.png" title="Java Script" percent="60%" />
        <CardSkill img="/github.png" title="GitHub" percent="90%" />
      </div>
    </div>
  );
}
