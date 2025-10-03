export const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "melekalyoncu";

export type Repo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  owner: { login: string };
  homepage?: string | null;     
  html_url?: string;            
};
