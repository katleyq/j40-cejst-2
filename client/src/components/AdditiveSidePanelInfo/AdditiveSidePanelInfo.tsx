import React from 'react';
// import {useIntl} from 'gatsby-plugin-intl';
// import {useWindowSize} from 'react-use';

import * as styles from './AdditiveSidePanelInfo.module.scss';
// import * as constants from '../../data/constants';
// import * as EXPLORE_COPY from '../../data/copy/explore';

const AdditiveSidePanelInfo = () => {
  // const intl = useIntl();
  // const {width: windowWidth} = useWindowSize();

  return (
    <aside className={styles.sidePanelInfoContainer}>
      {/* Heading 1 */}
      <header tabIndex={0} className={styles.sidePanelInfoTitle}>
        Total Thresholds Excedded
      </header>

      {/* Paragraph 1 */}
      <p tabIndex={0}>
        The cumulative approach employed in our analysis builds on established practices
        for evaluating cumulative impacts in geospatial mapping tools. This methodology
        aggregates burdens or indicators that exceed predefined thresholds within census
        tracts.
      </p>
    </aside>
  );
};

export default AdditiveSidePanelInfo;
