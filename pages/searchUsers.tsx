import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import UserCard from "../src/components/Cards/UserCard";
import Filters from "../src/components/filters/filters";
import IntroductionCard from "../src/components/IntroductionCard";
import { useForm, FormProvider } from "react-hook-form";
import { GithubUser } from "../src/interfaces/githubUser";
import { getGithubUser } from "../src/utils/get-githubInfo";

const SearchUsers: NextPage = () => {
  const [userCard, setUserCard] = useState<JSX.Element>();
  const methods = useForm();
  const searchInput = methods.watch("searchInput");

  const searchUsers = async (user: string) => {
    const response = getGithubUser(user);
    response
      .then((res) => res.data)
      .then((data: GithubUser) => {
        const {
          avatar_url: image,
          name,
          html_url: profileUrl,
          login: userName,
        } = data;

        setUserCard(
          <UserCard
            name={name}
            userName={userName}
            profileUrl={profileUrl}
            image={image}
          />
        );
      })
      .catch((err) => {
        setUserCard(<>No User Found with {user}</>);
      });
  };

  useEffect(() => {
    if (!searchInput) {
      setUserCard(<>Ready for Search Users!!!</>);
      return;
    }
    searchUsers(searchInput);
  }, [searchInput]);
  return (
    <FormProvider {...methods}>
      <Head>
        <title>Search Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroductionCard />
      <Filters placeHolder="Enter name ex. JosueZavala" />
      <div className="flex flex-wrap bg-stone-100 rounded-md w-full mt-8 py-5 mx-auto mb-5 lg:w-3/4 max-w-3xl">
        <div className="flex flex-wrap w-full h-auto pl-5 mb-5 mt-5 justify-center">
          {userCard && userCard}
        </div>
      </div>
    </FormProvider>
  );
};

export default SearchUsers;
