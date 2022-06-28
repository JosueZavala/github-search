import { useFormContext } from "react-hook-form";
import { RiFilterOffLine } from "react-icons/ri";
import SearchInput from "./searchInput";

const Filters: React.FC<{ placeHolder: string; onSubmitEnter?: boolean }> = ({
  placeHolder = "",
  onSubmitEnter = false,
}) => {
  const { resetField } = useFormContext();
  return (
    <div className="flex bg-stone-100 rounded-xl h-20 w-full pt-4 mt-8 mx-auto md:w-2/3 lg:w-1/2">
      <SearchInput placeHolder={placeHolder} onSubmitEnter={onSubmitEnter} />
      <div className="pr-4 pt-4">
        <RiFilterOffLine
          onClick={() => resetField("searchInput")}
          className="w-4 h-4 cursor-pointer stroke-current text-primary"
        />
      </div>
    </div>
  );
};

export default Filters;
