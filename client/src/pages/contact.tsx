import * as React from 'react';
import {Grid} from '@trussworks/react-uswds';
// import * as Plot from '@observablehq/plot';

import J40MainGridContainer from '../components/J40MainGridContainer';
import Layout from '../components/layout';
import ObservableTest from '../components/ObservableTest';
import IndicatorDemGraph from '../components/IndicatorDemGraph';

interface IContactPageProps {
  location: Location;
}

const ContactPage = ({location}: IContactPageProps) => {
  return (
    <Layout location={location} title={'Observable'}>
      <J40MainGridContainer>
        <section className={'page-heading'}>
          <h1>Testing Observable Plots</h1>
        </section>
        <ObservableTest></ObservableTest>

        <Grid row gap={6}>
          {/* First column */}
          <Grid desktop={{col: 8}} col={12}>
            <h2>Woohoo!</h2>
          </Grid>
          <IndicatorDemGraph></IndicatorDemGraph>

          {/* Second Column */}
          <Grid desktop={{col: 4}} col={12}></Grid>
        </Grid>
      </J40MainGridContainer>
    </Layout>
  );
};

export default ContactPage;
