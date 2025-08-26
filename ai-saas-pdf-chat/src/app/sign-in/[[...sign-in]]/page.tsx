import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
    return <div className='w-screen min-h-screen bg-radial from-teal-100 to-rose-100'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'><SignIn /></div></div >
}