
import { MdDesignServices } from "react-icons/md";
import { ImMakeGroup } from "react-icons/im";
import { VscSymbolOperator } from "react-icons/vsc";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<HiOutlineBuildingOffice2 />}
        title="Structure studies"
        subTitle="Focus on analyzing, designing, and optimizing the structural systems of a project. It ensures that buildings, or any engineered structures are not only aesthetically pleasing but also safe, durable, and efficient."
      />
      <ServicesCard
        icons={<VscSymbolOperator />}
         title="Quantity surveying"
        subTitle="Focuses on managing the financial and contractual aspects of construction projects. It ensures that resources are used efficiently while keeping costs under control without compromising quality."
       />
      <ServicesCard
        icons={<ImMakeGroup />}
        title="Logo design"
        subTitle="The process of creating a unique visual symbol that represents a brand’s identity, values, and vision. It’s often the first impression people have of a business."
      />
      <ServicesCard
        icons={<MdDesignServices />}
        title="Graphic design"
        subTitle="The art of visually communicating ideas through creative layouts, typography, color, and imagery. It blends creativity with strategy to deliver designs that are not only beautiful but also purposeful."
     
 />
    </div>
  );
};

export default MyServices;
