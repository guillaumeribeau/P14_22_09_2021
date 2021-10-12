import Navigation from "../components/Navigation";
import Forms from "../components/FormsEmployee.jsx";
import working from "../assets/images/working.png";
import teamWork from "../assets/images/teamwork.png";
import logo from "../assets/images/logo2.png";

const Home = () => {
  return (
    <>
      <h1 className="title">Create a New Employee</h1>

      <div className="header_container">
        <a href="/">
          {" "}
          <img className="logo" src={logo} alt="logo de Hrnet" />
        </a>

        <Navigation
          title="Current Employee"
          href="/employee"
          image={teamWork}
        />
      </div>

      <div className="container_home">
        <div className="forms_container_img">
          <Forms />
          <img className="working_img" src={working} alt="working group" />
        </div>
      </div>
    </>
  );
};

export default Home;
