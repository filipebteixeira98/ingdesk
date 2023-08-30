import {
  Gauge,
  Handshake,
  UsersThree,
  UserGear,
  ChatCircleDots,
  MagnifyingGlass,
  ProjectorScreenChart,
  CheckSquare,
  ClipboardText,
  Plus,
  Phone,
} from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className="max-h-screen w-16" data-aos="fade-right">
      <div className="w-full h-full flex flex-col items-center justify-between p-3 gap-20">
        <div className="flex flex-col gap-8">
          <button type="button">
            <Gauge className="w-6 h-6 text-[#828292]" />
          </button>
          <button type="button">
            <Handshake className="w-6 h-6 text-[#828292]" />
          </button>
          <button type="button">
            <UsersThree className="w-6 h-6 text-[#828292]" />
          </button>
          <button type="button">
            <UserGear className="w-6 h-6 text-[#828292]" />
          </button>
          <button type="button">
            <ChatCircleDots className="w-6 h-6 text-[#828292]" />
          </button>
          <button type="button">
            <MagnifyingGlass className="w-6 h-6 text-[#828292]" />
          </button>
          <button type="button">
            <ProjectorScreenChart className="w-6 h-6 text-[#828292]" />
          </button>
          <button type="button">
            <CheckSquare className="w-6 h-6 text-[#828292]" />
          </button>
          <button type="button">
            <ClipboardText className="w-6 h-6 text-[#828292]" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="w-[40px] h-[40px] p-[10px] rounded-[87px] bg-white border border-[#828292] border-opacity-10 grid place-content-center"
          >
            <Plus className="text-sm text-[#828292]" />
          </button>
          <button
            type="button"
            className="w-[40px] h-[40px] p-[10px] rounded-[87px] bg-[#005daa] grid place-content-center"
          >
            <Phone className="text-[22px] text-white" />
          </button>
        </div>
      </div>
    </aside>
  )
}
