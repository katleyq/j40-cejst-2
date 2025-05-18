import React from 'react';

import * as styles from './IndAdditiveTractPrioritization.module.scss';

interface IIndAdditiveTractPrioritization {
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

const IndAdditiveTractPrioritization = ({
  threshold,
}: IIndAdditiveTractPrioritization) => {
  const className = styles[`invert${threshold}`] || styles.invert0;
  return <h3 className={className}>{threshold}</h3>;
};

export default IndAdditiveTractPrioritization;
