import { forwardRef } from 'react'
interface Props {
  className?: string
}

const NibiruWording = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <div
    ref={ref}
    className={
      'font-phonk text-[21.5vw] text-center text-gray-1000 leading-none -mt-7'
    }
  >
    <span
      className={props.className + ' hidden sm:block absolute w-full opacity-0'}
      id="js-word-gradient"
    >
      <span className="inline-block">N</span>
      <span className="inline-block">I</span>
      <span className="inline-block">B</span>
      <span className="inline-block">I</span>
      <span className="inline-block">R</span>
      <span className="inline-block">U</span>
    </span>
    <div
      className={'hidden sm:block absolute w-full overflow-hidden'}
      id="js-word"
    >
      <span className="inline-block js-word_letter ">N</span>
      <span className="inline-block js-word_letter ">I</span>
      <span className="inline-block js-word_letter ">B</span>
      <span className="inline-block js-word_letter ">I</span>
      <span className="inline-block js-word_letter ">R</span>
      <span className="inline-block js-word_letter ">U</span>
    </div>
  </div>
))

NibiruWording.displayName = 'Search'
export default NibiruWording
