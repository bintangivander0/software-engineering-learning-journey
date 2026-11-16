const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [hasGenerated, setHasGenerated] = useState(false);

  const timeRef = useRef(null);

  const generateOTP = () => {
    const digits = "0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      result += digits[randomIndex];
    }

    setOtp(result);
    setTimeLeft(5);
    setHasGenerated(true);
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      if (timeRef.current) clearInterval(timeRef.current);
      return;
    }

    timeRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () =>  clearInterval(timeRef.current);
  }, [timeLeft]);

  const getTimerMessage = () => {
    if (!hasGenerated) return "";
    if (timeLeft > 0) return `Expires in: ${timeLeft} seconds`;
    return "OTP expired. Click the button to generate a new OTP.";
  }

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="polite">
        {getTimerMessage()}
      </p>
      <button 
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timeLeft > 0}
      >
        Generate OTP
      </button>
    </div>
  )
};