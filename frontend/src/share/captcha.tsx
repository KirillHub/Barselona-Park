import { useEffect, useRef, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

type CaptchaProps = {
  onVerify: () => void;
};

const Captcha = ({ onVerify }: CaptchaProps) => {
  const [isVerified, setIsVerified] = useState(false);

	// console.log(isVerified)

  const handleVerify = () => {
    onVerify();
  };

  return (
    <ReCAPTCHA
      sitekey='6Lcb-TYlAAAAAPZXgFRgVcuah4PPPIfwsFiwl3G_'
      onChange={handleVerify}
      theme='dark'
      hl='ru'
      style={{ transform: "scale(0.9)" }}
    />
  );
};

export default Captcha;
