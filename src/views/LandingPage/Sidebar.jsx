import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebarData from "../../data/sidebarData";
import {
  SidebarCloseButton,
  SidebarContainer,
  SidebarItem,
  SidebarLogoAndBarsContainer,
  SidebarTextContainer,
} from "../../components/LandingPage/Sidebar/styles";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SidebarLogoAndBarsContainer>
        <FontAwesomeIcon
          icon={faBars}
          style={{
            fontSize: "24px",
            cursor: "pointer",
            marginLeft: "10px",
            color: "black",
          }}
          onClick={toggleSidebar}
        />
      </SidebarLogoAndBarsContainer>
      <SidebarContainer $showSidebar={showSidebar}>
        {sidebarData.map((item, index) => (
          <SidebarItem key={index}>
            <Link
              to={item.path}
              onClick={() => {
                closeSidebar();
                scrollToSection(item.sectionId);
              }}
            >
              <FontAwesomeIcon icon={item.icon} size="2x" color="#000000" />
              <SidebarTextContainer>{item.title}</SidebarTextContainer>
            </Link>
          </SidebarItem>
        ))}
        <SidebarCloseButton onClick={closeSidebar}>
          <FontAwesomeIcon
            icon={faClose}
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={toggleSidebar}
          />
        </SidebarCloseButton>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
