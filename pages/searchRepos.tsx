import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import RepoCard from "../src/components/Cards/RepoCard";
import Filters from "../src/components/filters/filters";
import IntroductionCard from "../src/components/IntroductionCard";
import { GithubRepo } from "../src/interfaces/githubRepo";
import { FormInputs, Owner } from "../src/typings/application";
import { getGithubRepo } from "../src/utils/get-githubInfo";

const SearchRepos: NextPage = () => {
  const [repoResult, setRepoResult] = useState<GithubRepo[]>();
  const [showNoFoundMessage, setShowNoFoundMessage] = useState<boolean>(false);
  const methods = useForm<FormInputs>();
  const searchInput = methods.watch("searchInput");

  const searchRepo = async (repo: string) => {
    const response = getGithubRepo(repo);
    response
      .then((res) => res.data)
      .then((data) => {
        const { items } = data;
        setShowNoFoundMessage(false);
        setRepoResult(items);
      })
      .catch((err) => {
        setShowNoFoundMessage(true);
        setRepoResult([]);
      });
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { searchInput } = data;
    if (searchInput) {
      console.log(searchInput);
      searchRepo(searchInput);
    }
  };

  useEffect(() => {
    if (!searchInput) {
      setShowNoFoundMessage(false);
      setRepoResult([]);
    }
  }, [searchInput]);

  return (
    <FormProvider {...methods}>
      <Head>
        <title>Search Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroductionCard />
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Filters
          placeHolder="Enter name ex. tetris (don't forget press enter)"
          onSubmitEnter={true}
        />
        <div className="flex flex-wrap bg-stone-100 rounded-md w-full mt-8 py-5 mx-auto mb-5 lg:w-1/2">
          <div className="flex flex-wrap w-full h-auto pl-5 mb-5 mt-5 justify-center">
            {repoResult &&
              repoResult?.length > 0 &&
              repoResult.map((result) => {
                const owner: Owner = {
                  image: result.owner?.avatar_url,
                  userName: result.owner?.login,
                };
                return (
                  <RepoCard
                    key={result.id}
                    name={result.name}
                    owner={owner}
                    url={result.html_url}
                  />
                );
              })}
            {showNoFoundMessage && <>No Repo Found with {searchInput}</>}
            {!searchInput && (
              <>Ready for search Repos!!! (don&apos;t forget press enter)</>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SearchRepos;
