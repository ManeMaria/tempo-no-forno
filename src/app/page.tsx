"use client";
import { Input, Button, Select, Tooltip, Stickers, Footer, AnimatedText } from "@/components";
import { onlyNumbers } from "@/util/onlyNumbers";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const MAGNITUDES: Partial<Record<'te' | 'ti', any>> = {
  te: 'Grau(s)',
  ti: {
    h: 'Hora(s)',
    m: 'Minuto(s)'
  },
}


//TODO: resolver animação
//TODO: setar validadores com zod

export default function Home() {
  const values = useRef<{
    timeValues: 'h' | 'm',
    inputValue: 'te' | 'ti'
  }>({
    inputValue: 'te',
    timeValues: 'm'
  });

  const [response, setResponse] = useState('');

  const calculateTemperatureAndTime = useCallback((target: HTMLFormElement, inputValue: "te" | "ti", timeValues: 'm' | 'h') => {

    const [indTime, indTemp, req] = [...(target.querySelectorAll('#ind-time, #ind-temp, #req') || [])];
    const [indTimeValue, indTempValue, reqValue] = [indTime, indTemp, req].map((input) => Number((input as HTMLInputElement).value) || 0);
    const time = ((indTempValue * indTimeValue) / reqValue).toFixed(0)


    const response = inputValue === 'ti' ?
      `${time} ${MAGNITUDES[`${inputValue}`][`${timeValues}`]}`
      : `${time} ${MAGNITUDES[`${inputValue}`]}`;

    if (time.includes('NaN') || time === '0') {
      setResponse('Acho que está faltando alguma coisa... :/')
      return;
    }
    setResponse(response);

  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { inputValue, timeValues } = values.current;
    calculateTemperatureAndTime(e.target as HTMLFormElement, inputValue, timeValues)
  }, [calculateTemperatureAndTime]);


  return (
    <>

      <main className='bg-primary-100 w-full min-h-[100vh] grid place-items-center bg-[url("/assets/images/bg.svg")]' >
        <section className="w-full h-[100%] max-w-screen-2xl grid place-items-center content-start py-20 px-10 gap-y-10 relative xs:py-10">
          <AnimatedText.headings />
          <form className="grid z-[2] gap-8 place-items-center w-fit max-w-lg  md:grid-cols-1 lg:grid-cols-2" onSubmit={handleSubmit}>
            <div className="flex items-end gap-x-2 w-full  ">
              <Tooltip content="Selecione se será hora ou minutos">
                <Select
                  onClick={(value) => {
                    values.current = {
                      ...values.current,
                      timeValues: value
                    }
                  }}
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

              <Select
                onClick={(value) => {
                  values.current = {
                    ...values.current,
                    inputValue: value
                  }
                }}
                className="data-[open=true]:h-28 gap-y-0.5 w-14"
                options={[
                  {
                    value: 'te',
                    label: <Image src='/assets/icons/clock.svg' alt='clock' width={25} height={25} className="mb-1" />
                  },
                  {
                    value: 'ti', // server para quando sair o resultado
                    label: <Image src='/assets/icons/temperature.svg' alt='fire' width={25} height={35} className="mb-1" />
                  },
                ]} />

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
          <Stickers />
        </section >
        <section className="w-full max-w-screen-2xl grid place-items-center content-start gap-y-5 relative xs:py-0 px-10 xs:pb-10">
          <h3 className="text-2xl">
            Descubra Precisão Culinária: Quanto Tempo Sua Receita Deve Ficar no Forno?
          </h3>

          <h4 className="text-xl font-normal">
            Se a pergunta é quanto tempo uma receita deve ficar no forno, você está no lugar certo! Com o Tempo no Forno, desvendar o tempo exato de cozimento é simples. Por exemplo, se a sua especialidade normalmente fica pronta em 30 minutos a 270°C, quanto tempo levará a 320°C? Nosso prático calculador tem todas as respostas, garantindo que cada prato seja uma obra-prima culinária. Cozinhe com confiança, precisão e sabor - explore o Tempo no Forno agora mesmo!
          </h4>
        </section>
      </main>
      <Footer />
    </>
  )
}
