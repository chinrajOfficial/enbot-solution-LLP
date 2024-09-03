import React, { useState, useEffect } from "react";
import "./Main.css";
import { Link as ScrollLink, Element } from "react-scroll";
import NavCard from "../NavCardComp/NavCard";
import HomeImg from "../../Assets/HomePageImg.png";
import DarkLogo from "../../Assets/DarkLogoTheme.png";
import LightLogo from "../../Assets/LogoLight.png";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import Shape1 from "../../Assets/Shape1.png";
import Shape2 from "../../Assets/Shape2.svg";
import Shape3 from "../../Assets/Shape3.svg";
import ServiceCard from "../ServiceCard/ServiceCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import IdeaImg from "../../Assets/Idea.png";
import CloudImg from "../../Assets/CloudData.png";
import DataManagement from "../../Assets/DataManagement.png";
import GameImg from "../../Assets/Game.png";
import AiImg from "../../Assets/ArtificialIntelligence.png";
import QueenImg from "../../Assets/Queen.png";
import SettingsImg from "../../Assets/Settings.png";
import BarChat from "../../Assets/BarChart.png";
import BinocularsImg from "../../Assets/Binoculars.png";
import Home from "../HomeComp/Home";
import WhoWeAre from "../WhoWeAreComp/WhoWeAre";
import GrowthImg from "../../Assets/GrowthImg.png";
import ProductCard from "../ProductCard/ProductCard";
import ExperienceComp from "../ExperienceComp/ExperienceComp";
import SnakeShapeImg from "../../Assets/SnakeShapeImg.png";
import BaloonImg from "../../Assets/ManBaloonImg.png";
import RocketManImg from "../../Assets/RocketManImg.png";
import { FaArrowRight } from "react-icons/fa6";
import Faq from "../FaqComp/FaqComp";
import FaqComp from "../FaqComp/FaqComp";
import Footer from "../FooterComp/Footer";
import { IoMenu } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { SiPlatformio } from "react-icons/si";
import { FiSun } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { RiCloseLargeLine } from "react-icons/ri";
import Modal from "react-modal";
import { TbBackground } from "react-icons/tb";
const SCROLL_DURATION = 1000;

const Main = () => {
  const customStyles = {
    content: {
      width: "100%",
      height: "100vh",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "hidden",
      background: "none",
      border: "none",
    },
  };

  const [hide, setHide] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isCloseIc, setIsCloseIc] = useState(false);
  const [isForm, setisForm] = useState(false);
  const viewForm = () => {
    setisForm(true);
  };
  const closeForm = () => {
    setisForm(false);
  };
  const changeToClose = () => {
    setIsCloseIc(!isCloseIc);
    var navBar = document.getElementById("mobile-nav");
    navBar.style.right = "0";
    navBar.style.transition = ".7s";
    navBar.style.position = "fixed";
    navBar.style.zIndex = "20";
  };
  const changeToMenu = () => {
    setIsCloseIc(!isCloseIc);
    var navBar = document.getElementById("mobile-nav");
    navBar.style.right = "-100%";
    navBar.style.transition = ".5s ease-in";
  };
  const changeToDarkTheme = () => {
    document.documentElement.style.setProperty("--navStickyBgcolor", "#0F0715");
    document.documentElement.style.setProperty(
      "--navFirstMenuColor",
      "#36E0FF"
    );
    document.documentElement.style.setProperty(
      "--navSecondMenuColor",
      "#8650F6"
    );
    document.documentElement.style.setProperty("--menuIconColor", "#FFFFFF");
    document.documentElement.style.setProperty("--primaryTextColor", "#3F3E3E");
    document.documentElement.style.setProperty(
      "--secondaryTextColor",
      "#9596AC"
    );
    document.documentElement.style.setProperty("--backgroundColor", "#0F0715");
    document.documentElement.style.setProperty(
      "--homeFirstHeadingColor",
      "#c9c9d7f1"
    );
    document.documentElement.style.setProperty(
      "--homeSecondHeadingColor",
      "#c9c9d7f1"
    );
    document.documentElement.style.setProperty(
      "--firstgradientColor",
      "#36E0FF"
    );
    document.documentElement.style.setProperty(
      "--secondgradientColor",
      "#8650F6"
    );
    document.documentElement.style.setProperty("--whiteColor", "#FFFFFF");
    document.documentElement.style.setProperty("--activeMenuColor", "#2ECAFF");
    document.documentElement.style.setProperty(
      "--serviceCardBgColor",
      "rgb(9, 1, 29)"
    );
    document.documentElement.style.setProperty(
      "--serviceCardSecondBgColor",
      "#0F0715"
    );
    document.documentElement.style.setProperty(
      "--serviceImgFirstBgColor",
      "#36E0FF"
    );
    document.documentElement.style.setProperty(
      "--serviceImgSecondBgColor",
      "#8650F6"
    );
    document.documentElement.style.setProperty(
      "--serviceCardBorderColor",
      "transparent"
    );
    document.documentElement.style.setProperty(
      "--serviceCardBorderHoverColor",
      "#FFFFFF"
    );
    document.documentElement.style.setProperty(
      "--productCardFirstBgColor",
      "#0F0715"
    );
    document.documentElement.style.setProperty(
      "--productCardSecondBgColor",
      "#0F0715"
    );
    document.documentElement.style.setProperty(
      "--productivityBgColor",
      "#17182d62"
    );
    document.documentElement.style.setProperty(
      "--productivityHeaderColor",
      "#c9c9d7f1"
    );

    document.documentElement.style.setProperty("--tableBgColor", "#17182d62");
    document.documentElement.style.setProperty("--tableBorderColor", "#2D2E41");
    document.documentElement.style.setProperty("--tableTextColor", "#FFFFFF");

    document.documentElement.style.setProperty("--footerBgColor", "#17182d62");
    document.documentElement.style.setProperty(
      "--footerBorderColor",
      "#bdbfeb62"
    );
    document.documentElement.style.setProperty(
      "--footerAngerTextColor",
      "#9596AC"
    );
    document.documentElement.style.setProperty(
      "--footerHeaderTextColor",
      "#9596AC"
    );
    document.documentElement.style.setProperty(
      "--footerAngerHoverTextColor",
      "#FFFFFF"
    );
    document.documentElement.style.setProperty("--footerIconsColor", "#9596AC");
    document.documentElement.style.setProperty(
      "--footerIconsHoverColor",
      "#36E0FF"
    );
    document.documentElement.style.setProperty("--footerMailColor", "#FFFFFF");
    document.documentElement.style.setProperty("--menuIconColor", "#FFFFFF");
    document.documentElement.style.setProperty(
      "--socialMediaIconBgColor",
      "#17182da7"
    );
    document.documentElement.style.setProperty(
      "--socialMediaIconBorderColor",
      "#36E0FF"
    );

    document.documentElement.style.setProperty("--mobileNavBgColor", "#0F0715");
    document.documentElement.style.setProperty(
      "--mobileNavIconsColor",
      "#36E0FF"
    );
    document.documentElement.style.setProperty(
      "--mobileNavTextColor",
      "#9596AC"
    );

    setHide(!hide);
    setIsDarkMode(true);
  };

  const changeToLightTheme = () => {
    document.documentElement.style.setProperty("--backgroundColor", "#F5F5F5");
    document.documentElement.style.setProperty(
      "--secondaryTextColor",
      "#3d3f4a"
    );
    document.documentElement.style.setProperty("--navStickyBgcolor", "#F5F5F5");
    document.documentElement.style.setProperty(
      "--navFirstMenuColor",
      "#7078F9"
    );
    document.documentElement.style.setProperty(
      "--navSecondMenuColor",
      "#7E5EF7"
    );
    document.documentElement.style.setProperty("--activeMenuColor", "#7078F9");
    document.documentElement.style.setProperty("--menuIconColor", "#000000");
    document.documentElement.style.setProperty(
      "--homeFirstHeadingColor",
      "#36E0FF"
    );
    document.documentElement.style.setProperty(
      "--homeSecondHeadingColor",
      "#8650F6"
    );

    document.documentElement.style.setProperty(
      "--serviceCardBgColor",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--serviceCardSecondBgColor",
      "rgb(171, 224, 240, 0.932)"
    );
    document.documentElement.style.setProperty(
      "--serviceImgFirstBgColor",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--serviceImgSecondBgColor",
      "#a5edf4"
    );
    document.documentElement.style.setProperty(
      "--serviceCardBorderColor",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--serviceCardBorderHoverColor",
      "#0F0715"
    );

    document.documentElement.style.setProperty(
      "--productCardFirstBgColor",
      "#f5f5f5"
    );
    document.documentElement.style.setProperty(
      "--productCardSecondBgColor",
      "#f5f5f5"
    );

    document.documentElement.style.setProperty(
      "--productivityBgColor",
      "#36E0FF"
    );
    document.documentElement.style.setProperty(
      "--productivityHeaderColor",
      "#3d3f4a"
    );

    document.documentElement.style.setProperty("--tableBgColor", "#F5F5F5");
    document.documentElement.style.setProperty("--tableBorderColor", "#2D2E41");
    document.documentElement.style.setProperty("--tableTextColor", "#3F3E3E");

    document.documentElement.style.setProperty("--footerBgColor", "#F5F5F5");
    document.documentElement.style.setProperty(
      "--footerBorderColor",
      "#000000"
    );
    document.documentElement.style.setProperty(
      "--footerAngerTextColor",
      "#3d3f4a"
    );
    document.documentElement.style.setProperty(
      "--footerHeaderTextColor",
      "#3F3E3E"
    );
    document.documentElement.style.setProperty(
      "--footerAngerHoverTextColor",
      "#8650F6"
    );
    document.documentElement.style.setProperty("--footerIconsColor", "#3d3f4a");
    document.documentElement.style.setProperty(
      "--footerIconsHoverColor",
      "#0F0715"
    );
    document.documentElement.style.setProperty("--footerBtnColor", "#3d3f4a");
    document.documentElement.style.setProperty("--footerMailColor", "#0F0715");
    document.documentElement.style.setProperty("--menuIconColor", "#0F0715");
    document.documentElement.style.setProperty(
      "--socialMediaIconBgColor",
      "#F5F5F5"
    );
    document.documentElement.style.setProperty(
      "--socialMediaIconBorderColor",
      "#0F0715"
    );

    document.documentElement.style.setProperty("--mobileNavBgColor", "#F5F5F5");
    document.documentElement.style.setProperty(
      "--mobileNavIconsColor",
      "#8650F6"
    );
    document.documentElement.style.setProperty(
      "--mobileNavTextColor",
      "#0F0715"
    );

    setHide(!hide);
    setIsDarkMode(false);
  };
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (window.pageYOffset > navbar.offsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <div className="main-container">
      {/* <NavCard /> */}
      <nav id="navbar" className="navbar">
        <img
          className="nav-logo"
          src={isDarkMode ? DarkLogo : LightLogo}
          alt="Logo"
        />
        <ul className="nav-menus">
          <li>
            <ScrollLink
              className="nav-active-menu"
              to="home"
              spy={true}
              smooth={true}
              duration={SCROLL_DURATION}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="services" spy={true} smooth={true} duration={200}>
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" spy={true} smooth={true} duration={400}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="products" spy={true} smooth={true} duration={600}>
              Products
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={SCROLL_DURATION}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <div className="NavIcons">
          <button onClick={viewForm} className="mode-btn">
            <SiPlatformio /> Enquiry
          </button>
          <div>
            {!hide && (
              <MdDarkMode onClick={changeToLightTheme} className="light-mode" />
            )}
            {hide && (
              <FiSun onClick={changeToDarkTheme} className="dark-mode" />
            )}
          </div>

          {!isCloseIc && (
            <TfiMenuAlt onClick={changeToClose} className="MenuIcon" />
          )}
          {isCloseIc && <GrClose onClick={changeToMenu} className="MenuIcon" />}
        </div>

        <div id="mobile-nav" className="mobile-nav-container mobile-view">
          <NavCard setIsCloseIc={setIsCloseIc} isCloseIc={isCloseIc} />
        </div>
      </nav>
      <Modal
        isOpen={isForm}
        onRequestClose={closeForm}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="enquiry-container">
          <p className="close-p">
            <RiCloseLargeLine onClick={closeForm} className="close-icon" />
          </p>
          <div className="fields-container">
            <h1>Enquiry Form</h1>
            <input type="text" placeholder="Enter your Full Name" />
            <input type="email" placeholder="Enter your Email" />
            <input type="number" placeholder="Phone Number" />
            <textarea placeholder="Enquiry notes" name="" id=""></textarea>
          </div>
          <div className="submit-container">
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </Modal>

      <Element name="home">
        <Home
          title="Unleash the power of data with "
          des="At ENBOT, we excel in exploring the intricacies of e-commerce platforms, extracting critical insights that empower startups and enterprises to surpass their competition. Our state-of-the-art crawling solutions enable you to make informed decisions and streamline operations, giving you a distinct advantage in today’s ever-evolving marketplace"
          image={HomeImg}
        />
      </Element>

      <Element name="services" className="service-section">
        <div className="service-intro-section">
          <div className="header-container">
            <h2 className="sec-headers">Services</h2>
          </div>
          <h1>Unveiling Our Unique Edge.</h1>
          <p>
            Unlock your potential with our dynamic range of services tailored to
            meet your needs. From strategy to execution, we're your partner in
            achieving excellence.
          </p>
        </div>
        <div className="services-grid-container">
          <ServiceCard
            image={IdeaImg}
            title="Innovative Funding"
            des="Strategize funding to fuel innovation and expansion, tailored to your business's stage."
          />
          <ServiceCard
            image={CloudImg}
            title="Cloud Data Architecture"
            des="Scale and manage big data effortlessly in the cloud, empowering users with deep insights and enhanced analytics."
          />
          <ServiceCard
            image={DataManagement}
            title="Data-Driven Success"
            des="Elevate digital team performance through expert analytics and optimization, driving transformative results."
          />
          <ServiceCard
            image={GameImg}
            title="Business Intel Excellence"
            des="Foster a data-centric culture for unified insights and business transformation."
          />
          <ServiceCard
            image={AiImg}
            title="AI-Powered Solutions"
            des="Leverage AI to solve complex challenges and unlock data potential, regardless of company size."
          />
          <ServiceCard
            image={QueenImg}
            title="Strategic Data Utilization"
            des="Boost ROI and company valuation through optimized data strategies."
          />
          <ServiceCard
            image={SettingsImg}
            title="Streamlined Automation"
            des="Drive efficiency and innovation while minimizing errors with automated workflows."
          />
          <ServiceCard
            image={BarChat}
            title="Conversion Optimization"
            des="Optimize conversion rates with data-driven methodologies for growth."
          />
          <ServiceCard
            image={BinocularsImg}
            title="Real-Time Intelligence"
            des="Monitor competitors and industries in real-time for actionable intelligence and price monitoring."
          />
        </div>
      </Element>

      <Element name="about" className="sec-3">
        <WhoWeAre
          title="Who We Are."
          des="We are a team of problem solvers driven by growth strategists and experts in machine learning and analytics. We tackle our clients' most challenging issues in automation, digital growth, data democratization, data-led transformations, and scaling. Specializing in building data products with machine learning and AI, we excel in predictive analytics, NLP engineering, computer vision, and deep learning."
          des2="Whether you're facing SEO challenges, digital marketing strategy dilemmas, or conversion rate optimization hurdles, our machine learning solutions can assist in more ways than you might imagine. Interested in learning more? Let's chat over a cup of coffee!"
          image={GrowthImg}
        />
      </Element>

      <Element name="products">
        <section>
          <div className="service-intro-section">
            <div className="header-container">
              <h2 className="sec-headers">Products</h2>
            </div>
            <h1>Our Innovation Trove.</h1>
            <p>
              Elevate your business with our cutting-edge products on an
              intelligent platform. In today's data-driven era of AI, failing to
              leverage this technology means conceding ground to your
              competitors. Stay ahead of the curve with our powerful solutions.
            </p>
          </div>
          <div className="product-flex-container">
            <ProductCard
              title="AI & ML Solutions"
              des="Craft and deploy bespoke AI solutions to propel your organization forward at unprecedented speeds. Seamlessly integrate pre-built ML pipelines into your web applications."
            />
            <ProductCard
              title="Personalization Excellence"
              des="Effortlessly tailor every aspect of your digital presence for maximum impact. Streamline website performance and enhance data precision to accelerate revenue growth."
            />
            <ProductCard
              title="Visionary CV"
              des="Unlock insights from images and videos using tailored deep learning methodologies. Optimize SEO and elevate website UX with advanced computer vision techniques."
            />
            <ProductCard
              title="Dynamic Recommender"
              des="Leverage potent AI algorithms to intelligently refine recommendations and maximize business outcomes."
            />
            <ProductCard
              title="Price Intelligence"
              des="Monitor competitor pricing and stock levels in real-time with our tailored comparison and repricing tool."
            />
            <ProductCard
              title="Discovery Master"
              des="Extract product information and standardize identification across platforms with advanced ML techniques."
            />
            <ProductCard
              title="Real-time Insights"
              des="Unearth invaluable customer insights and enhance user experiences by analyzing user behavior in real-time."
            />
            <ProductCard
              title="Automated SEO"
              des="Streamline optimization efforts with automated ML tools, from monitoring rankings to optimizing discovery and UX."
            />
          </div>
        </section>
      </Element>

      <section className="experience-container">
        <img className="baloon" src={BaloonImg} alt="" />
        <div className="ex-menu-container">
          <h1>A Flavour Of Our Experience.</h1>
          <p>
            Delve into our wealth of knowledge and discover the essence of our
            collective journey.
          </p>
        </div>
        <div className="yeares-container">
          <ExperienceComp year="15" des="Years Of Experience" />
          <ExperienceComp year="20+" des="Migration Process" />
          <ExperienceComp year="15" des="AI Projects" />
          <ExperienceComp year="1000+" des="Sites Crawled" />
        </div>
        <img className="snake-shape-img" src={SnakeShapeImg} alt="" />
      </section>

      <section className="productivity-container">
        <div className="productivity-contents">
          <h1>Let's Chat & Increase Your Productivity.</h1>
          <p>
            Whether you're wrestling with complex data problems, aiming to
            master data science skills, or craving captivating visualizations,
            we've got you covered. Want to boost your SEO or maximize marketing
            ROI using machine learning and data insights? Look no further.
            Contact us today for tailored solutions and unleash the power of
            your data!
          </p>
        </div>
        <img src={RocketManImg} alt="" />
        <button className="reach-us-btn">
          <span>Reach Us</span>
          <FaArrowRight />
        </button>
      </section>

      <section className="faqs-container">
        <div className="faqs-contents">
          <p>OUR FAQS</p>
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="faqs-table-container">
          <FaqComp
            id="1"
            data="What is data crawlink, and its businuss benefits?"
            des="Data crawling, also known as web scraping, involves extracting data from websites to gather valuable insights for businesses. It can benefit your business by providing access to market trends, competitor analysis, pricing information, and customer sentiment, enabling informed decision-making and strategic planning."
          />

          <FaqComp
            id="2"
            data="How does ENBOT ensure data accuracy"
            des="ENBOT utilizes advanced bot mechanisms and algorithms to ensure the accuracy and reliability of the data we extract. Our bots are intelligently designed to navigate websites, mimic human behavior, and extract data with precision, minimizing errors and maintaining data integrity."
          />

          <FaqComp
            id="3"
            data="Is the data extraction process legal and ethical?"
            des="ENBOT adheres to all relevant laws and regulations governing data extraction, including copyright laws and website terms of service. Our bot mechanism operates within ethical boundaries, respecting the rights of website owners and prioritizing responsible data collection practices."
          />

          <FaqComp
            id="4"
            data="Can ENBOT handle large-scale data extraction projects"
            des="Yes, our bot mechanism is capable of handling large-scale data extraction projects efficiently. Whether you need to crawl thousands of product listings or monitor multiple e-commerce websites simultaneously, ENBOT's bots can scale to meet your needs while maintaining high performance and reliability."
          />

          <FaqComp
            id="5"
            data="How often is data updated using your bot mechanism"
            des="Yes, our bot mechanism is capable of handling large-scale data extraction projects efficiently. Whether you need to crawl thousands of product listings or monitor multiple e-commerce websites simultaneously, ENBOT's bots can scale to meet your needs while maintaining high performance and reliability."
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
