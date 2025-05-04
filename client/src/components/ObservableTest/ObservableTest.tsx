import React from "react";
import * as Plot from "@observablehq/plot";

import * as styles from "./ObservableTest.module.scss";

export interface IObservableTestProps {
  downloadLink: string;
  buttonText: string;
  imageAltTagText: string;
  color: "gray" | "yellow" | "default";
}

const data = [
  { category: "A", value: 10 },
  { category: "B", value: 20 },
  { category: "C", value: 15 },
];

const chart = Plot.plot({
  marks: [Plot.barY(data, { x: "category", y: "value" })],
});

export default chart;
