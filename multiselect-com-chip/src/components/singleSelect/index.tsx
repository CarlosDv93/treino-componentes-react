//Source: video: https://www.youtube.com/watch?v=vXO5JMiKtM8

import React, { ChangeEvent, useEffect, useRef, useState } from "react";

type JsonResponse = { nome: string, sigla: string, cidades: Array<string> }

export const SingleSelect = () => {
  const [options, setOptions] = useState<JsonResponse[]>([])
  const [display, setDisplay] = useState(false)
  const [search, setSearch] = useState("")
  const wrapperRef = useRef(null)

  useEffect(() => {
    let opcoes = [];
    fetch(`http://localhost:3001/estados`)
      .then(res => { return res.json() })
      .then((data: JsonResponse[]) => {
        data.map((dado: JsonResponse) => {
          return dado.nome;
        })
        setOptions(data)
        opcoes = data;
      })
  }, [])

  useEffect(() => {
    document.addEventListener("mouseDown", handleClickOutsideMouse)

    return () => {
      document.removeEventListener("mouseDown", handleClickOutsideMouse)
    }
  }, [])

  const handleClickOutsideMouse = (event: { target: any; }) => {
    const { current: wrap }: any = wrapperRef
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false)
    }
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const setValue = (valor: string) => {
    setSearch(valor)
    setDisplay(false)
  }

  return (
    <div ref={wrapperRef}>
      <input id="auto" placeholder="Selecione a localidade: "
        onClick={() => setDisplay(!display)}
        onChange={handleOnChange}
        value={search}
      />
      {display && (
        <div>
          {options.filter(({ nome }) => nome.toLowerCase().indexOf(search.toLowerCase()) > -1)
            .map((value: JsonResponse, index) => {
              return (
                <div key={index} onClick={() => setValue(value.nome)} tabIndex={0}>
                  <span>{value.nome}</span>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}