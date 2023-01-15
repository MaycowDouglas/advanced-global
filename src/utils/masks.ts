import { KeyboardEvent } from 'react'

export const masks = {
  cpf: (value: string) => {
    // output => 999.999.999-99
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1-$2')
  },
  cnpj: (value: string) => {
    // output => 99.999.999/0001-99
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
  },
  phone: (value: string) => {
    // output => (99) 99999-9999
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
  },
}

export const handleMasks = {
  cpf: (e: KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.minLength = 14
    e.currentTarget.maxLength = 14
    e.currentTarget.value = masks.cpf(e.currentTarget.value)
  },
  cnpj: (e: KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.minLength = 18
    e.currentTarget.maxLength = 18
    e.currentTarget.value = masks.cnpj(e.currentTarget.value)
  },
  phone: (e: KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.minLength = 15
    e.currentTarget.maxLength = 15
    e.currentTarget.value = masks.phone(e.currentTarget.value)
  },
}
