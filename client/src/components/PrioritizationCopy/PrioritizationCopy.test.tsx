import {render, screen} from '@testing-library/react';
import React from 'react';
import {LocalizedComponent} from '../../test/testHelpers';
import PrioritizationCopy from './PrioritizationCopy';

describe('rendering of PrioritizationCopy Component -', () => {
  const testCases = [
    {
      totalCategoriesPrioritized: 0,
      totalBurdensPrioritized: 0,
      isAdjacencyThreshMet: false,
      isAdjacencyLowIncome: false,
      tribalCountAK: null,
      tribalCountUS: null,
      percentTractTribal: null,
      isIslandLowIncome: false,
      isGrandfathered: false,
      // eslint-disable-next-line max-len
      para1: `This tract is not considered disadvantaged. It does not meet any burden thresholds `,
    },
    {
      totalCategoriesPrioritized: 0,
      totalBurdensPrioritized: 1,
      isAdjacencyThreshMet: false,
      isAdjacencyLowIncome: false,
      tribalCountAK: null,
      tribalCountUS: null,
      percentTractTribal: null,
      isIslandLowIncome: false,
      isGrandfathered: false,
      // eslint-disable-next-line max-len
      para1: `This tract is not considered disadvantaged. It meets 1 burden threshold`,
    },
    {
      totalCategoriesPrioritized: 0,
      totalBurdensPrioritized: 5,
      isAdjacencyThreshMet: false,
      isAdjacencyLowIncome: false,
      tribalCountAK: null,
      tribalCountUS: null,
      percentTractTribal: null,
      isIslandLowIncome: false,
      isGrandfathered: false,
      // eslint-disable-next-line max-len
      para1: `This tract is not considered disadvantaged. It meets more than 1 burden threshold `,
    },
    {
      totalCategoriesPrioritized: 2,
      totalBurdensPrioritized: 1,
      isAdjacencyThreshMet: false,
      isAdjacencyLowIncome: false,
      tribalCountAK: null,
      tribalCountUS: null,
      percentTractTribal: null,
      isIslandLowIncome: false,
      isGrandfathered: false,
      // eslint-disable-next-line max-len
      para1: `This tract is considered disadvantaged because it meets 1 burden threshold `,
    },
    {
      totalCategoriesPrioritized: 2,
      totalBurdensPrioritized: 5,
      isAdjacencyThreshMet: false,
      isAdjacencyLowIncome: false,
      tribalCountAK: null,
      tribalCountUS: null,
      percentTractTribal: null,
      isIslandLowIncome: false,
      isGrandfathered: false,
      // eslint-disable-next-line max-len
      para1: `This tract is considered disadvantaged because it meets more than 1 burden threshold `,
    },
  ];

  testCases.forEach((testCase) => {
    // eslint-disable-next-line max-len
    it(`checks if component renders ${testCase.para1} when totCats = ${testCase.totalCategoriesPrioritized}, totBurds = ${testCase.totalBurdensPrioritized}, isAdj = ${testCase.isAdjacencyThreshMet}, isAdjLI = ${testCase.isAdjacencyLowIncome}, tribal % = ${testCase.percentTractTribal},`, () => {
      const {asFragment} = render(
          <LocalizedComponent>
            <PrioritizationCopy
              totalCategoriesPrioritized={testCase.totalCategoriesPrioritized}
              totalBurdensPrioritized={testCase.totalBurdensPrioritized}
              isAdjacencyThreshMet={testCase.isAdjacencyThreshMet}
              isAdjacencyLowIncome={testCase.isAdjacencyLowIncome}
              tribalCountAK={testCase.tribalCountAK}
              tribalCountUS={null}
              percentTractTribal={testCase.percentTractTribal}
              isIslandLowIncome={testCase.isIslandLowIncome}
              isGrandfathered={testCase.isGrandfathered}
            />
          </LocalizedComponent>,
      );
      expect(asFragment()).toMatchSnapshot();

      screen.getByText((content) => content.startsWith(testCase.para1));
    });
  });
});
