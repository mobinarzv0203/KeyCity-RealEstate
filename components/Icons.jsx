
const logos = [
  { src: "/src/img/houses/logo1.jpg", alt: "Real Estate" },
  { src: "/src/img/houses/logo2.jpg", alt: "Company 2" },
  { src: "/src/img/houses//logo3.jpg", alt: "Bauhouse Real Estate" },
  { src: "/src/img/houses/logo4.jpg", alt: "Accusaf" },
  { src: "/src/img/houses/logo5.jpg", alt: "Company 5" },
  { src: "/src/img/houses/logo6.jpg", alt: "Business Name" },
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