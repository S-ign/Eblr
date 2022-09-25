import HomeIcon from '@mui/icons-material/Home';
import ExploreSharpIcon from '@mui/icons-material/ExploreSharp';
import MailIcon from '@mui/icons-material/Mail';
import MoodIcon from '@mui/icons-material/Mood';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import PersonIcon from '@mui/icons-material/Person';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import Link from 'next/link'

const Nav = (props: { name: string}) => {
  return (
    <div>
      {
        props.name ?
          <div className="flex bg-eblr-blue w-screen border-b border-eblr-outline gap-5 items-center">
            <div className="ml-5">
              <p className="font-mono text-6xl text-white">e</p>
            </div>

            <div className="flex grow justify-between">
              <div>
                <input placeholder="Search Eblr" className="transition indent-10 text-black rounded bg-eblr-search h-9 focus:bg-white" type="text"/>
              </div>

              <div className="flex justify-evenly gap-5 pr-5">
                <p className="flex items-end text-white">Welcome, {props.name}</p>
                <HomeIcon sx={{color: "white", width: "2rem", height: "auto"}}/>
                <ExploreSharpIcon sx={{color: "white", width: "2rem", height: "auto"}}/>
                <MailIcon sx={{color: "white", width: "2rem", height: "auto"}}/>
                <MoodIcon sx={{color: "white", width: "2rem", height: "auto"}}/>
                <FlashOnRoundedIcon sx={{color: "white", width: "2rem", height: "auto"}}/>
                <PersonIcon sx={{color: "white", width: "2rem", height: "auto"}}/>
                <div className="rounded bg-edit-bg w-12 h-8 flex justify-center justify-items-center">
                  <EditSharpIcon />
                </div>
              </div>
            </div>
          </div>

          : 

          <div className="flex bg-eblr-blue w-screen border-b border-eblr-outline gap-5 items-center">
            <div className="ml-5">
              <p className="font-mono text-6xl text-white">e</p>
            </div>

            <div className="flex grow justify-between">
              <div>
                <input placeholder="Search Eblr" className="transition indent-10 text-black rounded bg-eblr-search h-9 focus:bg-white" type="text"/>
              </div>

              <div className="flex justify-between">
                <div className="flex justify-evenly gap-5 pr-5">
                  <Link href="/api/auth/signin">
                    <button className="flex rounded bg-green-500 w-20 font-bold items-center justify-center">Log in</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      }

    </div>

  )
}

export default Nav
