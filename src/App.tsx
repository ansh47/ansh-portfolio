import Switch from "react-switch";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <main>
      <a
        href="https://github.com/devmahmud"
        className="cursor-pointer"
        target="_blank"
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 250 250"
          color="white"
          className="group absolute left-0 top-0 z-50 scale-x-[-1] scale-y-[1] transform fill-[#151513] text-white"
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: "130px 106px" }}
            className="group-hover:animate-octo-arm sm:group-hover:animate-octo-arm-mobile"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <header className="h-[650px] w-[100%] bg-yellow">
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div>
            <Icon
              className="text-gray-dark"
              icon="la:laptop-code"
              style={{
                height: "100%",
                fontSize: 150,
              }}
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-dark">Davina Griss</h1>

          <TypeAnimation
            sequence={[
              "FRONT-END DEVELOPER",
              1000,
              "MOBILE DEVELOPER",
              1000,
              "SENIOR DATA ENGINEER",
              1000,
              "DEV TEAM LEAD",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-regular text-2xl text-gray-dark"
            repeat={Infinity}
          />

          <Switch
            // checked={this.state.checked}
            // onChange={this.onThemeSwitchChange}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="twemoji:owl"
              />
            }
            checkedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="noto-v1:sun-with-face"
              />
            }
          />
        </div>
      </header>

      <div className="flex justify-center gap-5 bg-yellow pb-2.5 pt-20">
        <Icon
          className="h-full cursor-pointer text-[50px] text-gray-dark brightness-50"
          icon="twemoji-flag-for-flag-united-kingdom"
        />
        <Icon
          className="h-full cursor-pointer text-[50px] text-gray-dark"
          icon="twemoji-flag-for-flag-poland"
        />
      </div>
      <section className="pt-5 md:pt-10">
        <h2 className="text-center text-xl font-medium uppercase tracking-widest ">
          About Me
        </h2>

        <div className="flex items-center justify-center gap-10 px-10">
          <div className="w-1/3 text-center">
            <div className="mb-[30px] mt-[55px] inline-block p-4 pb-10 shadow-card ">
              <img
                src="/images/myProfile.jpg"
                alt="Profile"
                height="250px"
                className="w-[200px]"
              />
              <div className="mt-3 flex justify-between">
                <Icon
                  icon="devicon:angular"
                  style={{
                    fontSize: 50,
                  }}
                />
                <Icon
                  icon="devicon:react"
                  style={{
                    fontSize: 50,
                  }}
                />
                <Icon
                  icon="devicon:vuejs"
                  style={{
                    fontSize: 50,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
              <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                <Icon icon="emojione:red-circle" width={10} />
                <Icon icon="twemoji:yellow-circle" width={10} />
                <Icon icon="twemoji:green-circle" width={10} />
              </div>
              <div
                className="p-3 text-justify"
                style={{
                  height: "auto",
                  fontSize: "132%",
                  lineHeight: "200%",
                }}
              >
                <br />
                <span className="text-xl font-medium">Hi :) </span>
                <br />
                <br />
                <p className="text-sm font-medium">
                  👋 I'm Davina Griss. Fictional person for preview purposes :)
                  I'm working with newest front-end frameworks like Angular,
                  React and Vue. What you are seeing now is portfolio template
                  from Dorota1997. If you like this portfolio template, make
                  sure to ⭐ the repository to make it more recognizable for
                  other users. Thank you 💜
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-yellow p-10">
        <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-black">
          Projects
        </h2>

        <div className="flex justify-center gap-10">
          <div className="mb-[30px] inline-block bg-white p-3 text-center shadow-card transition duration-[0.2] ease-linear hover:scale-[1.01] hover:shadow-card-hover">
            <img
              className="relative max-h-[230px]"
              src="/images/portfolio/animal-shelter/p1.jpg"
              alt="Profile"
            />
            <span className="mt-3 rounded-b-lg bg-[#696969] px-4 pb-1 pt-2 text-center text-lg text-white">
              2020
            </span>
            <p className="font-xl mt-2 font-bold uppercase tracking-wide">
              Animal Shelter
            </p>
          </div>
          <div className="mb-[30px] inline-block  bg-white p-4 pb-10 shadow-card">
            <img
              className="max-h-[230px]"
              src="/images/portfolio/photography/p1.jpg"
              alt="Profile"
            />
            <div className="mt-3 flex justify-between"></div>
          </div>
          <div className="mb-[30px] inline-block bg-white p-4 pb-10 shadow-card ">
            <img
              className="max-h-[230px]"
              src="/images/portfolio/adventure/p1.jpg"
              alt="Profile"
            />
            <div className="mt-3 flex justify-between"></div>
          </div>
        </div>
      </section>

      {/*Skills */}
      <section className="bg-[#1f1f1f] p-10">
        <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
          Skills
        </h2>

        <ul>
          <li></li>
        </ul>
      </section>
    </main>
  );
}

export default App;
