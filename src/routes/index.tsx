import { createFileRoute } from '@tanstack/react-router'
import logo from '/logo.png'

export const Route = createFileRoute('/')({ component: App })

function App() {
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
        <h3 className='text-2xl text-center'>Latest Episodes</h3>
      </main>
    </div>
  )
}
