import React, { CSSProperties } from 'react'
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
    theme: string
}

const links = [
    {name: 'home', path: '/', icon: <AiTwotoneHome className='text-2xl font-semibold'/>},
    {name: 'portfolio', path: '/portfolio', icon: <BsFillLayersFill className=" text-2xl font-semibold " />},
    {name: 'achievements', path: '/achievements', icon: <BsFillTrophyFill className=" text-2xl font-semibold" />}
]

export default function MobileDrawer({open, setOpen, theme}: MobileDrawerProps) {
    const currentPath = usePathname()



  return (
    <Drawer anchor='left' open={open} onClose={setOpen}>
        <section className={styles({
            'h-screen': true,
            'bg-slate-100 text-zinc-700': theme === 'corporate',
            'bg-black text-gray-50': theme === 'dracula',
        })}>


        <div className='flex items-center justify-end w-screen px-[1rem] py-[2rem] border-b-2 shadow-lg'>
        <button onClick={() => setOpen(!open)}>
            <ClearRoundedIcon className='text-[2.5rem]'/>
        </button>
        </div>
        <div className='px-2'>
            {links.map((link, index) => (
                <Link href={link.path} key={index}>

                        <p onClick={()=> setOpen(false)} className ={styles({
                            'flex justify-start  py-[2rem] capitalize w-full items-center transition-colors pl-[1rem]': true,
                            'border-b-[1px] w-full space-x-3 ': true,
                            'text-[1.5rem] font-[500] rounded-sm': true,
                            'bg-green-300 hover:bg-green-300 text-black': currentPath === link.path && theme === 'corporate',
                            'bg-gray-100  text-black hover:text-zinc-600': currentPath === link.path && theme === 'dracula',
                            'hover:bg-green-200': true && theme=== 'corporate',
                            'hover:bg-slate-100  hover:text-black': true && theme=== 'dracula',
                        })}>
                          <span>{link.icon}</span> <span>{link.name}</span> 
                        </p>

                </Link>
            ))
            }
        </div>
            
           
        </section>
    </Drawer>
  )
}





