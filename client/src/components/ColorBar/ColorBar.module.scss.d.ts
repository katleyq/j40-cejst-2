declare namespace ColorBarModuleScssNamespace {
  export interface IColorBarModuleScss {
    colorBarContainer: string;
    colorBarWrapper: string;
    colorBox: string;
    colorLabel: string;
    colorStrip: string;
    labelStrip: string;
    selected: string;
    selectedColorIndicator: string;
    selectedSwatch: string;
    title: string;
  }
}

declare const ColorBarModuleScssModule: ColorBarModuleScssNamespace.IColorBarModuleScss;

export = ColorBarModuleScssModule;