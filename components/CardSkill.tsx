import Image from "next/image";

export default function CardSkill({ img, title, percent }: { img: string; title: string; percent: string }) {
  return (
    <div className="flex flex-col items-center ">
      <div className="border rounded-full border-white/20 h-[218px] w-[158px] p-8 flex flex-col items-center hover:border-[#FF5C00] ">
        <div className="w-[100px] h-[100px]">
          <Image src={img} alt={title} width={300} height={300} />
        </div>
        <h1 className=" text-2xl text-[#FF5C00] py-2">{percent}</h1>
      </div>
      <h1 className="text-xl text-white py-2 pb-10">{title}</h1>
    </div>
  );
}
