import Image from "next/image";
import { UserCardProps } from "../../typings/application";

const UserCard: React.FC<UserCardProps> = ({
  name,
  userName,
  profileUrl,
  image = "",
}) => {
  return (
    <div className="bg-blue-200 rounded-md p-5 mr-5 mb-5 w-1/3 max-w-1/3">
      <Image className="" src={image} alt="" width={300} height={300} />
      <div className="text-center mt-2">
        <div>Name: {name}</div>
        <div>UserName: {userName}</div>
        <a href={profileUrl} className="cursor-pointer text-sky-700">
          Url: {profileUrl.replace("https://github.com", "")}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
