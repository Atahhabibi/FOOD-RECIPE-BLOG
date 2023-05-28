import "./Sidebar.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { useAppContext } from "../../Context";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  const history = useHistory();

  const handleSidebar = (e) => {
    const value = e.target.dataset.id;
    setIsSidebarOpen(false);

    if (value) {
      history.push(value);
    }
  };

  return (
    <div
      className={`sidebar-container ${
        isSidebarOpen ? "show-sidebar" : "hide-sidebar"
      }`}
    >
      <div className="sidebar-header">
        <h2>
          Food <span className="Rec">Recipe</span>
          <span className="N"> Nutrition</span>{" "}
        </h2>
        <button onClick={() => setIsSidebarOpen(false)}>
          <AiFillCloseSquare />
        </button>
      </div>
      <div className="side-items">
        <button onClick={handleSidebar} data-id="/">
          Blog
        </button>
        <button onClick={handleSidebar} data-id="/about">
          About
        </button>
        <button onClick={handleSidebar} data-id="/gallery">
          Food Gallery
        </button>
        <button onClick={handleSidebar} data-id="/contact">
          Contact
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
