import { useEffect, useState } from "react"

const Overlay = () => {
  const [open, setOpen] = useState(false)

  if (open) {
    return <div className="fixed z-40 inset-0" style={{ backgroundImage: 'url("/xp.jpg")', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: '60% 50%', backgroundSize: 'cover' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="group cursor-pointer hover:border borger-white hover:opacity-90 hover:bg-gray-800 p-2" onClick={() => setOpen(false)}>
          <img width="48px" height="48px" className="mx-auto" src="/A.png" alt="..." />
          <p className="text-white text-center mt-2 group-hover:underline">Ana's <br /> portfolio</p>
        </div>
      </div>
    </div>
  }

  return (
    <div>
      <button className="px-3 py-1 hover:bg-background-2">-</button>
      <button className="px-2 py-1 hover:bg-background-2">🗖</button>
      <button className="px-4 py-1 bg-indigo-500 hover:text-white  x-button" onClick={() => setOpen(true)}>x</button>
    </div>
  )
}

export default Overlay