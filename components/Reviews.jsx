import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Sarah Thompson",
    text: "Working with this team has been an incredible experience. They understood my vision and brought it to life with precision and care. My home renovation exceeded all my expectations.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    text: "The virtual tours and detailed property listings made finding our new home so much easier. The team was always available to answer our questions and guide us through the buying process.",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    text: "I recently sold my property through this company, and the process was seamless from start to finish. Their expertise and dedication made all the difference.",
    rating: 4,
  },
  {
    name: "Daniel Reed",
    text: "Professional, responsive, and knowledgeable. They helped me find my dream apartment and made the whole process easy and stress-free.",
    rating: 5,
  },
  {
    name: "Daniel Reed",
    text: "Professional, responsive, and knowledgeable. They helped me find my dream apartment and made the whole process easy and stress-free.",
    rating: 3,
  },
  {
    name: "Daniel Reed",
    text: "Professional, responsive, and knowledgeable. They helped me find my dream apartment and made the whole process easy and stress-free.",
    rating: 1,
  },
  {
    name: "Daniel Reed",
    text: "Professional, responsive, and knowledgeable. They helped me find my dream apartment and made the whole process easy and stress-free.",
    rating: 4,
  }
];


export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="review">

      <h1 className="title-review">What Our Clients Say</h1>

      <div className="container">
        <div className="review-comment"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {reviews.map((review, i) => (
            <div key={i} className="review-context">
              <div className="review-card">
                <div className="review-quote-icon">،،</div>
                <p className="review-text">{review.text}</p>
                <div className="review-stars">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="review-name">{review.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* نقطه‌ها */}
        <div className="review-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`review-dot ${
                i === currentIndex ? "active" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}



