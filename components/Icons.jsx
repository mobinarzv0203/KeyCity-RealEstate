
const logos = [
  { src: "/public/images/houses/logo1.jpg", alt: "Real Estate" },
  { src: "/public/images/houses/logo2.jpg", alt: "Company 2" },
  { src: "/public/images/houses//logo3.jpg", alt: "Bauhouse Real Estate" },
  { src: "/public/images/houses/logo4.jpg", alt: "Accusaf" },
  { src: "/public/images/houses/logo5.jpg", alt: "Company 5" },
  { src: "/public/images/houses/logo6.jpg", alt: "Business Name" },
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