'use clent'
import './style.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function OwnerData() {
    return (
        <div className="User">
            <form method="post" className="form_group">
                <div className="p-3">
                    <label htmlFor="name" className="form_control">Full Name</label>
                    <input className="text" type="text" id="name" placeholder="Name" />
                </div>
                <div className="p-3">
                    <label htmlFor="phone" className="form_control">TelePhone</label>
                    <input className="text" type="number" id="phone" placeholder="telepon" />
                </div>
                <div className="p-3">
                    <label htmlFor="email" className="form_control">Email</label>
                    <input className="text" type="text" id="Email" placeholder="Email" />
                </div>
                <div className="p-3">
                    <label htmlFor="whatsapp" className="form_control">Whatsapp</label>
                    <input className="text" type="text" id="Whatsapp" placeholder="Whatsapp" />
                </div>
            </form>

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={City}
                sx={{
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        padding: '10',
                        borderRadius: '30px',
                        margin:'10px'
                    },
                }}
                renderInput={(params) => <TextField {...params} label="City" placeholder="City" />} />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={TOBEREAL}
                sx={{
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        padding: '10px',
                        borderRadius: '30px',
                        margin: '10px'
                    },
                }}
                renderInput={(params) => <TextField {...params} label="How did you know about TO BE REAL?" placeholder="Select Source Type" />} />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={City}
                sx={{
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        padding: '10',
                        borderRadius: '30px',
                        margin: '10px'
                    },
                }}
                renderInput={(params) => <TextField {...params} label="Property Type" placeholder="Property Type" />} />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={City}
                sx={{
                    width: 300,
                    '& .MuiOutlinedInput-root': {
                        padding: '10',
                        borderRadius: '30px',
                        margin: '10px'
                    },
                }}
                renderInput={(params) => <TextField {...params} label="Property Condition" placeholder="Property Type" />} />
        </div>
    );
}

const City = [
    { label: 'Hồ Chí Minh' },
    { label: 'An Giang' },
    { label: 'Vũng Tàu' },
    { label: 'Bạc Liêu' },
    { label: 'Nha Trang' },
    { label: 'Quảng Ngãi' },
    { label: 'Đắk Lắk' },
    { label: 'Hà Nội' },
    { label: 'Thanh Hoá' },
    { label: 'Sapa' },
    { label: 'Phú Quốc' },
    { label: 'Trường Sa' },
    { label: 'Hoàng Sa' },
];
const TOBEREAL = [
    { label: 'Trường Sa' },
    { label: 'Hoàng Sa' },
];


