export default function Footer() {
  return (
    <footer id="footer">

      <div className="container">
        <div className="col-1">
          <h4>KeyCity</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim obcaecati quia quod, architecto quae ipsum, omnis iste nostrum aperiam debitis optio suscipit repellendus fuga.
          </p>
          <ul>
            <a href="#"><li className="fab fa-instagram"></li></a>
            <a href="#"><li className="fab fa-facebook"></li></a>
            <a href="#"><li className="fab fa-telegram"></li></a>
          </ul>
        </div>

        <div className="col-2">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">
                Property Listings
              </a>
            </li>
            <li>
              <a href="#">
                Financing Options
              </a>
            </li>
            <li>
              <a href="#">
                Schedule a Viewing
              </a>
            </li>
            <li>
              <a href="#">
                Sell Your Property
              </a>
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h4>Customer Support</h4>
          <ul>
            <li>
              <a href="#">
                FAQs
              </a>
            </li>
            <li>
              <a href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#">
                Customer Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <hr />
      <div className="info">
        <p>&copy; 2025 KeyCity. All rights reserved.</p>
        <ul>
          <li>
            <a href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#">
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}