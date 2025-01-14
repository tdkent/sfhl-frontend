import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cloudinaryUrl, cloudinaryFolder } from '../../config/config';
import ImageAttribution from './ImageAttribution';

const SingleLandmarkImages = ({ imgUrls, title, lmNum }) => {
  return (
    <div>
      <h2 className="mb-2 text-lg font-medium">Images</h2>
      {imgUrls.map((url) => {
        return (
          <div key={url.split('hlsf')[1]}>
            <Link
              href={`${cloudinaryUrl}/q_100${cloudinaryFolder}${
                url.split('hlsf')[1]
              }`}>
              <Image
                className="my-4 shadow-md shadow-slate-400 rounded-lg w-[600px]"
                src={`${cloudinaryUrl}/q_70${cloudinaryFolder}${
                  url.split('hlsf')[1]
                }`}
                alt={title}
                width={990}
                height={660}
              />
            </Link>
          </div>
        );
      })}
      <ImageAttribution lmNum={lmNum} />
    </div>
  );
};

export default SingleLandmarkImages;
