import React, { useState } from 'react';
import { FaLandmark } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';

import MapModal from '../ui/MapModal';
import Hyperlink from '../ui/Hyperlink';

const SingleLandmarkInfo = ({ data }) => {
  const [map, setMap] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setMap(true);
  };

  return (
    <>
      {map && (
        <MapModal
          data={data}
          setMap={setMap}
        />
      )}
      <div className="flex items-center justify-center">
        <FaLandmark className="mr-2 fill-slate-600" />
        <p className="text-slate-600">{data.number}</p>
      </div>
      <h1 className="my-4 px-2 text-xl sm:text-2xl text-center">
        {data.title}
      </h1>
      <div className="my-2 mx-auto py-2 border-y text-center">
        <ul className="font-light text-sm md:text-base">
          <li className="my-1 italic">Group {data.group}</li>
          <li className="my-1">{data.marker_address}</li>
          <li className="flex items-center justify-center my-1 text-lg">
            <GrMapLocation className="mr-1" />
            <Hyperlink
              href="#"
              fontWeight={'medium'}
              handleClick={handleClick}>
              View Map
            </Hyperlink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SingleLandmarkInfo;
