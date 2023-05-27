import "./Sidebar.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { useAppContext } from "../../Context";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  const handleSidebar = (e) => {
    const value = e.target.dataset.item;
      setIsSidebarOpen(false);
  };

  return (
    <div
      className={`sidebar-container ${
        isSidebarOpen ? "show-sidebar" : "hide-sidebar"
      }`}
    >
      <div className="sidebar-header">
      <h2>Food <span className="Rec">Recipe</span><span className="N"> Nutrition</span>   </h2>
        <button onClick={() => setIsSidebarOpen(false)}>
          <AiFillCloseSquare />
        </button>
      </div>
      <div className="side-items">
        <button onClick={handleSidebar} >
          Blog
        </button>
        <button onClick={handleSidebar} >
          About
        </button>
        <button onClick={handleSidebar} >
          Food Gallery
        </button>
        <button onClick={handleSidebar} >
          Contact
        </button>

     
      </div>
    </div>
  );
};
export default Sidebar;