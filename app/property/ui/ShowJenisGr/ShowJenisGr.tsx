import Link from 'next/link'
import './style.css'
import Image from 'next/image'
function ShowJenisGr({ data }: { data: any }) {
    return (
        <div className='wrap-tag items-center justify-evenly hover:shadow-gray'>
            <Image
                width={85}
                height={90}
                className='w-[85px] h-[auto]'
                src={data?.img}
                alt='Jenis img'
            />
            <h4 className='text-name-jenis'>{data?.name}</h4>
            <Link href={data.path} className='See-more-gr flex gap-5 items-center'>
                <span className="w-[110px] text-black text-[15px] font-medium font-['Montserrat'] hover:text-yellow-600">
                    See more
                </span>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='8'
                    viewBox='0 0 20 8'
                    fill='none'>
                    <path
                        d='M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM19.3536 4.35355C19.5488 4.15829 19.5488 3.84171 19.3536 3.64645L16.1716 0.464465C15.9763 0.269203 15.6597 0.269203 15.4645 0.464465C15.2692 0.659727 15.2692 0.976309 15.4645 1.17157L18.2929 4L15.4645 6.82843C15.2692 7.02369 15.2692 7.34027 15.4645 7.53553C15.6597 7.73079 15.9763 7.73079 16.1716 7.53553L19.3536 4.35355ZM1 4.5L19 4.5L19 3.5L1 3.5L1 4.5Z'
                        fill='black'
                    />
                </svg>
            </Link>
        </div>
    )
}

export default ShowJenisGr
