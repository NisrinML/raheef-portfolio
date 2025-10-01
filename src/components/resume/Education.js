import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";
import CourseCard from "./CourseCard";
import { SiBookstack } from "react-icons/si";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
          <ResumeCard
          badge="2022 - Present"
          title="Civil Engineering"
          subTitle="University graduation project, Farm project and Hospital project."
          des="Designed and analyzed complex structures using AutoCAD, Revit, and Etabs, performing load analysis, reinforcement detailing, and cost optimization."
        />
        <ResumeCard
          badge="2019 - Present"
          title="Logo and Poster Designer"
          subTitle="Freelance."
          des="Created brand identities through logos and visuals aligned with client needs, delivering high-quality designs on time while integrating feedback and trends."
        />

      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019 - 2024"
          title="Al Hawash Privet University"
          subTitle="Syria"
          des="Bachelor’s Degree in Civil Engineering."
        />
        <ResumeCard
          badge="2018 - 2019"
          title="Al-Binaa school"
          subTitle="Syria"
          des="Baccalaureate."
        />
        <ResumeTitle title="Courses" icon={<SiBookstack />} />
        <CourseCard
          content="Graphic design"
        />
        <CourseCard
          content="Photo shop"
        />
        <CourseCard
          content="Illustrator"
        />
         <CourseCard
          content="Adobe XD"
        />
        <CourseCard
          content="Microsoft office"
        />
   
      </div>
    </div>
  );
};

export default Education;
