import CertificateIcon from "../assets/certificate.svg"
import { ReactComponent as Success } from "../assets/success.svg";

function Certificate() {
    const certificateClass = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    }
    const welcome = {
        fontSize: '1.25rem',
        fontWeight: '500',
        fontFamily:'Poppins'
    }
    const iconStyle = {
        marginRight: '1rem'
    }
  return (
    <div style={certificateClass}>
      <span style={welcome}>welcome to the new phase of your life</span>
      <Success />

      <button className="certificateButton">
        <img style={iconStyle} src={CertificateIcon} alt="Certificate" />
        <span>your certificate</span>
      </button>
      <button className="learnMore">Learn More</button>
    </div>
  );

}

export default Certificate;
