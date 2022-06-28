import { useRouter } from "next/router";

const Card: React.FC<{ text: string; navigation: string }> = ({
  text,
  navigation,
}) => {
  const router = useRouter();
  const handleChangeRoute = () => {
    router.push(`/${navigation}`);
  };
  return (
    <div className="w-1/2 pl-4" onClick={handleChangeRoute}>
      <div className="flex overflow-hidden text-lg w-full items-stretch rounded-lg border border-gray-300 bg-slate-800 text-white cursor-pointer">
        <div className="flex justify-center w-full h-10 mt-3">{text}</div>
      </div>
    </div>
  );
};

export default Card;
