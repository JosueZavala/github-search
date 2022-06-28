import Image from "next/image";
import { RepoCardProps } from "../../typings/application";

const RepoCard: React.FC<RepoCardProps> = ({ name, owner, url }) => {
  return (
    <div className="bg-blue-200 rounded-md p-5 mr-5 mb-5 w-1/3 max-w-1/3">
      <Image className="" src={owner.image} alt="" width={300} height={300} />
      <div className="text-center mt-2">
        <div>Repo Name: {name}</div>
        <div>Owner: {owner.userName}</div>
        <a href={url} className="cursor-pointer text-sky-700">
          Url: {url.replace("https://github.com", "")}
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
