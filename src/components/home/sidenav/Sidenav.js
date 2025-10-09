import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Structural and Seismic Study Project</li>
        <li className="sidenavLi">Caste & Create Logo </li>
        <li className="sidenavLi">Physical Therapy Logo</li>
        <li className="sidenavLi">Caste & Create Poster</li>
        <li className="sidenavLi">Price List Poster</li>
        <li className="sidenavLi">Valentine Poster</li>
        <li className="sidenavLi">Metabolism Poster</li>
        <li className="sidenavLi">Beauty Clinic Logo</li>
        <li className="sidenavLi">Ehdaa Poster</li>
      </ul>
      {/* <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">UI & UX Conference at Lviv 2022</li>
        <li className="sidenavLi">How to become a creative designer</li>
        <li className="sidenavLi">
          Designers thoughts about mobile UI templates
        </li>
        <li className="sidenavLi">Designer Conference at Florida, USA 2020</li>
      </ul> */}
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+963 936 674 601</li>
        <li className="sidenavLi">Raheefmah@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav