import React from 'react'
import sponsor from '../../public/sponsor.svg'
import volunteer from '../../public/volunteer.svg'
import merch from '../../public/merch.svg'
import exhibitor from '../../public/exhibitor.svg'

const Sponsor = () => {
  return (
    <main className="xs:px-[16px] lg:px-0 xs:py-[56px] lg:py-[64px]">
      <div className="xs:block lg:flex lg:gap-[8px] justify-center">
        <a
          href="https://forms.gle/XjKNNAXgnUQovGJT7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="xs:pb-[8px] lg:pb-0" src={sponsor} alt="IMAGE" />
        </a>

        <a
          href="https://forms.gle/syMCs744ASFCWwe39"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={volunteer} alt="IMAGE" />
        </a>
      </div>
      <div className="xs:block lg:flex  gap-[8px] justify-center pt-[8px]">
        <img className="xs:pb-[8px] lg:pb-0" src={merch} alt="IMAGE" />
        <img src={exhibitor} alt="IMAGE" />
      </div>
    </main>
  );
}

export default Sponsor