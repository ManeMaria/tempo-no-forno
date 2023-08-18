import { Input } from "@/components";
import { Button } from "@/components/Button";
import { Select } from "@/components/Select";
import {
  Tooltip
} from "@/components/Tooltip";

export default function Home() {

  return (
    <main className='bg-primary-100 w-screen h-screen grid place-items-center'>
      <section className="w-screen h-screen max-w-screen-2xl grid place-items-center content-start py-20 px-10 gap-y-20">
        <div className="text-center grid">
          <h1 className="text-6xl mb-2">Tempo no Forno</h1>
          <h2 className="text-3xl font-semibold max-w-xl">Tempo no Forno: Precisão na Culinária, do Pré-aquecimento à Perfeição!</h2>
        </div>
        <div className="grid  gap-8 place-items-center w-full max-w-lg md:grid-cols-1 lg:grid-cols-2">
          <div className="flex items-end gap-x-2 w-full">
            <Tooltip content="Selecione se será hora ou minutos">
              <Select options={[
                {
                  value: 'Mn',
                  label: 'Mn'
                },
                {
                  value: 'Hr', // server para quando sair o resultado
                  label: 'Hr'
                },
              ]} />
            </Tooltip>
            <Input label="Horinha" maxLength={3} />
          </div>
          <Input label="Temperatura" />
          <Input label="Horinha/temperatura" />
          <Button className="self-end" >
            calcular
          </Button>
        </div>
      </section>
    </main>
  )
}
