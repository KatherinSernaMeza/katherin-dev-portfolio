import React from 'react';
import Image from 'next/image';
import bootStrapIcon from '../../assets/svg/bootstrap.svg'
import { loadSvgs } from '../../utils/functions';

// Cargar todos los SVG de la carpeta
const svgs = loadSvgs(require.context('../../assets/svg', false, /\.svg$/));

const SvgGallery: React.FC = () => {
  return (
    <div>
      <h1>Galería de SVGs</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(svgs).map((key) => (
          <div key={key} style={{ margin: '10px', textAlign: 'center' }}>
            <img src={svgs[key].src} alt={key} style={{ width: '100px', height: '100px' }} />
            <p>{key}</p>
          </div>
        ))}
        <Image
             priority
             src={bootStrapIcon}
             alt="Follow us on Twitter"
           />
      </div>
    </div>
  );
};

export default SvgGallery;