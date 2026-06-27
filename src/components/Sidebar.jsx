import logo from "../assets/logo.png";

import {
  House,
  Search,
  BookOpen,
  List,
  Users,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo">
    <img src={logo} alt="Vinylog Logo" />
</div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/">
    <House size={20} />
    <span>Home</span>
</NavLink>

        <NavLink to="/explore">
          <Search size={20} />
          <span>Discover</span>
        </NavLink>

        <NavLink to="/lists">
          <BookOpen size={20} />
          <span>Diary</span>
        </NavLink>

        <NavLink to="/lists">
          <List size={20} />
          <span>Lists</span>
        </NavLink>

        <NavLink to="/activity">
          <Users size={20} />
          <span>Activity</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings">
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>

        <div className="profile">
          <div className="avatar"></div>

          <div>
            <h4>Vatsalya</h4>
            <p>View Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;