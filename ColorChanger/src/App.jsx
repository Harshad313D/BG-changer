import { useState } from "react";

function App() {
  const [color, setColor] = useState("#820fca");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center  text-white text-4xl font-bold pt-10 ">
        Background Changer (on hover)
      </h1>
      <div className="fixed flex flex-col justify-center h-screen right-5">
        <div className=" flex flex-col justify-center gap-3 shadow-lg backdrop-blur-md bg-white/30 px-3 py-2 rounded-3xl ">
          <button
            onMouseOver={() => setColor("red")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onMouseOver={() => setColor("green")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onMouseOver={() => setColor("blue")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onMouseOver={() => setColor("yellow")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onMouseOver={() => setColor("orange")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onMouseOver={() => setColor("indigo")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button
            onMouseOver={() => setColor("violet")}
            className="outline-none px-4 py-4 rounded-3xl text-white shadow-lg "
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
        </div>
      </div>
      <section class="bg-transperant dark:bg-transperant">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-cyan-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
