export default function page() {
  return (
    <div>
      <h1 className="text-4xl text-white py-2 font-bold">
        Contact <span className="text-[#FF5C00]">Me</span>
      </h1>
      <h1 className="text-4xl text-white py-2 ">Let’s get in touch!</h1>
      <form>
        <div className="grid grid-cols-2 gap-10 pl-10 pr-16 py-10">
          <input
            type="text"
            placeholder="Email"
            className="text-xl text-[#FF5C00] border-b border-[#685D5D] focus:outline-none "
          />
          <input
            type="text"
            placeholder="Phone"
            className="text-xl text-[#FF5C00] border-b border-[#685D5D] focus:outline-none "
          />
          <input
            type="text"
            placeholder="Name"
            className="text-xl text-[#FF5C00] border-b border-[#685D5D] focus:outline-none "
          />
          <input
            type="text"
            placeholder="Adress"
            className="text-xl text-[#FF5C00] border-b border-[#685D5D] focus:outline-none "
          />
          <textarea
            placeholder="Content"
            rows={5}
            className="text-xl text-[#FF5C00] border-b border-[#685D5D] focus:outline-none "
          />
        </div>
      </form>
    </div>
  );
}
