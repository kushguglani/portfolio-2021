import React from 'react';
import Loadable from 'react-loadable';

import certifiacteList from '../constants/certifiacte';
import Loading from '../Loading';


const CertifiacteItem = Loadable({
  loader: () => import(/* webpackChunkName: "ProjectItem" */ '../components/CertifiacteItem'),
  loading: Loading,
});

const ProjectSection = () => (
  <section id="certificate" className="light--content" aria-label="certificates made section">
    <h3 className="content--title">
      Certificates
    </h3>
    <div className="projects--content certificate--content">
      {
        certifiacteList.map(({
          name, img,
        }) => (
          <CertifiacteItem
            key={name}
            name={name}
            img={img}
          />
        ))
      }
    </div>
  </section>
);


export default ProjectSection;
