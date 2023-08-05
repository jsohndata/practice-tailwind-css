import { IButton } from './common/interfaces';
import Button from './components/Button';

export default function Home() {
  return (
    <>
      <div className="w-full bg-zinc-300 p-6`">
        <h1 className="text-4xl text-center text-purple-500">Hello There</h1>
        <Button title="hoho" />
      </div>
    </>
  )
}
