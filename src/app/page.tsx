"use client";
import { Input, Button, Select, Tooltip } from "@/components";

import { onlyNumbers } from "@/util/onlyNumbers";
import Image from "next/image";
import { useState } from "react";

type Merge<T> = {
  [N in keyof T]: string
}

const TIME = {
  ti: {
    h: 'Hora(s)',
    m: 'Minuto(s)'
  },

};


const TEMP = {
  te: 'Graus',
}


export default function Home() {
  const [values, setValues] = useState<{
    timeValues: 'h' | 'm',
    inputValue: 'te' | 'ti'
  }>({
    inputValue: 'ti',
    timeValues: 'm'
  });
  const { inputValue, timeValues } = values
  const [response, setResponse] = useState('');




  const calculateTemperatureAndTime = (target: HTMLFormElement) => {
    const [indTime, indTemp, req] = [...(target.querySelectorAll('#ind-time, #ind-temp, #req') || [])];
    const [indTimeValue, indTempValue, reqValue] = [indTime, indTemp, req].map((input) => Number((input as HTMLInputElement).value) || 0);

    const time = ((indTempValue * indTimeValue) / reqValue).toFixed(0)
    console.log('inputValue :>> ', inputValue, timeValues);
    const response = TEMP[`${inputValue}`] ? `${time} ${TEMP[`${inputValue}`]}` : `${time} ${TIME[`${inputValue}`][`${timeValues}`]}`
    setResponse(response);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    calculateTemperatureAndTime(e.target as HTMLFormElement)
  }


  return (
    <main className='bg-primary-100 w-screen h-screen grid place-items-center bg-[url("/assets/images/bg.svg")]'>
      <section className="w-screen h-screen max-w-screen-2xl grid place-items-center content-start py-20 px-10 gap-y-20">
        <div className="text-center grid">
          <h1 className="text-6xl mb-2">Tempo no Forno</h1>
          <h2 className="text-3xl font-semibold max-w-xl">Tempo no Forno: Precisão na Culinária, do Pré-aquecimento à Perfeição!</h2>
        </div>
        <form className="grid  gap-8 place-items-center w-fit max-w-lg md:grid-cols-1 lg:grid-cols-2" onSubmit={handleSubmit}>
          <div className="flex items-end gap-x-2 w-full">
            <Tooltip content="Selecione se será hora ou minutos">
              <Select
                onClick={(value) => setValues({
                  ...values,
                  timeValues: value
                })}
                className="z-10 w-14"
                options={[
                  {
                    value: 'm',
                    label: 'm'
                  },
                  {
                    value: 'h', // server para quando sair o resultado
                    label: 'h'
                  },
                ]} />
            </Tooltip>
            <Input label="Horinha" maxLength={3} placeholder="ex: 90" id='ind-time' onChange={(e) => {
              e.target.value = onlyNumbers(e.target.value)
            }} />
          </div>
          <Input label="Temperatura" maxLength={3} placeholder="200" id='ind-temp' onChange={(e) => {
            e.target.value = onlyNumbers(e.target.value)
          }} />
          <div className="flex items-end gap-x-2">
            {/* <Tooltip content="Selecione pela temperatura ou tempo"> */}
            <Select
              onClick={(value) => setValues({
                ...values,
                inputValue: value
              })}
              className="data-[open=true]:h-28 gap-y-0.5 w-14"
              options={[
                {
                  value: 'te',
                  label: <Image src='/assets/icons/clock.svg' alt='clock' width={25} height={25} className="mb-1" />
                },
                {
                  value: 'ti', // server para quando sair o resultado
                  label: <Image src='/assets/icons/temperature.png' alt='fire' width={25} height={35} className="mb-1" />
                },
              ]} />
            {/* </Tooltip> */}
            <Input label="Horinha/temperatura" id='req' maxLength={3} onChange={(e) => {
              e.target.value = onlyNumbers(e.target.value)
            }} />
          </div>
          <Button className="self-end" type="submit" >
            calcular
          </Button>
        </form>
        <h3 className="text-4xl">
          {response}
        </h3>
      </section>
    </main>
  )
}
