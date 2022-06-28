## Getting Started to run in local environment

Clone the Repository:

```bash
git clone https://github.com/JosueZavala/github-search
cd github-search
```

Create .env.local file in root folder with following:

```bash
# GITHUB API
NEXT_PUBLIC_GITHUB_API=https://api.github.com
# PERSONAL KEY
NEXT_PUBLIC_ACCESS_TOKEN=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
```

Install dependencies:

```bash
npm i
# or
yarn / yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.