import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import Image from 'next/image';
import React from 'react';
import HeaderItem from './HeaderItem';

const Header = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-row flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRANDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTION " Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="USER" Icon={UserIcon} />
        </div>
        <Image 
        src="https://links.papareact.com/ua6" 
        width={170} 
        height={70} 
        alt="hulu"
        className='object-contain'
        />
      </header>
    </>
  )
}

export default Header
