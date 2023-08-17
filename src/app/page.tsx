import { Input } from "@/components";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className='bg-primary-100 w-screen h-screen grid place-items-center'>
      <section className="w-screen h-screen max-w-screen-2xl grid place-items-center content-start py-20 px-10 gap-y-20">
        <div className="text-center grid">
          <h1 className="text-6xl"> Add a device</h1>
          <h2 className="text-4xl font-semibold">explicação da nossa proposta</h2>
        </div>
        <div className="grid  gap-8 place-items-center w-full max-w-lg md:grid-cols-1 lg:grid-cols-2">
          <Input label="tempo normal" />
          <Input label="tempo normal" />
          <Input label="tempo normal" />
          <Button className="self-end" />
        </div>
      </section>
    </main>
  )
}
