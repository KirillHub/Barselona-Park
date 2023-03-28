import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

type CaptchaProps = {
  onVerify: () => void;
}

const Captcha = ({onVerify}: CaptchaProps) => {
  const [isVerified, setIsVerified] = useState(false);

	const handleVerify = () => {
    onVerify();
  };


  return (
    <div>
      <ReCAPTCHA
        sitekey='6Lcb-TYlAAAAAPZXgFRgVcuah4PPPIfwsFiwl3G_'
        onChange={handleVerify}
        theme='dark'
				
        hl='ru'
      />
      {isVerified && <p>Капча пройдена</p>}
    </div>
  );
};

export default Captcha;
