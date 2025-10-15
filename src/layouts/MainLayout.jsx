import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div
      className="d-flex flex-column min-vh-100" // chiếm toàn chiều cao màn hình
      style={{ overflowX: "hidden" }} // tránh bị thanh cuộn ngang
    >
      {/* Navbar */}
      <Navbar />

      {/* Nội dung chính */}
      <div className="container-fluid p-0">
  <div className="row g-0" style={{ height: "100vh" }}>
    <div className="col-2 bg-secondary text-white d-flex align-items-center justify-content-center">
      1 of 3
    </div>

    <div className="col-8 bg-primary text-white d-flex align-items-center justify-content-center">
      {children}
    </div>

    <div
      className="col-2 text-white d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "purple" }}
    >
      3 of 3
    </div>
  </div>
</div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
