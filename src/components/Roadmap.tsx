import Rocket from "./svgs/Rocket";

interface PhaseCardProps {
  id: number;
  title: string;
  items: string[];
  className?: string;
}

const PhaseCard: React.FC<PhaseCardProps> = ({
  id,
  title,
  items,
  className,
}) => {
  return (
    <div className={`${className ?? ""}`}>
      <h4 className="text-xl font-bold">
        Phase {id}: {title}
      </h4>
      <ul className="bg-white border-4 border-black rounded-[50px]">
        {items.map((item, i) => (
          <li key={i} className="text-xl font-medium">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Roadmap = () => {
  return (
    <div className="container px-[66px] mt-16">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold">Roadmp</h2>
          <span className="text-2xl font-semibold text-[#00186C]/50">
            Future Plans
          </span>
        </div>
        <Rocket className="ml-10" />
      </div>
    </div>
  );
};

export default Roadmap;
