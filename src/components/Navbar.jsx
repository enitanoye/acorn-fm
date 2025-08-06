import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header class="bg-white  py-6 sticky top-0 z-50 shadow-md">
      <nav
        class="xtrw flex  items-center justify-between p-1 px-4 lg:px-8"
        aria-label="Global"
      >
        <div class="flex justify-between items-center w-full lg:flex-1">
          {/* <LazyLoadImage
              // src={tosett}
              src="/assets/Images/logo.jpg"
              effect="blur"
              className="h-[80px] w-auto rounded-[50%]"
              // className="w-[80%] mx-auto sm:w-full h-full"
            /> */}
          <span className="text-[2rem] strong  font-bold text-gray-600">
            Acorn FM
          </span>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-[30px] w-[30px] text-black"
                fill="text-white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                onClick={() => setOpen(!open)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden lg:flex lg:gap-x-12 items-center">
          <Nav href={"/"} title={"home"} />
          <Nav href={"/about"} title={"about us"} />
          <Nav href={"/services"} title={"our services"} />
          <Nav href={"/clients"} title={"clients"} />
          <Nav href={"/operations"} title={"operations"} />
          <Nav href={"/contact"} title={"contact us"} />
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div class="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div class={`${open ? "inset-0" : ""} fixed z-10`}></div>
        <div
          class={`${
            open ? "right-0" : "right-[-100%]"
          } fixed inset-y-0 transition-all duration-1000 w-full z-10 sm:w-[80%] overflow-y-auto bg-white  px-6 py-6 sm:max-w-[500px] sm:ring-1 sm:ring-gray-900/10`}
        >
          <div class="flex items-center justify-between mb-[40px]">
            {/* <LazyLoadImage
              // src={tosett}
              src="/assets/Images/logo.jpg"
              effect="blur"
              className="h-[80px] w-auto rounded-[50%]"
              // className="w-[80%] mx-auto sm:w-full h-full"
            /> */}
            <span className="text-[2rem] strong lg:hidden font-bold text-gray-700">
              Acorn FM
            </span>
            <button
              onClick={() => setOpen(!open)}
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-[30px] w-[30px] text-black"
                fill="white"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 flex flex-col  gap-[40px] divide-y divide-gray-500/10">
              <Nav click={() => setOpen(!open)} href={"/"} title={"home"} />
              <Nav
                click={() => setOpen(!open)}
                href={"/about"}
                title={"about us"}
              />
              <Nav
                click={() => setOpen(!open)}
                href={"/services"}
                title={"our services"}
              />
              <Nav
                click={() => setOpen(!open)}
                href={"/clients"}
                title={"clients"}
              />
              <Nav
                click={() => setOpen(!open)}
                href={"/operations"}
                title={"operations"}
              />
              <Nav
                click={() => setOpen(!open)}
                href={"/contact"}
                title={"contact us"}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;


function Nav({ title, href, click }) {
  const inActive = ` cursor-pointer  uppercase text-gray-700 font-semibold text-[1.2rem] hover:text-gray-900 transition-all duration-300`;
  const active = `${inActive} font-extrabold border-b-2 border-gray-600 !text-[1.4rem]`;
  return (
    <NavLink
      to={href}
      onClick={click}
      className={({ isActive }) => (isActive ? `${active} ` : inActive)}
    >
      {title}
    </NavLink>
  );
}
