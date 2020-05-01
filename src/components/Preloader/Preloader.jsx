import React from 'react';
import preloader from '../../assets/images/preloader.gif';
import classes from './Preloader.module.scss';

let Preloader = () => {
    return <div >
  <div className={classes.wrapper}>
      <div className={classes.preloader}></div>
  </div>
    </div>
}

export default Preloader;