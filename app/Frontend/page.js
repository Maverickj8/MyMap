import Link from "next/link";
import Nav from "../Nav/page";

const Frontend = () => {
  return (
    <section className="bg-black h-full">
      <Nav />
      <section className="px-10 py-10">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <h1 className=" mb-4 mr-10 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
              The Story....
            </h1>
          </div>
          <div>
            <p className="text-justify text-base text-[#ADB7BE]">
              {" "}
              I started my web development journey on 03/09/2023. As a young
              girl who just finished from the university and uncertain of what
              the outside world would be like, I tried to equip myself with a
              supposed perfect skill in order not to be vulnerable out there.
              Choosing a niche was really hard for me because there were so many
              options. I went for web development because I heard it was the
              hardest and probably people who learn it are the most paid LOL (SO
              IT WAS FOR THE MONEY!).
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <h2 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
              The Planning .....
            </h2>
          </div>
          <div>
            <p className="text-base  text-[#ADB7BE]">
              Before I started, I decided to find a tutor. This decision was
              based on the fact that I have tried learning on my own but was not
              able to achieve a lot. On that note I got a private tutor who
              taught me on google meet (I guess this was the reason I was so
              fast in my learning process.)
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <h2 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
              HTML
            </h2>
          </div>
          <div>
            <p className="text-2xl font-bold text-white mb-4">
              Essential topics in HTML
            </p>
            <ul className="list-disc">
              <li className="text-white">Doctype</li>
              <li className="text-white">Meta</li>
              <li className="text-white">Head and Body</li>
              <li className="text-white">HTML Semantics</li>
              <li className="text-white">Tags</li>
              <li className="text-white">Nesting</li>
              <li className="text-white">Input</li>
              <li className="text-white">Input properties</li>
              <li className="text-white">Image</li>
              <li className="text-white">Links</li>
              <li className="text-white">Form</li>
              <li className="text-white">Form Handling</li>
              <li className="text-white">Button</li>
            </ul>
          </div>
        </div>
        <p className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
          Projects
        </p>
        <ul>
          <Link
            href="https://maverickj8.github.io/html-resumie/"
            className="text-[#ADB7BE] hover:underline"
          >
            My first portfolio
          </Link>
        </ul>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <p className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
              Details
            </p>
          </div>
          <div>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Doctype:
              </span>{" "}
              Here you would learn the different parts of HTML doctype and their
              functions.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">Meta: </span>
              This is where SEO is put into consideration.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Body and Head:
              </span>{" "}
              Understand the main parts of HTML.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                HTML Semantics:
              </span>{" "}
              This is a very important topic in HTML because it helps a lot in
              Search Engine Optimisation (SEO).
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">Tags:</span>{" "}
              Master the important HTML tags, and know the opening and closing
              tags.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Nesting:
              </span>{" "}
              Learn how to nest elements and how to access then while styling.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Input and Input properties:
              </span>{" "}
              This is very important if you wan to learn backend in future,
              mastering the properties will help you know how to manipulate it
              in backend.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">Image:</span>{" "}
              Learn how to add images to your project using SRC and always add
              ALT (it is also important for SEO).
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">Links:</span>{" "}
              Learn how to add an anchor tag to your project and the function of
              href.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Form and Form Handling:{" "}
              </span>
              Learn everything concerning form, as this will be very useful in
              backend.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">Button:</span>{" "}
              Learn how to add a button to your project and also learn its
              properties it will also be necessary for backend.
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <h2 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
              CSS
            </h2>
          </div>
          <div>
            <p className="text-2xl font-bold text-white mb-4">
              Essential topics in CSS
            </p>
            <ul className="list-disc">
              <li className="text-white" >How to add CSS to your project.</li>
              <li className="text-white">Selectors.</li>
              <li className="text-white">Colors</li>
              <li className="text-white">Fonts and Fonts properties.</li>
              <li className="text-white">CSS Inspection.</li>
              <li className="text-white">The model Box.</li>
              <li className="text-white">How competing styles are resolved.</li>
              <li className="text-white">Positioning</li>
              <li className="text-white">Display</li>
              <li className="text-white">Grid</li>
              <li className="text-white">Flex</li>
              <li className="text-white">Media Query</li>
              <li className="text-white">Animation</li>
              <li className="text-white">Bootstrap</li>
              <li className="text-white">Tailwind</li>
            </ul>
          </div>
        </div>
        <p className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
          Projects
        </p>
        <ul className="flex flex-col">
          <Link
            href="https://maverickj8.github.io/html-websites/"
            className="text-[#ADB7BE] hover:underline"
          >
            Agency website
          </Link>
          <Link
            href="https://maverickj8.github.io/html-bootstrap/"
            className="text-[#ADB7BE] hover:underline"
          >
            Simple E-commerce website
          </Link>
          <Link
            href="https://maverickj8.github.io/web.html/"
            className="text-[#ADB7BE] hover:underline"
          >
            Landing page
          </Link>
          <Link
            href="https://maverickj8.github.io/git.html/"
            className="text-[#ADB7BE] hover:underline"
          >
            Makeup website
          </Link>
          <Link
            href="https://maverickj8.github.io/response.html/"
            className="text-[#ADB7BE] hover:underline"
          >
            Responsive website
          </Link>
          <Link
            href="https://maverickj8.github.io/gridone.html/"
            className="text-[#ADB7BE] hover:underline"
          >
            Grid practice
          </Link>
          <Link
            href="https://maverickj8.github.io/table.html/"
            className="text-[#ADB7BE] hover:underline"
          >
            Periodic table
          </Link>
          <Link
            href="https://maverickj8.github.io/repo.html/"
            className="text-[#ADB7BE] hover:underline"
          >
            Art Sale website
          </Link>
        </ul>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <p className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
              Details
            </p>
          </div>
          <div>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                How to add CSS to your project:
              </span>{" "}
              Learn the 3 basic ways to add CSS to your project, ie inline,
              Internal and External.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Selectors:{" "}
              </span>{" "}
              Learn and Understand the ways to select elements for styling, they
              include: element, class, ID, attribute and universal Selectors.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">Colors:</span>{" "}
              Learn the different types of CSS colors and how to use them.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Fonts and Fonts properties:
              </span>{" "}
              You need to know the different CSS fonts as it makes your website
              standout. Also know to source for external fonts like google fonts
              and how to add them to your project.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                CSS Inspection:
              </span>{" "}
              Learn how to use chrome developer tools to inspect CSS.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                The model Box:
              </span>{" "}
              Learn and understand CSS padding, margin and borders as this aids
              to responsiveness.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                How competing styles are resolved:
              </span>{" "}
              Learn how to select elements in the parent or child of a HTML tag.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Positioning:
              </span>{" "}
              This is about Static, Relative, Absolute and Fixed positioning.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Display:
              </span>{" "}
              This the part you learn Inline, block and Inline-block displays.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">Grid: </span>
              Grid is very important for responsiveness, as it defines column
              and rows of a div or section.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">Flex:</span>{" "}
              Flex is and alternative to Grid, they do almost the same stuff.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Media Query:
              </span>{" "}
              This defines how your design should look in different gadgets eg:
              mobile.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Animation:
              </span>{" "}
              Animation is very important when and interactive website is
              required, Css can save you hours of trying to animate using
              javascript.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Bootstrap:
              </span>{" "}
              Bootstrap is a CSS framework that uses inline styling to give you
              the feel that Vanilla CSS gives. Learning it will help you style
              faster.
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Tailwind:
              </span>{" "}
              Tailwind is another CSS framework that is just like Bootstrap.
            </p>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <h2 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
              Javascript
            </h2>
          </div>
          <div>
            <p className="text-2xl font-bold text-white mb-4">
              Essential topics in Javascript
            </p>
            <ul className="list-disc">
              <li className="text-white">Meaning</li>
              <li className="text-white">Applications</li>
              <li className="text-white">Javascript Keywords</li>
              <li className="text-white">Variable and variable declaration</li>
              <li className="text-white">Datatype</li>
              <li className="text-white">Stings and String methods</li>
              <li className="text-white">Operators and types of operators</li>
              <li className="text-white">Number and Number methods</li>
              <li className="text-white">Math and Math methods</li>
              <li className="text-white">Objects</li>
              <li className="text-white">Object-oriented Programming (OOP)</li>
              <li className="text-white">Truthy and falsy values</li>
              <li className="text-white">Branching</li>
              <li className="text-white">Data objects</li>
              <li className="text-white">Array and Array methods</li>
              <li className="text-white">Date</li>
              <li className="text-white">Loops</li>
              <li className="text-white">Date</li>
              <li className="text-white">Functions and types of functions</li>
              <li className="text-white">DOM and DOM Manipulation</li>
              <li className="text-white">Functions and types of functions</li>
              <li className="text-white">Hoistin</li>
              <li className="text-white">Callbacks</li>
              <li className="text-white">Promises</li>
              <li className="text-white">Async and Await</li>
            </ul>
          </div>
        </div>
        <p className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
          Projects
        </p>
        <ul className="flex flex-col">
          <Link
            href="https://maverickj8.github.io/js-project/"
            className="text-[#ADB7BE] hover:underline"
          >
            Dice game
          </Link>
          <Link
            href="https://maverickj8.github.io/Todo/"
            className="text-[#ADB7BE] hover:underline"
          >
            Todo App
          </Link>
          <Link
            href="https://maverickj8.github.io/quote-gen/"
            className="text-[#ADB7BE] hover:underline"
          >
            Quote generator
          </Link>
          <Link
            href="https://maverickj8.github.io/js-drum/"
            className="text-[#ADB7BE] hover:underline"
          >
            Drum kit
          </Link>
        </ul>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <h2 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
              React (Javascript Library)
            </h2>
          </div>
          <div>
            <p className="text-2xl font-bold text-white mb-4">
              Essential topics in React
            </p>
            <ul className="list-disc">
              <li className="text-white">What is React</li>
              <li className="text-white">Nodejs Installation</li>
              <li className="text-white">NPM package Installation</li>
              <li className="text-white">How to run your app on localhost</li>
              <li className="text-white">JSX</li>
              <li className="text-white">Importing and Installing dependencies</li>
              <li className="text-white">Package.json</li>
              <li className="text-white">Components</li>
              <li className="text-white">Styling</li>
              <li className="text-white">Controlled inputs</li>
              <li className="text-white">Props</li>
              <li className="text-white">useState()</li>
              <li className="text-white">useEffect()</li>
              <li className="text-white">useRef()</li>
              <li className="text-white">useContext()</li>
              <li className="text-white">useReducer()</li>
              <li className="text-white">API</li>
              <li className="text-white">Add EventListener</li>
              <li className="text-white">Tenary operators</li>
              <li className="text-white">React Router</li>
              <li className="text-white">React Navigation</li>
            </ul>
          </div>
        </div>
        <p className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
          Projects
        </p>
        <ul className="flex flex-col">
          <Link
            href="https://weather-app-ten-flax-69.vercel.app/"
            className="text-[#ADB7BE] hover:underline"
          >
            Weather App
          </Link>
          <Link
            href="https://expenses-lovat.vercel.app/"
            className="text-[#ADB7BE] hover:underline"
          >
            Expense Tracker
          </Link>
        </ul>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            <h2 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-500 font-extrabold text-2xl">
              Next (React framework)
            </h2>
          </div>
          <div>
            <p className="text-2xl font-bold text-white mb-4">
              Essential topics in Next
            </p>
            <ul className="list-disc">
              <li className="text-white">What is Next</li>
              <li className="text-white">Nodejs Installation</li>
              <li className="text-white">NPM package Installation</li>
              <li className="text-white">How to run your app on localhost</li>
              <li className="text-white">JSX</li>
              <li className="text-white">Importing and Installing dependencies</li>
              <li className="text-white">Package.json</li>
              <li className="text-white">Components</li>
              <li className="text-white">Styling</li>
              <li className="text-white">Next Image</li>
              <li className="text-white">Next Link</li>
              <li className="text-white">Controlled inputs</li>
              <li className="text-white">Props</li>
              <li className="text-white">useState()</li>
              <li className="text-white">useEffect()</li>
              <li className="text-white">useRef()</li>
              <li className="text-white">useContext()</li>
              <li className="text-white">useReducer()</li>
              <li className="text-white">API</li>
              <li className="text-white">Add EventListener</li>
              <li className="text-white">Tenary operators</li>
              <li className="text-white">Next Routing</li>
              <li className="text-white">Dynamic Routing</li>
              <li className="text-white">Next Navigation</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Frontend;
