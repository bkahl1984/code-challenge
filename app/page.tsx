import Page from "./components/Page/Page";

// This function can be named anything
async function getPullRequests() {
  const res = await fetch(`https://api.github.com/repos/divvydose/ui-coding-challenge/pulls`, { cache: 'no-store' })
  const pullRequests = await res.json()
 
  return pullRequests
}

export default async function Home() {
  const pullRequests = await getPullRequests()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Page pullRequests={pullRequests}/>
      </main>
    </div>
  );
}
