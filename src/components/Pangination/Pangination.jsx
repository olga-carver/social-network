import React from 'react';
import classes from './Pangination.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Pangination = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    let portionSize = 7;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>

        <div className={classes.btnWrap}>
        { portionNumber > 1 &&
        <button className={classes.pangBtn} onClick={() => { setPortionNumber(portionNumber - 1) }}><FontAwesomeIcon icon={faChevronLeft} /></button> }
        </div>


        <ul className={classes.pages}>
          {
            pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map(p => {
              return <li onClick={() => { props.onPageChanged(p); }} className={`${classes.page} ${props.currentPage === p && classes.activePage}`}>{p}</li>
            })
          }
        </ul>

        <div className={classes.btnWrap}>
        { portionCount > portionNumber &&
            <button className={classes.pangBtn} onClick={() => { setPortionNumber(portionNumber + 1) }}><FontAwesomeIcon icon={faChevronRight}/></button> }
        </div>

        </div>
}

export default Pangination;