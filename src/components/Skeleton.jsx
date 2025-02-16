import React from "react";
import { Skeleton } from "@mui/material";
import './skeleton.scss'
function SkeletonLoader() {
  return (
    <div className="skeletons">
        <div className="skeleton-item">
          <Skeleton
          className="test"
            style={{ margin: "-50px 0" }}
            animation="wave"
            width={230}
            height={330}
          />
          <Skeleton className="test" variant="text" animation="wave" width={230} height={50} />
          <Skeleton className="test" variant="text" animation="wave" width={230} height={50} />
        </div>
        <div className="skeleton-item">
          <Skeleton
            style={{ margin: "-50px 0" }}
            animation="wave"
            width={230}
            height={330} className='test'
          />
          <Skeleton variant="text" animation="wave" width={230} height={50} className='test'/>
          <Skeleton variant="text" animation="wave" width={230} height={50} className='test'/>
        </div>
        <div className="skeleton-item">
          <Skeleton
            style={{ margin: "-50px 0" }}
            animation="wave"
            width={230}
            height={330}className='test'
          />
          <Skeleton variant="text" animation="wave" width={230} height={50} className='test'/>
          <Skeleton variant="text" animation="wave" width={230} height={50} className='test'/>
        </div>
        <div className="skeleton-item">
          <Skeleton
            style={{ margin: "-50px 0" }}
            animation="wave"
            width={230}
            height={330} className="test"
          />
          <Skeleton variant="text" animation="wave" width={230} height={50} className='test'/>
          <Skeleton variant="text" animation="wave" width={230} height={50} className='test'/>
        </div>
        <div className="skeleton-item">
          <Skeleton
            style={{ margin: "-50px 0" }}
            animation="wave"
            width={230}
            height={330} className="test"
          />
          <Skeleton variant="text" animation="wave" width={230} height={50} className='test'/>
          <Skeleton variant="text" animation="wave" width={230} height={50} className='test'/>
        </div>
      </div>
  );
}

export default SkeletonLoader;
