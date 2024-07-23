'use client'

import { useState, useRef, useEffect } from 'react'
import { Logo, LogoMobile } from '../components/eggsLogo'
import X from '../components/xIcon'
import {
  ButtonIconCaps,
  ButtonIcon,
  ButtonIconMobile,
} from '../components/buttonIcon'
import {
  blueModalNumberStrings as modalNumberStrings,
  bowserParsed,
} from '../utils'

export default function Blue() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [openModalNumberString, setOpenModalNumberString] =
    useState<string>('1')
  const modalRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const outsideModalClickHandler = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalVisible(false)
      }
    }
    const container = document.getElementById('container')
    container?.addEventListener('click', outsideModalClickHandler)
    return () => {
      container?.removeEventListener('click', outsideModalClickHandler)
    }
  }, [modalRef])

  const handleClickShow = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const modalNumber = (event.target as HTMLButtonElement).innerHTML
      .split(' ')[2]
      .split('')[3]
    setOpenModalNumberString(modalNumber)
    setModalVisible(true)
    event.stopPropagation()
  }

  const handleClickX = () => {
    setModalVisible(false)
  }

  interface ModalProps {
    modalNumberString: string
  }

  const Modal = ({ modalNumberString }: ModalProps) => {
    return (
      <>
        <div className='fixed w-screen aspect-[1/2] bg-gray-300 opacity-50'></div>
        <div
          ref={modalRef}
          className='m-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[640px] md:h-[498px] w-[339px] h-[505px] bg-white rounded-xl'
        >
          {/* NOTE: Desktop Modal 2 */}
          {bowserParsed() === 'desktop' && modalNumberString === '2' && (
            <>
              <div className='bg-[#687CEB] rounded-t-xl relative md:h-[224px] h-[181px] text-white pl-12 pt-12 pb-[43px]'>
                <div className='absolute bottom-0 right-0 '>
                  <Logo />
                </div>
                <div className='flex-col space-y-3'>
                  <h2 className='text-2xl'>Modal {modalNumberString}</h2>
                  <p className='text-s'>Lorem Ipsum is fun</p>
                  <p className='text-l'>
                    Friday, Jun 04, 2023 <br />
                    09:00pm - 09:30pm PST{' '}
                  </p>
                </div>
              </div>

              <div className='relative m-6'>
                <p className='text-s'>Lorem Ipsum</p>
                <button
                  className='absolute right-0 top-0'
                  onClick={handleClickX}
                >
                  <X />
                </button>
                <p className='text-[#687CEB] text-purp2'>Lorem Ipsum</p>
                <div className='mt-4'>
                  <p className='text-slight'>
                    {`Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur.`}
                  </p>
                </div>
              </div>

              <div className='border-t border=[#E5E7EB]'>
                <div className='mx-6 mb-6'>
                  <div className='mt-6 space-y-2.5 text-center'>
                    <p className='text-m'>Lorem Ipsum is simply dummy text.</p>
                    <ButtonIcon />
                  </div>
                </div>
              </div>
            </>
          )}
          {/* NOTE: Desktop Modal 3 */}
          {bowserParsed() === 'desktop' && modalNumberString === '3' && (
            <>
              <div className='bg-[#687CEB] rounded-t-xl relative md:h-[224px] h-[181px] text-white pl-12 pt-12 pb-[43px]'>
                <div className='absolute bottom-0 right-0 '>
                  <Logo />
                </div>
                <div className='flex-col space-y-3'>
                  <h2 className='text-2xl'>Modal {modalNumberString}</h2>
                  <p className='text-m'>Lorem Ipsum is wack</p>
                  <p className='text-l'>
                    Wednesday, Jun 21, 2023
                    <br />
                    07:00pm - 07:30pm EST{' '}
                  </p>
                </div>
              </div>

              <div className='relative m-6'>
                <p className='text-llight'>LOREM IPSUM</p>
                <button
                  className='absolute right-0 top-0'
                  onClick={handleClickX}
                >
                  <X />
                </button>
                <p className='text-[#687CEB] text-purp3'>Lorem Ipsum</p>
                <div className='mt-4'>
                  <p className='text-s'>
                    {`Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit`}
                  </p>
                </div>
              </div>

              <div className='border-t border=[#E5E7EB]'>
                <div className='mx-6 mb-6'>
                  <div className='mt-6 space-y-2.5 text-center'>
                    <p className='text-s'>Lorem Ipsum is simply dummy text.</p>
                    <ButtonIcon />
                  </div>
                </div>
              </div>
            </>
          )}
          {/* NOTE: Tablet Modal 2 */}
          {bowserParsed() === 'tablet' && modalNumberString === '2' && (
            <>
              <div className='bg-[#687CEB] rounded-t-xl relative md:h-[224px] h-[181px] text-white pl-12 pt-12 pb-[43px]'>
                <div className='absolute bottom-0 right-0 '>
                  <Logo />
                </div>
                <div className='flex-col space-y-3'>
                  <h2 className='text-2xl'>Modal {modalNumberString}</h2>
                  <p className='text-s'>Lorem Ipsum is fun</p>
                  <p className='text-l'>
                    Friday, Jun 04, 2023 <br />
                    09:00pm - 09:30pm PST{' '}
                  </p>
                </div>
              </div>

              <div className='relative m-6'>
                <p className='text-s'>Lorem Ipsum</p>
                <button
                  className='absolute right-0 top-0'
                  onClick={handleClickX}
                >
                  <X />
                </button>
                <p className='text-[#687CEB] text-purp1'>Lorem Ipsum</p>
                <div className='mt-4'>
                  <p className='text-l'>
                    {`Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur.`}
                  </p>
                </div>
              </div>

              <div className='border-t border=[#E5E7EB]'>
                <div className='mx-6 mb-6'>
                  <div className='mt-6 space-y-2.5 text-center'>
                    <p className='text-s'>Lorem Ipsum is simply dummy text.</p>
                    <ButtonIcon />
                  </div>
                </div>
              </div>
            </>
          )}
          {/* NOTE: Tablet Modal 3 */}
          {bowserParsed() === 'tablet' && modalNumberString === '3' && (
            <>
              <div className='bg-[#687CEB] rounded-t-xl relative md:h-[224px] h-[181px] text-white pl-12 pt-12 pb-[43px]'>
                <div className='absolute bottom-0 right-0 '>
                  <Logo />
                </div>
                <div className='flex-col space-y-3'>
                  <h2 className='text-2xl'>Modal {modalNumberString}</h2>
                  <p className='text-m'>Lorem Ipsum is wack</p>
                  <p className='text-l'>
                    Wednesday, Jun 21, 2023
                    <br />
                    07:00pm - 07:30pm EST{' '}
                  </p>
                </div>
              </div>

              <div className='relative m-6'>
                <p className='text-slight'>Lorem Ipsum</p>
                <button
                  className='absolute right-0 top-0'
                  onClick={handleClickX}
                >
                  <X />
                </button>
                <p className='text-[#687CEB] text-purp3'>Lorem Ipsum</p>
                <div className='mt-4'>
                  <p className='text-s'>
                    {`Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit`}
                  </p>
                </div>
              </div>

              <div className='border-t border=[#E5E7EB]'>
                <div className='mx-6 mb-6'>
                  <div className='mt-6 space-y-2.5 text-center'>
                    <p className='text-s'>Lorem Ipsum is simply dummy text.</p>
                    <ButtonIcon />
                  </div>
                </div>
              </div>
            </>
          )}
          {/* NOTE: Mobile Modal 2 */}
          {bowserParsed() === 'mobile' && modalNumberString === '2' && (
            <>
              <div className='bg-[#687CEB] rounded-t-xl relative md:h-[224px] h-[181px] text-white pl-12 pt-12 pb-[43px]'>
                <div className='absolute bottom-0 right-0 '>
                  <LogoMobile />
                </div>
                <div className='flex-col space-y-3'>
                  <h2 className='text-lmobile'>Modal {modalNumberString}</h2>
                  <p className='text-s'>Lorem Ipsum is fun</p>
                  <p className='text-s'>
                    Friday, Jun 04, 2023 <br />
                    09:00pm - 09:30pm PST{' '}
                  </p>
                </div>
              </div>

              <div className='relative m-6'>
                <p className='text-s'>Lorem Ipsum</p>
                <button
                  className='absolute right-0 top-0'
                  onClick={handleClickX}
                >
                  <X />
                </button>
                <p className='text-purp1'>Lorem Ipsum</p>
                <div className='mt-4'>
                  <p className='text-s'>
                    {`Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur.`}
                  </p>
                </div>
              </div>

              <div className='border-t border=[#E5E7EB]'>
                <div className='mx-6 mb-6'>
                  <div className='mt-6 space-y-2.5 text-center'>
                    <p className='text-s'>Lorem Ipsum is simply dummy text.</p>
                    <ButtonIconMobile />
                  </div>
                </div>
              </div>
            </>
          )}
          {/* NOTE: Mobile Modal 3 */}
          {bowserParsed() === 'mobile' && modalNumberString === '3' && (
            <>
              <div className='bg-[#687CEB] rounded-t-xl relative md:h-[224px] h-[181px] text-white pl-12 pt-12 pb-[43px]'>
                <div className='absolute bottom-0 right-0 '>
                  <LogoMobile />
                </div>
                <div className='flex-col space-y-3'>
                  <h2 className='text-lmobile'>Modal {modalNumberString}</h2>
                  <p className='text-s'>Lorem Ipsum is wack</p>
                  <p className='text-s'>
                    Wednesday, Jun 21, 2023
                    <br />
                    07:00pm - 07:30pm EST{' '}
                  </p>
                </div>
              </div>

              <div className='relative m-6'>
                <p className='text-[#687CEB] text-s'>Lorem Ipsum</p>
                <button
                  className='absolute right-0 top-0'
                  onClick={handleClickX}
                >
                  <X />
                </button>
                <p className='text-l'>Lorem Ipsum</p>
                <div className='mt-4'>
                  <p className='text-l'>
                    {`Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit`}
                  </p>
                </div>
              </div>

              <div className='border-t border=[#E5E7EB]'>
                <div className='mx-6 mb-6'>
                  <div className='mt-6 space-y-2.5 text-center'>
                    <p className='text-s'>Lorem Ipsum is simply dummy text.</p>
                    <ButtonIconMobile />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    )
  }

  return (
    <div
      className={`w-screen aspect-[1/2] bg-blue-700 relative`}
      id='container'
    >
      {modalVisible && <Modal modalNumberString={openModalNumberString} />}

      <div className='flex-col h-1/4 text-white p-4'>
        <div className='flex w-full justify-center'>
          <h1>BLUE</h1>
        </div>
        <div className='flex h-full justify-evenly items-end'>
          {modalNumberStrings.map((modalNumberString) => (
            <button key={modalNumberString} onClick={handleClickShow}>
              Modal {modalNumberString}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
