import { Input } from "@/components";

export default function Home() {
  return (
    <main className='bg-primary-400 w-screen h-screen grid place-items-center'>
      <section className="w-screen h-screen max-w-screen-2xl grid place-items-center bg-red-100">
        <h1 className="text-6xl"> Add a device</h1>
        <div>
          <Input label="tempo normal" />
          <Input label="tempo normal" />
          <Input label="tempo normal" />
          <Input label="tempo normal" />
        </div>
      </section>
    </main>
  )
}
