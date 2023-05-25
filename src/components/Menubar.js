import React from "react";
// import logo file here


const Icon = ({ icon }) => (
    <li>
        <p href="">{icon}</p>
    </li>
);



function Menubar () {
    return (
        <header>
            <img src={logo} alt={logo} />

      <ul className="top-menu">
        <Link to="/"><Icon icon={<MdDashboard title="Order"/>} /></Link>
        <Link to="/chef"><Icon icon={<FaUser title="Your Profile"/>} /></Link>
        <Link to="/menu"><Icon icon={<IoChatbubbleEllipsesSharp title="Chat with sales rep"/>} /></Link>
        <Link to="/comingsoon"><Icon icon={<IoRestaurant title="Book a seat"/>} /></Link>
        <Link to="/recipe"><Icon icon={<IoIosHelpCircle title="FAQs"/>} /></Link>
        <Icon icon={<FaCog title="Settings"/>} />
      </ul>
        </header>
    );
}

export default Menubar;