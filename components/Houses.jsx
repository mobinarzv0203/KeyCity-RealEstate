import { useState, useEffect } from "react";

const housesData = [
  {
    id: 1,
    title: 'JRC Sanzio, Sarjapur Bengaluru India',
    beds: 4,
    baths: 2,
    size: '67.5 m²',
    price: '₹1.6 Cr - 1.87 Cr',
    image: '/images/house1.jpg',
    tag: 'popular',
    type: 'sale',
  },
  {
    id: 2,
    title: 'JRC Wild, Sarjapur Bengaluru India',
    beds: 4,
    baths: 2,
    size: '67.5 m²',
    price: '₹1.6 Cr - 1.87 Cr',
    image: '/images/house2.jpg',
    tag: 'popular',
    type: 'sale',
  },
  {
    id: 3,
    title: 'Samhita, Sarjapur Bengaluru India',
    beds: 4,
    baths: 2,
    size: '67.5 m²',
    price: '₹1.6 Cr - 1.87 Cr',
    image: '/images/house3.jpg',
    tag: 'popular',
    type: 'rent',
  },
  {
    id: 4,
    title: 'Abhigna, Sarjapur Bengaluru India',
    beds: 4,
    baths: 2,
    size: '67.5 m²',
    price: '₹1.6 Cr - 1.87 Cr',
    image: '/images/house4.jpg',
    type: 'rent',
  },
  {
    id: 5,
    title: 'DSR, Sarjapur Bengaluru India',
    beds: 4,
    baths: 2,
    size: '67.5 m²',
    price: '₹1.6 Cr - 1.87 Cr',
    image: '/images/house5.jpg',
    type: 'sale',
  },
  {
    id: 6,
    title: 'Sattva, Sarjapur Bengaluru India',
    beds: 4,
    baths: 2,
    size: '67.5 m²',
    price: '₹1.6 Cr - 1.87 Cr',
    image: '/images/house6.jpg',
    type: 'rent',
  },
  {
    id: 7,
    title: 'New Villa, Bengaluru',
    beds: 3,
    baths: 2,
    size: '60 m²',
    price: '₹1.4 Cr - 1.6 Cr',
    image: '/images/house7.jpg',
    type: 'sale',
  },
];

const Houses = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProperties, setVisibleProperties] = useState([]);

  useEffect(() => {
    const filtered = filter === 'all'
      ? housesData
      : housesData.filter(p => p.type === filter);
    setVisibleProperties(filtered.slice(0, 6));
  }, [filter]);

  const handleFilterClick = (type) => {
    setFilter(type);
  };

  return (
    <section className="property-section">
      <div className="property-header">
        <h2 className="section-title">Discover your ideal home</h2>
        <div className="filter-buttons">
          <button
            onClick={() => handleFilterClick('sale')}
            className={`filter-button ${filter === 'sale' ? 'active' : ''}`}
          >
            For Sale
          </button>
          <button
            onClick={() => handleFilterClick('rent')}
            className={`filter-button ${filter === 'rent' ? 'active' : ''}`}
          >
            For Rent
          </button>
        </div>
      </div>

      <div className="property-grid">
        {visibleProperties.map((p) => (
          <div key={p.id} className="property-card">
            <div className="image-container">
              <img src={p.image} alt={p.title} className="property-image"/>
              {p.tag === 'popular' && (
                <span className="popular-tag">⭐ POPULAR</span>
              )}
              <button className="favorite-button">❤️</button>
            </div>
            <div className="property-details">
              <h3 className="property-title">{p.title}</h3>
              <div className="property-info">
                <span>🛏 {p.beds} Beds</span>
                <span>🛁 {p.baths} Bathrooms</span>
                <span>📐 {p.size}</span>
              </div>
              <div className="property-footer">
                <p className="property-price">{p.price}</p>
                <button className="btn-loc">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="see-all">
        <button className="see-all-button">
          See All Properties ↗
        </button>
      </div>
    </section>

  );
};

export default Houses;


