import { useFormContext } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

const SearchInput: React.FC<{
  placeHolder: string;
  onSubmitEnter?: boolean;
}> = ({ placeHolder = "", onSubmitEnter = false }) => {
  const { register } = useFormContext();
  return (
    <div className="w-full pl-4">
      <div className="overflow-hidden text-base flex items-stretch rounded-lg border w-full border-gray-300">
        <div className="flex-1">
          <input
            type="text"
            placeholder={placeHolder}
            className={`w-full bg-transparent focus:outline-none p-3`}
            {...register("searchInput")}
          />
        </div>
        {onSubmitEnter && (
          <button type="submit" className="px-2 focus:outline-none">
            <FaSearch />
          </button>
        )}
        {!onSubmitEnter && (
          <button type="button" className="px-2 focus:outline-none">
            <FaSearch />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
