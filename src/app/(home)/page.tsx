"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image';

export default function Home() {
  const {data} = useSession();

  console.log(data)

  return (
    <div className='p-5'>
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className='h-auto w-full'
        sizes="100vw"
        alt="Até 55% Desconto só esse mÊs"
      />
    </div>
  )
}
