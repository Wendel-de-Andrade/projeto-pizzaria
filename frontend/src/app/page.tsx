"use client";
import { useContext, FormEvent, useState } from 'react'

import type { Metadata } from 'next'
import Image from 'next/image'
import styles from "../../styles/page.module.scss"

import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

import { AuthContext } from '../contexts/AuthContext'

import logoImg from "../../public/logo.svg"

// export const metadata: Metadata = {
//   title: "Pizzaria do Wendel - Faça seu Login",
//   description: "Sistema de pizzaria feita para estudo",
// }

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Sujeito Pizzaria"></Image>

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value) }
            />
            <Input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value) }
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
