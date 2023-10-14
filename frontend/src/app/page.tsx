import type { Metadata } from 'next'
import Image from 'next/image'
import styles from "../../styles/page.module.scss"

import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

import logoImg from "../../public/logo.svg"

export const metadata: Metadata = {
  title: "Pizzaria do Wendel - Faça seu Login",
  description: "Sistema de pizzaria feita para estudo",
}

export default function Home() {
  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria"></Image>

        <div className={styles.login}>
          <form>
            <Input
              placeholder="Digite seu email"
              type="text"
            />
            <Input
              placeholder="Sua senha"
              type="password"
            />
            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>

          </form>

          <a className={styles.text}>Não possui acesso? Cadastre-se!</a>

        </div>
      </div>
    </>
  )
}
