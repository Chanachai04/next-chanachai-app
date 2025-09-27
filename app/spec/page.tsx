import { Code, Globe, PenTool } from "lucide-react";
export default function page() {
  return (
    <div>
      <h1 className="text-4xl text-white py-2 pb-5 font-bold">
        My <span className="text-[#FF5C00]">Specializations</span>
      </h1>
      <div className="border rounded-2xl border-[#FF5C00] p-8">
        <div className="flex justify-between">
          <h1 className="text-xl text-white font-bold">Front end-developer</h1>
          <Code size={30} className="text-[#FF5C00]" />
        </div>
        <p className="text-xl text-[#7D7373] ">
          Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.
        </p>
      </div>
      <div className="py-8">
        <div className="border rounded-2xl border-[#FF5C00] p-8 ">
          <div className="flex justify-between">
            <h1 className="text-xl text-white font-bold">UI/UX Designer</h1>
            <Globe size={30} className="text-[#FF5C00]" />
          </div>
          <p className="text-xl text-[#7D7373] ">
            UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.
          </p>
        </div>
      </div>

      <div className="border rounded-2xl border-[#FF5C00] p-8">
        <div className="flex justify-between">
          <h1 className="text-xl text-white font-bold">Graphic designer</h1>
          <PenTool size={30} className="text-[#FF5C00]" />
        </div>
        <p className="text-xl text-[#7D7373] ">
          As a graphic designer, I transform ideas into visually striking and impactful designs.
        </p>
      </div>
    </div>
  );
}
