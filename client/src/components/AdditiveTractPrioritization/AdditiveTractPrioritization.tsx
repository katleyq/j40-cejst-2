import React from 'react';

import * as styles from './AdditiveTractPrioritization.module.scss';

interface IAdditiveTractPrioritization {
  threshold: number;
}

/**
 * This component will return the appropriate designation for the tract's prioritization
 *
 * @param {boolean} scoreNCommunities
 * @param {number | null} tribalCountAK
 * @param {number | null} tribalCountUS
 * @param {number | null} percentTractTribal
 * @return {JSX}
 */

const AdditiveTractPrioritization = ({
  threshold,
}: IAdditiveTractPrioritization) => {
  const className = styles[`invert${threshold}`] || styles.invert0;
  return <h3 className={className}>{threshold}</h3>;
};

// const AdditiveTractPrioritization = ({
//   threshold,
// }: IAdditiveTractPrioritization) => {
//   if (threshold === 0) {
//     return <h3 className={styles.invertZero}>{threshold}</h3>;
//   } else {
//     if (threshold === 1) {
//       return <h3 className={styles.invertOne}>{threshold}</h3>;
//     } else {
//       if (threshold === 2) {
//         return <h3 className={styles.invertTwo}>{threshold}</h3>;
//       } else {
//         if (threshold === 3) {
//           return <h3 className={styles.invertThree}>{threshold}</h3>;
//         } else {
//           if (threshold === 4) {
//             return <h3 className={styles.invertFour}>{threshold}</h3>;
//           } else {
//             if (threshold === 5) {
//             return <h3 className={styles.invertFive}>{threshold}</h3>;
//             } else {
//               if (threshold === 6) {
//               return <h3 className={styles.invertSix}>{threshold}</h3>;
//               } else {
//                 if (threshold === 7) {
//                 return <h3 className={styles.invertSeven}>{threshold}</h3>;
//                 } else {
//                   return <h3 className={styles.invertEight}>{threshold}</h3>;
//                   }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
// }

export default AdditiveTractPrioritization;
