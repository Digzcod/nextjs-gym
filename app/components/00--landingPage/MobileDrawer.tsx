import React from 'react'
import Link from 'next/link'
import { Button, Drawer } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { AiTwotoneHome } from 'react-icons/ai';
import { BsFillLayersFill, BsFillTrophyFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import styles from 'classnames';

interface MobileDrawerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
    {name: 'home', path: '/', icon: <AiTwotoneHome className='text-2xl font-semibold'/>},
    {name: 'portfolio', path: '/portfolio', icon: <BsFillLayersFill className=" text-2xl font-semibold " />},
    {name: 'achievements', path: '/achievements', icon: <BsFillTrophyFill className=" text-2xl font-semibold" />}
]

export default function MobileDrawer({open, setOpen}: MobileDrawerProps) {
    const currentPath = usePathname()



  return (
    <Drawer anchor='left' open={open} onClose={setOpen} className='bg-zinc-400 w-screen sm:hidden px-2'>
        <div className='flex items-center w-screen px-[1rem] py-[1rem]'>
        <h1 className='mr-auto '>Drawer</h1> 
        <button onClick={() => setOpen(!open)}>
            <ClearRoundedIcon className='text-[2.5rem]'/>
        </button>
        </div>
        <div className='px-2'>
            {links.map((link, index) => (
                <Link href={link.path} key={index}>

                        <p onClick={()=> setOpen(false)} className ={styles({
                            'flex justify-start  py-[2rem] capitalize w-full items-center transition-colors pl-[1rem]': true,
                            'border-b-[1px] w-full rounded-md': true,
                            'text-[1.5rem] font-[500]': true,
                            'bg-green-300 hover:bg-green-300': currentPath === link.path,
                            'hover:text-zinc-900 hover:font-medium hover:w-full hover:': true,
                            'hover:bg-green-200': true,

                            
                            
                        })}>
                          <span className='mr-3'>{link.icon}</span> <span>{link.name}</span> 
                        </p>
                            {/* <div className='w-screen'>
                    </div> */}
                </Link>
            ))
            }
        </div>
            
           
    </Drawer>
  )
}
