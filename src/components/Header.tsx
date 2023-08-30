import Image from 'next/image'
import {
  List,
  UserCircle,
  PhoneCall,
  CaretRight,
  Gear,
  Bell,
  SignOut,
} from 'phosphor-react'

import logoImg from 'public/logo-ingcorp.svg'

export function Header() {
  return (
    <header className="max-w-[1440px] h-[72px] bg-white" data-aos="fade-down">
      <nav className="w-full h-full p-3 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <button type="button" className="mr-8">
            <List className="w-6 h-6 text-[#3e3e51]" />
          </button>
          <button type="button" className="mr-6">
            <Image
              className="w-auto h-auto"
              src={logoImg}
              alt="logo image"
              width={127}
              height={51}
              priority
            />
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-3"
          >
            <UserCircle className="w-8 h-8 text-[#d9dae1]" />
            <span className="text-sm text-[#3e3f44]">Lucas Romero Cardim</span>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-xs text-[#3e3f44]">Grupo: Prospecção</span>
          <button
            type="button"
            className="w-[168px] h-[50px] ml-[112px] flex items-center justify-start rounded-md p-3 bg-[#45c777]"
          >
            <PhoneCall className="w-[28px] h-[30px] text-white mr-2" />
            <div className="flex flex-col text-start">
              <span className="text-sm text-white">Livre</span>
              <span className="text-[10px] text-white">00:00:00</span>
            </div>
          </button>
          <button
            type="button"
            className="w-[134px] h-9 flex items-center justify-between p-2 bg-white border-2 border-[#788693] rounded-md ml-2"
          >
            <span className="text-sm text-[#bcbfd0]">Pausas</span>
            <CaretRight className="text-lg text-[#bcbfd0]" />
          </button>
        </div>
        <div className="w-[168px] h-full flex items-center justify-center">
          <div className="flex gap-6">
            <button type="button">
              <Gear className="w-6 h-6 text-[#828292]" />
            </button>
            <button type="button">
              <Bell className="w-6 h-6 text-[#828292]" />
            </button>
            <button type="button">
              <SignOut className="w-6 h-6 text-[#828292]" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
