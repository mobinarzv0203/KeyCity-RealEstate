import PropTypes from 'prop-types';

export default function Main({ main }) {
  if (!main) {
    return <div>Loading...</div>;
  }

  const isImageLeft = main.imagePosition === "left";

  return (
    <section id="main">
      <div className={`row ${isImageLeft ? "" : "reverse"}`}>
        <div className="col">
          <img src={main.image} alt="feature" className="image-prop" />
        </div>
        <div className="col">
          <h1>{main.title}</h1>
          <p>{main.subtitle}</p>
          {main.items && main.items.length > 0 && (
            <ul className='tick'>
              {main.items.map((item, index) => (
                <li key={index} className="items">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="button">
            <a href="#" className="btn" onClick={main.onButtonClick}>
            {main.buttonText}
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Main.propTypes = {
  main: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    imagePosition: PropTypes.oneOf(['left', 'right']).isRequired,
    items: PropTypes.arrayOf(PropTypes.string),
    onButtonClick: PropTypes.func.isRequired,
  }).isRequired,
};

