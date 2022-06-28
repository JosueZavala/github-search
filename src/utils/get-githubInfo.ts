import { Octokit } from "octokit";

export const getGithubUser = async (user: string) => {
  const octokit = new Octokit({
    auth: `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  });
  const url = `GET /users/${user}`;
  const response = octokit.request(url);
  return response;
};

export const getGithubRepo = async (repo: string) => {
  const octokit = new Octokit({
    auth: `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  });
  const params = { in: "name" };
  repo = encodeURIComponent(repo);
  const url = `GET /search/repositories?q=${repo}`;
  const response = octokit.request(url, params);
  return response;
};
