import Image from 'next/image'

import { Input } from '@/components/Input'

export default function Home() {
  return (
    <div className="grid grid-cols-2 max-h-screen max-w-[1440px] relative">
      <Image
        className="absolute top-9 left-9 w-auto h-auto"
        src="/logo.svg"
        alt="logo image"
        width={159}
        height={36}
        priority
      />
      <main className="flex min-h-screen max-w-2xl flex-col items-center justify-center px-24 bg-white">
        <div className="w-[475px]" data-aos="fade-left">
          <div className="text-start mb-[81px]">
            <h2 className="font-bold text-[#0e0e58] text-2xl mb-[10px]">
              Olá, Bem vindo!
            </h2>
            <span className="text-sm text-[#3e3f44]">
              Solução de gerenciamento de relacionamento para empresas e
              pessoas.
            </span>
          </div>
          <form>
            <label htmlFor="username" className="text-[#0e0e58] text-xs">
              E-mail<span className="text-[#9eaae1]">*</span>
            </label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Teste@gmail.com"
            />
            <label htmlFor="password" className="text-[#0e0e58] text-xs">
              Senha<span className="text-[#9eaae1]">*</span>
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="********"
            />
            <button
              type="button"
              className="w-full h-[43px] mt-[22px] px-4 py-2 rounded bg-[#3758cc] text-white"
            >
              Entrar
            </button>
            <div className="w-full text-end">
              <button
                type="button"
                className="mt-2 text-[#3e3f44] text-[12px] block"
              >
                Esqueci minha senha
              </button>
            </div>
            <div className="w-full flex items-center justify-center mt-[23px]">
              <span className="text-[14px] text-[#828292]">
                Não tem uma conta?{' '}
                <button type="button" className="text-[#3758cc]">
                  Cadastre-se
                </button>
              </span>
            </div>
          </form>
        </div>
      </main>
      <aside className="flex min-h-screen max-w-3xl flex-col items-center justify-center px-36 py-auto bg-[#e9ebf5]">
        <div className="w-[490px]" data-aos="fade-right">
          <Image
            className="w-auto h-auto"
            src="/background-login.svg"
            alt="background login image"
            width={390}
            height={492}
            priority
          />
          <div className="grid gap-5 mt-[46px] text-center text-lg">
            <h2 className="font-bold text-[#0e0e58]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <span className="text-[#828292]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sed
              q uisque turpis varius ullamcorper.
            </span>
            <span className="text-[#828292]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sed
              q uisque turpis varius ullamcorper.
            </span>
          </div>
        </div>
      </aside>
    </div>
  )
}
