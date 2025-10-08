import React from "react";
import {m1,l1,l2,p1,p2,p3,p4,p5,p6} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Graduation Project"
            category="Structural and Seismic Study Project"
            image={m1}
            pdf={true}
          />
          <ProjectsCard
            title="Resin artist"
            category="Logo"
            image={l1}
          />
          <ProjectsCard
            title="Physical Therapy"
            category="Logo"
            image={l2}
          />
   
              <ProjectsCard
            title="Resin artist"
            category="Poster"
            image={p6}
          />

        </div>
        <div className="px-6">
          <ProjectsCard
            title="Price List"
            category="Poster"
            image={p2}
          />
   
          <ProjectsCard
            title="Valentine"
            category="Poster"
            image={p4}
          />
          <ProjectsCard
            title="Metabolism"
            category="Poster"
            image={p5}
          />
                 <ProjectsCard
            title="Beauty Clinic"
            category="Logo"
            image={p1}
          />
                           <ProjectsCard
            title="Ehdaa"
            category="Poster"
            image={p3}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
