import { useState } from 'react'

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`${
        isOpen ? 'w-72' : 'w-20'
      } bg-sky-800 text-white transition-all duration-300 overflow-hidden`}
    >
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 p-2 rounded"
        >
          {isOpen ? 'Close Drawer' : 'Open Drawer'}
        </button>
      </div>
      {isOpen && <div className="p-4">Drawer Content Here</div>}
    </div>
  )
}

export default Drawer
