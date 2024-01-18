'use client'
import './styles.css'
import React, { useState } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

const PostingSell = () => {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(true);

    const handleCheckbox1Change = () => {
        setCheckbox1(!checkbox1);
        setCheckbox2(false);
    };

    const handleCheckbox2Change = () => {
        setCheckbox2(!checkbox2);
        setCheckbox1(false);
    };
    //textarea
    const [imageSrc, setImageSrc] = useState(null);
    const [textareaValue, setTextareaValue] = useState('');

        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImageSrc(reader.result);
        };

        reader.readAsDataURL(file);

    const { getRootProps, getInputProps } = useDropzone({ ondrop });

    return (
        <div className="sale">
            <div className="menu_sell">
                <label className="menu_read">
                    <input
                        type="checkbox"
                        checked={checkbox1}
                        onChange={handleCheckbox1Change}
                    />
                    <p> Real estate </p>
                </label>
                <label className="menu_read">
                    <input
                        type="checkbox"
                        checked={checkbox2}
                        onChange={handleCheckbox2Change}
                    />
                    <p> Land for sale </p>
                </label>
            </div>
            {checkbox1 &&
                <div className="sale">
                    <div className="input_container">
                        <div {...getRootProps()} style={{ marginBottom: '20px', marginTop: '20px' }}>
                            <input {...getInputProps()} />
                            <p>Drag & drop an image here, or click to select one.</p>
                        </div>

                        <textarea
                            value={textareaValue}
                            onChange={(e) => setTextareaValue(e.target.value)}
                            placeholder="Max 10 words"
                            maxLength={10}
                        />

                        {imageSrc && <Image src={imageSrc} />}
                        <div className="camera-icon">
                            <Image
                                src="/dashboard/images/posting/img/icon_camera.png"
                                alt=""
                                className="w-[55px] h-[41px]"
                                width={55}
                                height={41}
                            />
                        </div>
                    </div>
                    <div className="text_legal">
                        <span>Legal images</span>
                        <p>Update images to a maximum of two images</p>
                        <img src={src} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '400px' }} />
                    </div>
                </div>
            }
            {checkbox2 && <p>Trang cần hiển thị khi Checkbox 2 được chọn</p>}
        </div >
    );
};

export default PostingSell;