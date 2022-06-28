import { NextPage } from "next";
import Image from "next/image";
import josueImg from "../assets/Josue-Zavala.jpeg";

const IntroductionCard: NextPage = () => {
  return (
    <figure className="bg-slate-100 rounded-xl h-64 pt-4 mt-8 mx-auto sm:h-64 sm:pt-4 md:flex md:p-0 md:h-32 lg:w-1/2 lg:h-32 dark:bg-slate-800">
      <div className="mx-auto w-60 pt-1 pb-1 h-24 mb-4 pl-14 md:w-32 md:pl-0 md:pt-0 md:m-0">
        <Image
          className="md:w-48 md:rounded-none rounded-full pl-8"
          src={josueImg}
          alt=""
          width="127"
          height="128"
        />
      </div>
      <div className="pt-6 md:pl-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium text-slate-300">
            Github seach Users and Repositories
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">By Josue Zavala</div>
          <div className="text-slate-700 dark:text-slate-500">
            Front End Developer
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default IntroductionCard;
