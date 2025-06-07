import Main from "./Main.jsx"; // چون حالا default export کردیم

export default function MainSection() {
  const handleClick = (label) => {
    console.log(`${label} clicked`);
  };

  const sections = [
    {
      title: "Empowering Tomorrow's Communities",
      subtitle:
        "Join us in shaping a brighter tomorrow. At our core, we’re dedicated to building more than structures; we’re crafting communities and fostering growth.",
      items: [],
      image: "/src/img/houses/Real-State-Team1.jpg",
      buttonText: "Explore Now",
      imagePosition: "left",
      onButtonClick: () => handleClick("Mission")
    },
    {
      title: "Elevate Your Living Space with Expert Renovations",
      subtitle:
        "Transform Your Home into Your Dream Residence with Our Specialized Renovation Services",
      items: [
        "Expert Craftsmanship",
        "Tailored Solutions",
        "Premium Materials",
        "Innovative Designs",
        "Transparent Communication",
        "Satisfaction Guaranteed"
      ],
      image: "/src/img/houses/Renovation1.jpg",
      buttonText: "Get Started",
      imagePosition: "right",
      onButtonClick: () => handleClick("Renovation")
      
    },
    {
      title: "Explore Our Latest Listings Available for Purchase Today",
      subtitle:
        "Discover Your Dream Home Among Our Handpicked Selection of Properties for Sale",
      items: [
        "Fresh Listings Daily",
          "Diverse Range of Options",
          "Prime Locations",
          "Detailed Descriptions",
          "Virtual Tours Available",
          "Expert Guidance"
      ],
      image: "/src/img/houses/Explore1.jpg",
      buttonText: "Explore Now",
      imagePosition: "left",
      onButtonClick: () => handleClick("Listings")
      
    }
  ];

  return (
    <>
      {sections.map((main, index) => (
        <Main key={index} main={main} />
      ))}
    </>
  );
}
