import React, { useState } from "react";
import styles from "./Paginator.module.css";


let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

 let pagesCount = Math.ceil(totalUsersCount / pageSize);
 let pages = [];
 for (let i = 1; i <= pagesCount; i++) {
  pages.push(i);
 }

 let portionCount = Math.ceil(pagesCount / portionSize);
 let [portionNumber, setPortionNumber] = useState(1);
 let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
 let rightPortionPageNumber = portionNumber * portionSize;

 return (
  <ul className={styles.divList}>
   {portionNumber > 1 && <button onClick={() => {
    setPortionNumber(portionNumber - 1);
   }}>PREV</button>}
   {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
   .map((p) => {
    return <li className={currentPage === p && styles.selectedPage} key={p} onClick={() => {
     onPageChanged(p);
    }}>{p}</li>;
   })}
   {portionCount > portionNumber && <button onClick={() => {
    setPortionNumber(portionNumber + 1);
   }}>NEXT</button>}
  </ul>












  // <ul className={styles.divList}>
  //  {pages.map((p) => {
  //   return (
  //    <li className={currentPage === p && styles.selectedPage} onClick={() => {
  //     onPageChanged(p);
  //    }}>{p}</li>
  //   );
  //  })}
  // </ul>
 );
};
export default Paginator;