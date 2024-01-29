"use client"
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Capcha = () => {
    const [captcha, setCaptcha] = useState<string | null>();

  return (
    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} className="mx_auto" onChange={setCaptcha} />

  )
}

export default Capcha