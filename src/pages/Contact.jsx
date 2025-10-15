// src/pages/Contact.jsx
const Contact = () => {
    return (
      <div className="p-5 bg-white rounded shadow-sm">
        <h1 className="text-success mb-3">Contact Us</h1>
        <form>
          <input className="form-control mb-3" placeholder="Your Name" />
          <input className="form-control mb-3" placeholder="Your Email" />
          <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  