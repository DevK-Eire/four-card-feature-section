import Image from "next/image";
import supervisor from "../app/assets/icon-supervisor.svg";
import teamBuilder from "../app/assets/icon-team-builder.svg";
import karma from "../app/assets/icon-karma.svg";
import calculator from "../app/assets/icon-calculator.svg";

export default function Home() {
  return (
    <main className="px-auto md:px-32 py-32">
      {/* Header */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center flex-col items-center gap-6 p-4 w-[540px] h-40">
          <h1 className="font-Poppins text-4xl">Reliable, efficient delivery</h1>
          <h2 className="font-bold font-Poppins text-4xl gap-4">Powered by Technology</h2>
          <p className="text-center font-Poppins text-sm text-[#979797]">
            Our Artificial Intelligence powered tools use millions of project data points
            to ensure that your project is successful
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-12 p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center items-center gap-6">
        {/* Supervisor */}
        <div className="p-8 border-4 border-t-Prim-Cyan rounded shadow-2xl space-y-2 w-full h-64 relative">
          <h2 className="font-bold font-Poppins text-xl">Supervisor</h2>
          <p className="text-[#979797] font-Poppins">Monitors activity to identify project roadblocks</p>
          <div className="absolute bottom-0 right-0 pr-6 pb-6">
            <Image src={supervisor} alt="Supervisor" width={50} height={50} />
          </div>
        </div>

        {/* Karma & Team Builder (Stacked in the same column for md screens) */}
        <div className="space-y-6">
          <div className="p-8 border-4 border-t-Prim-Orange rounded shadow-2xl space-y-2 w-full h-64 relative">
            <h2 className="font-bold font-Poppins text-xl">Karma</h2>
            <p className="text-[#979797] font-Poppins">Regularly evaluates our talent to ensure quality</p>
            <div className="absolute bottom-0 right-0 pr-6 pb-6">
              <Image src={karma} alt="Karma" width={50} height={50} />
            </div>
          </div>
          <div className="p-8 border-4 border-t-Prim-Red rounded shadow-2xl space-y-2 w-full h-64 relative">
            <h2 className="font-bold font-Poppins text-xl">Team Builder</h2>
            <p className="text-[#979797] font-Poppins">Builds a cohesive team</p>
            <div className="absolute bottom-0 right-0 pr-6 pb-6">
              <Image src={teamBuilder} alt="Team Builder" width={50} height={50} />
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="p-8 border-4 border-t-Prim-Blue rounded shadow-2xl space-y-2 w-full h-64 relative">
          <h2 className="font-bold font-Poppins text-xl">Calculator</h2>
          <p className="text-[#979797] font-Poppins">Uses data from past projects to provide better delivery estimates</p>
          <div className="absolute bottom-0 right-0 pr-6 pb-6">
            <Image src={calculator} alt="Calculator" width={50} height={50} />
          </div>
        </div>
      </div>
    </main>
  );
}

