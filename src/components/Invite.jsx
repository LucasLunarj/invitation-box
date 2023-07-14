

export function Invite(props){
    return (
        <div>
            <div className=' py-2 '>
        <div className='bg-white w-80 py-3 px-2 border-none rounded '>
          <div className='flex gap-2'>
            <img className='rounded-full w-14 h-14 object-cover -my-1.5 border-2 ' src={props.img} alt="" />
            <div>
              <p className='font-semibold text-lg'>{props.name}</p>
              <p className='text-xs text-gray-600 px-1 py-2'>Te Mandou um convite</p>
            </div>
          </div>
          <div className='flex gap-3 px-1 py-2'> 
            <button className='bg-blue-700 text-white rounded px-3 py-1 hover:bg-blue-600'>Aceitar</button>
            <button className='bg-slate-300 rounded px-3 py-1 hover:bg-slate-200'>Negar</button>
          </div>
        </div>
      </div>
        </div>
    )
        
}