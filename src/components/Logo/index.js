import logo from '../../assets/img/Demeter (1).png';
// import logo from "../../assets/img/DemeterLogoTransparent.png";

export default function Logo() {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="demeter-logo"
        style={{
          backgroundColor: '#fba922',
          paddingTop: '15px',
          paddingBottom: '15px',
          paddingLeft: '5px',
          paddingRight: '5px',
          borderRadius: '10%',
        }}
      />
    </div>
  );
}
