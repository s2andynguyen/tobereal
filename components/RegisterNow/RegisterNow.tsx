'use client'

import './style.css'
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { SlArrowDown } from 'react-icons/sl'
function RegisterNow() {
    return (
        <div className='Gr-RegisterNow p-3 md:p-5'>
            <p className='text-register'>Register Now</p>
            <div className='Asset-Gr'>
                <Autocomplete
                    disablePortal
                    id='combo-box-demo'
                    options={top100Films}
                    sx={{
                        width: 348,
                        // height: 46,
                        '& .MuiOutlinedInput-root': {
                            padding: '0px',
                            borderRadius: '20px'
                        },
                        '& .css-i4bv87-MuiSvgIcon-root': { display: 'none' },
                        '& .MuiInputLabel-root': { color: 'black' }, // Color of the label
                        '& .MuiInputBase-root': { color: 'black' } // Color of the input text
                        // '& .MuiOutlinedInput-notchedOutline': { borderColor: 'red' } // Color of the input outline
                    }}
                    renderInput={(params) => (
                        <div className='relative'>
                            <TextField {...params} label='Asset type' />
                            <div className='absolute top-3 right-5'>
                                <SlArrowDown />
                            </div>
                        </div>
                    )}
                />

                <Autocomplete
                    disablePortal
                    id='combo-box-demo'
                    options={top100Films}
                    sx={{
                        width: 348,
                        // height: 46,
                        '& .MuiOutlinedInput-root': {
                            padding: '0px',
                            borderRadius: '20px'
                        },
                        '& .css-i4bv87-MuiSvgIcon-root': { display: 'none' },
                        '& .MuiInputLabel-root': { color: 'black' }, // Color of the label
                        '& .MuiInputBase-root': { color: 'black' } // Color of the input text
                        // '& .MuiOutlinedInput-notchedOutline': { borderColor: 'red' } // Color of the input outline
                    }}
                    renderInput={(params) => (
                        <div className='relative'>
                            <TextField {...params} label='Interior' />
                            <div className='absolute top-3 right-5'>
                                <SlArrowDown />
                            </div>
                        </div>
                    )}
                />

                <Autocomplete
                    disablePortal
                    id='combo-box-demo'
                    options={top100Films}
                    sx={{
                        width: 348,
                        // height: 46,
                        '& .MuiOutlinedInput-root': {
                            padding: '0px',
                            borderRadius: '20px'
                        },
                        '& .css-i4bv87-MuiSvgIcon-root': { display: 'none' },
                        '& .MuiInputLabel-root': { color: 'black' }, // Color of the label
                        '& .MuiInputBase-root': { color: 'black' } // Color of the input text
                        // '& .MuiOutlinedInput-notchedOutline': { borderColor: 'red' } // Color of the input outline
                    }}
                    renderInput={(params) => (
                        <div className='relative'>
                            <TextField {...params} label='Asset' />
                            <div className='absolute top-3 right-5'>
                                <SlArrowDown />
                            </div>
                        </div>
                    )}
                />
                <button className='REGISTERED-btn wrap-btn'>REGISTERED</button>
            </div>
        </div>
    )
}
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964
    }
]

export default RegisterNow
