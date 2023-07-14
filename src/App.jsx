
import '../dist/output.css'
import profile from './assets/profile.jpg'
import profile2 from './assets/profile2.jpg'
import { Invite } from './components/Invite'
function App() {

  return (
    <div className='w-screen h-screen '>
    <div className='grid place-content-center flex-wrap pt-10 gap-3 '>
      <Invite name="Vicky" img={profile}/>
      <Invite name="Lucas" img={profile2}/>
    </div>
    </div>
  )
}

export default App
