# graphql-gh-repositories
An application to search repositories and get their info

## How to work with this repository?
Before you can change or test something locally, you should follow steps below

- Install nodejs (18.15.0) if you don't have it https://nodejs.org/en
- Install pnpm 
`npm install -g pnpm@7.26.3`
- Install dependencies
`pnpm i --frozen-lockfile`
## Run dev server 
- `pnpm dev`
## Create build
- `pnpm build`

## After you will open local page
- You should add your github token to page sessionStorage `window.sessionStorage.setItem("gh-test-token", "TOKEN")` where TOKEN is your created github token
- More about github tokens - https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
