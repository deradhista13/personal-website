import Layout from "../components/Layout";

import bgwebsite from "../assets/bg-website.png";
import profil from "../assets/Profile.png";
import work from "../assets/work.jpg";
import movie from "../assets/movie-app.png";
import todo from "../assets/todo-list.png";
import pokemon from "../assets/pokemon.png";
import sirloin from "../assets/sirloin.png";

const landingPage = () => {
  return (
    <Layout>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bgwebsite})` }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold text-white tracking-wide leading-tight">
              Best Destination to get your own application developed
            </h1>
            <p className="mb-5 text-white">
              I help business grow by crafting amazing web experiences. If
              you’re looking for a designer and developer that likes to get
              stuff done, let’s talk.
            </p>
            <button className="btn btn-primary bg-[#0A6289] border-none capitalize">
              Meet with Me!
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between max-h-screen px-36 py-20">
        <div className="flex flex-col justify-center space-y-5 max-w-lg">
          <h2 className="font-bold text-4xl text-[#0A6289] leading-snug">
            Hi, I’m Adhista Dera
          </h2>
          <p className="text-[#4A4949] leading-relaxed text-lg tracking-wide text-justify">
            I am a UI Designer and Front-end Engineer from Surakarta, Indonesia.
            I work as a freelancer for individuals, agencies and startups, to
            help them create websites and achieve their desired goals. Love
            visuals and have a sense of humor.
          </p>
          <button className="btn btn-primary bg-[#0A6289] border-none capitalize w-72">
            See More About Me!
          </button>
        </div>
        <figure className="max-w-sm">
          <img src={profil} alt="profil" className="rounded-md" />
        </figure>
      </div>

      <div className="flex flex-row justify-between max-h-screen px-36 py-20 ">
        <figure className="max-w-sm">
          <img src={work} alt="work" className="rounded-md" />
        </figure>
        <div className="flex flex-col justify-center space-y-5 max-w-lg">
          <h2 className="font-bold text-4xl text-[#0A6289] leading-snug text-end">
            How I'm Working
          </h2>
          <p className="text-[#4A4949] leading-relaxed text-lg tracking-wide text-end">
            As a UI Designer I work using Figma to design to prototype. And for
            Front-End Engineer I use Visual Code Studio as a code Editor and for
            Programming Language using HTML, CSS, Javascript, TypeScript with
            ReactJs Framework.
          </p>
        </div>
      </div>

      <div className="max-h-screen px-36 py-5 ">
        <h2 className="font-bold text-4xl text-[#0A6289] leading-snug text-center pb-10">
          My Project
        </h2>
        <div className="grid gap-4 grid-cols-2 ">
          <div className=" grid grid-row justify-items-center p-5">
            <figure className="max-w-sm pb-5">
              <img src={movie} alt="project" />
            </figure>
            <h3 className="font-bold text-[#0A6289] text-2xl leading-snug">
              Movie Application
            </h3>
            <p className="text-[#4A4949] leading-relaxed text-lg tracking-wide">
              Simple movie streaming App
            </p>
          </div>
          {/*  */}
          <div className=" grid grid-row justify-items-center p-5">
            <figure className="max-w-sm pb-5">
              <img src={pokemon} alt="project" />
            </figure>
            <h3 className="font-bold text-[#0A6289] text-2xl leading-snug">
              Pokemon Application
            </h3>
            <p className="text-[#4A4949] leading-relaxed text-lg tracking-wide">
              Simple web app to get pokemons and battle them.
            </p>
          </div>

          <div className=" grid grid-row justify-items-center p-5">
            <figure className="max-w-sm pb-5">
              <img src={todo} alt="project" />
            </figure>
            <h3 className="font-bold text-[#0A6289] text-2xl leading-snug">
              Todo Lst Application
            </h3>
            <p className="text-[#4A4949] leading-relaxed text-lg tracking-wide">
              Simple Todo-List App
            </p>
          </div>

          <div className=" grid grid-row justify-items-center p-5">
            <figure className="max-w-sm pb-5">
              <img src={sirloin} alt="project" />
            </figure>
            <h3 className="font-bold text-[#0A6289] text-2xl leading-snug">
              Sirloin Pos Application
            </h3>
            <p className="text-[#4A4949] leading-relaxed text-lg tracking-wide">
              SIRLOIN an Application about Online Cashier
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default landingPage;
