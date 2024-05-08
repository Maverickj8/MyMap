import Link from "next/link";
import Nav from "../Nav/page";

const Frontend = () => {
  
  return (
    <>
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
              the outside world would be like, tried to equip myself with a
              supposed perfect skill in order not to be vulnurable out there.
              Choosing a niche was really hard for me because there were so many
              option. I went for web development because I heard it was the
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
              based on the fact that i have tried learning on my own but was not
              able to achieve a lot. On that note i got a private tutor who
              taught me on google meet (I guess This was the reason i was so
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
              <li>Doctype</li>
              <li>Meta</li>
              <li>Head and Body</li>
              <li>HTML Semantics</li>
              <li>Tags</li>
              <li>Nesting</li>
              <li>Input</li>
              <li>Input properties</li>
              <li>Image</li>
              <li>Links</li>
              <li>Form</li>
              <li>Form Handling</li>
              <li>Button</li>
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
              This is where SEO is put into consideratiom
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                Body and Head:
              </span>{" "}
              Understand the main b
            </p>
            <p className="text-base text-[#ADB7BE] mb-2">
              <span className="text-lg font-bold text-white mb-4">
                HTML Semantics:
              </span>{" "}
              This is a very important topic in HTML because it hepls a lot in
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
              Learn how to add images to your project usin SRC and always add
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
              <li>How to add CSS to your project.</li>
              <li>Selectors.</li>
              <li>Colors</li>
              <li>Fonts and Fonts properties.</li>
              <li>CSS Inspection.</li>
              <li>The model Box.</li>
              <li>How competing styles are resolved.</li>
              <li>Positioning</li>
              <li>Display</li>
              <li>Grid</li>
              <li>Flex</li>
              <li>Media Query</li>
              <li>Animation</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
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
              Learn how to use chrome developertools to inspect CSS.
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
              Learn how select elements in the parent or child of a HTML tag.
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
              Tailwindis another CSS framework that is just like Bootstrap.
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
              <li>Meaning</li>
              <li>Applications</li>
              <li>Javascript Keywords</li>
              <li>Variable and variable declaration</li>
              <li>Datatype</li>
              <li>Stings and String methods</li>
              <li>Operators and types of operators</li>
              <li>Number and Number methods</li>
              <li>Math and Math methods</li>
              <li>Objects</li>
              <li>Object-oriented Programming (OOP)</li>
              <li>Truthy and falsy values</li>
              <li>Branching</li>
              <li>Data objects</li>
              <li>Array and Array methods</li>
              <li>Date</li>
              <li>Loops</li>
              <li>Date</li>
              <li>Functions and types of functions</li>
              <li>DOM and DOM Manipulation</li>
              <li>Functions and types of functions</li>
              <li>Hoistin</li>
              <li>Callbacks</li>
              <li>Promises</li>
              <li>Async and Await</li>
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
              <li>What is React</li>
              <li>Nodejs Installation</li>
              <li>NPM package Installation</li>
              <li>How to run your app on localhost</li>
              <li>JSX</li>
              <li>Importing and Installing dependencies</li>
              <li>Package.json</li>
              <li>Components</li>
              <li>Styling</li>
              <li>Controlled inputs</li>
              <li>Props</li>
              <li>useState()</li>
              <li>useEffect()</li>
              <li>useRef()</li>
              <li>useContext()</li>
              <li>useReducer()</li>
              <li>API</li>
              <li>Add EventListener</li>
              <li>Tenary operators</li>
              <li>React Router</li>
              <li>React Navigation</li>
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
              <li>What is Next</li>
              <li>Nodejs Installation</li>
              <li>NPM package Installation</li>
              <li>How to run your app on localhost</li>
              <li>JSX</li>
              <li>Importing and Installing dependencies</li>
              <li>Package.json</li>
              <li>Components</li>
              <li>Styling</li>
              <li>Next Image</li>
              <li>Next Link</li>
              <li>Controlled inputs</li>
              <li>Props</li>
              <li>useState()</li>
              <li>useEffect()</li>
              <li>useRef()</li>
              <li>useContext()</li>
              <li>useReducer()</li>
              <li>API</li>
              <li>Add EventListener</li>
              <li>Tenary operators</li>
              <li>Next Routing</li>
              <li>Dynamic Routing</li>
              <li>Next Navigation</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frontend;
