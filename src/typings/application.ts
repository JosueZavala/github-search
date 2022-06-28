export type UserCardProps = {
  name: string;
  userName: string;
  profileUrl: string;
  image: string;
};

export type Owner = {
  image: string;
  userName: string;
};
export type RepoCardProps = {
  name: string;
  owner: Owner;
  url: string;
};

export type FormInputs = {
  searchInput: string;
};
