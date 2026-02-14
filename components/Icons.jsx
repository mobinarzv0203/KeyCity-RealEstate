
const logos = [
  { src: " /images/logo1.jpg", alt: "Real Estate" },
  { src: " /images/logo2.jpg", alt: "Company 2" },
  { src: " /images/logo3.jpg", alt: "Bauhouse Real Estate" },
  { src: " /images/logo4.jpg", alt: "Accusaf" },
  { src: " /images/logo5.jpg", alt: "Company 5" },
  { src: " /images/logo6.jpg", alt: "Business Name" },
];

const Icons = () => {

  return(
    <section id="logo">
      <h1>Trusted by the world's best </h1>
      
          <div className="pics">
          {logos.map((logo, index) => (
            <a key={index} href="#">
              <img src={logo.src} alt={logo.alt} />
            </a>
          ))}
          </div>
    </section>
  );
}

export default Icons;