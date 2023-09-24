'use client'
import React from 'react'
import { User } from 'next-auth'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { Button } from './ui/button'
import {LogOut} from 'lucide-react'
import UserAvatar from './UserAvatar'

type Props = {
    user: Pick<User, 'id' | 'name' | 'email' | 'image'>
}

const UserAccountNav = ({user}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            {/*User avatar*/}
            {/* <Button>hi</Button> */}
            <UserAvatar user={user} />

        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-white' align='end'>
            {/*User account dropdown content*/}
            <div className='flex items-center justify-start gap-2 p-2'>
                <div className='flex flex-col space-y-1 leading-none'>
                    {user.name && <p className='font-medium'>{user.name}</p>}
                    {user.email && <p className='w-[200px] truncate text-sm text-amber-900'>{user.email}</p>}
                </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link href='/'>Meow</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={(e)=>{
                e.preventDefault()
                signOut().catch(console.error)
            }} className='text-amber-900 cursor-pointer'>
                Sign Out
                <LogOut className='inline-block w-4 h-4 ml-2'/>
            </DropdownMenuItem>
            
        </DropdownMenuContent>    
    </DropdownMenu>    
  )
}

export default UserAccountNav