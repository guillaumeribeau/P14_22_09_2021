import Header from "../components/Header";
import Forms from "../components/FormsEmployee.jsx";
import working from "../assets/images/working.png";
import teamWork from "../assets/images/teamwork.png";
import logo from "../assets/images/logo2.png";

const Home = () => {
  return (
    <>
      <h1 className="title">Create a New Employee</h1>
      <a href="/">
        {" "}
        <img className="logo" src={logo} alt="logo de Hrnet" />
      </a>

      <div className="container_home">
        <Header title="Current Employee" href="/employee" image={teamWork} />
        <div className="forms_container_img">
          <Forms />
          <img className="working_img" src={working} alt="working group" />
        </div>
      </div>
    </>
  );
};

export default Home;
