import { useState } from "react";

const faqData = [
  {
    question: "How do I search for properties on website?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "Do you offer property management services?",
    answer:
      "Yes, we provide full-service property management for residential and commercial properties.",
  },
  {
    question: "Can I save my listings for future reference?",
    answer:
      "Yes, you can create an account and save your favorite listings for future reference.",
  },
  {
    question: "What information is provided in property?",
    answer:
      "Each property includes photos, price, description, amenities, and contact details.",
  },
  {
    question: "How can I schedule a property viewing?",
    answer:
      "Click on the 'Schedule Viewing' button on the property page to set up an appointment.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [classIsActive, setClassIsActive] = useState(false);

  const toggleFaqs = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClick = () => {
    setClassIsActive(true);
  }

  return(
    <section id="faqs">
      <div className="title">
        <h1>Frequently Asked Questions</h1>
        <div className="paragraph">
          <p>
            If there are question you want to ask. We will answer all your questions.
          </p>
        </div>
      </div>

      <div className="questions-answers">
        {faqData.map((item, index) => (
          <div key={index} className="container">
            <div onClick={() => toggleFaqs(index)}>
              <h3>
                {item.question}
                <span 
                  className={classIsActive ? "active-border" : "not-active-border"}
                  onClick={handleClick}
                >
                {openIndex === index ? "-" : "+"}
                </span>
              </h3>
              
            </div>
              {openIndex === index && (
              <p className="answer">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqs;