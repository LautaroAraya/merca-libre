import Image from "next/image"
import Link from "next/link"


const HeaderComponent = () => {
  return (
    <header className='w-full bg-meli' >
    <div className="max-w-screen-x1 mx-auto p-8 flex gap-4 items-center">
    <Link href="/">
      <Image width={134} height={34} src="/images/logoMerca.png" alt="logo"/>
      </Link>
      <form className="w-full flex cursor-pointer" action="/items">
        <input className="flex-1 p-2 shadow-md outline-none" autoComplete="off" name="q" type="text" placeholder="Buscar productos marcas y mas..." />
        <button className="bg-white p-3 border-l border-l-slate-200 shadow-md">
          <Image width={20} height={20} src="/images/lupa.png" alt="lupa"/>
        </button>
      </form>
    </div>
    </header>
  )
}

export default HeaderComponent