import { createFileRoute } from '@tanstack/react-router'
import logo from '/logo.png'
import { LatestEpisodes } from '#/components/index/LatestEpisodes'
import { getYoutubeChannel } from '#/server/youtube'
import { scrapeNA } from '#/server/scraper'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    const [youtube, meetings] = await Promise.all([
      getYoutubeChannel(),
      scrapeNA(),
    ])
    console.log(JSON.parse(meetings));
    
    return { youtube, meetings }
  },
})

function App() {
  const { youtube } = Route.useLoaderData()
  return (
    <div>
      <header className='flex justify-center items-center h-[70vh]'>
        <img
          src={logo}
          alt="Sober, Still Stupid Logo"
          className="h-auto w-100 max-w-full object-contain"
        />
      </header>
      <main>
        <h3 className='text-2xl text-center mb-4'>Latest Episodes</h3>
        <section className='flex'>
          {youtube.error ? (
            <p className="w-full text-center text-muted-foreground">
              {youtube.error}
            </p>
          ) : (
            <LatestEpisodes items={youtube.items} />
          )}
        </section>
      </main>
    </div>
  )
}
