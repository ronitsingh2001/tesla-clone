import React, { useEffect, useState } from "react";
import logo from "../assets/tesla.svg";

const NAV_LINKS = [
  {
    link: "#model-s",
    title: "model s",
  },
  {
    link: "#model-3",
    title: "model 3",
  },
  {
    link: "#model-x",
    title: "model x",
  },
  {
    link: "#model-y",
    title: "model y",
  },
  {
    link: "#solar-roof",
    title: "solar roof",
  },
  {
    link: "#solar-panel",
    title: "solar panels",
  },
];

const NAV_ACTIONS = [
  {
    link: "#shop",
    title: "shop",
  },
  {
    link: "#account",
    title: "account",
  },
];

function Nav() {
  const [isComponentVisible, setComponentVisible] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Create an observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Update state when the target component enters/exits the viewport
        if (entry.isIntersecting) {
          setComponentVisible(true);
        } else {
          setComponentVisible(false);
        }
      });
    });

    // Observe the target component
    const target = document.querySelector("#solar-roof");
    if (target) {
      observer.observe(target);
    }

    // Cleanup: disconnect the observer when the component unmounts
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <header>
      <nav
        className={`flex justify-evenly  fixed w-[100%] py-8 left-0 bg-transparent md1200:justify-between md1200:px-12 ${
          isComponentVisible ? "text-white" : ""
        }`}
      >
        <div className="logo">
          <img className="w-40 svg-logo" src={logo} alt="" />
        </div>
        <ul className="flex gap-4 md1200:hidden">
          {NAV_LINKS.map((i) => (
            <li key={i.title}>
              <a
                className="capitalize no-underline font-semibold  hover:font-bold p-1"
                href={i.link}
              >
                {i.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <ul className="flex gap-4  md1200:hidden">
            {NAV_ACTIONS.map((i) => (
              <li key={i.title}>
                <button className="capitalize  font-semibold  hover:font-bold p-1">
                  {i.title}
                </button>
              </li>
            ))}
          </ul>
          <ul>
            <button
              onClick={() => setMobile(true)}
              className="capitalize  font-semibold  hover:font-bold p-1"
            >
              Menu
            </button>
          </ul>
        </div>
        <div
          onClick={() => setMobile(false)}
          className={`  backdrop fixed top-0 left-0 translate-y-[-100%] duration-300 ease-in-out bg-black opacity-70 h-[100vh]  w-full z-10 ${
            mobile ? "translate-y-[0%]" : ""
          } `}
        />
        <div
          className={` modal fixed top-0 right-0 bg-white p-10 w-[30vw] duration-500 ease-in-out h-full z-20 translate-x-[100%] ${
            mobile ? "translate-x-[0]" : ""
          } overflow-scroll  md1000:w-[45vw] min800:w-[70vw] min540:w-[90vw]`}
        >
          <ul className="flex flex-col gap-4">
            <li className="font-extrabold text-3xl text-end">
              <button onClick={() => setMobile(false)}>X</button>
            </li>
            {NAV_LINKS.map((i) => (
              <li key={i.title} onClick={() => setMobile(false)}>
                <a
                  className="capitalize no-underline font-semibold  hover:font-bold p-1"
                  href={i.link}
                >
                  {i.title}
                </a>
              </li>
            ))}
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              existing inventory
            </li>
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              used inventory
            </li>
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              trade-in
            </li>
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              test drive
            </li>
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              powerwall
            </li>
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              commercial energy
            </li>
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              utilities
            </li>
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              charging
            </li>
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              find us
            </li>
            <li
              onClick={() => setMobile(false)}
              className="capitalize cursor-pointer font-semibold  hover:font-bold p-1"
            >
              support
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
