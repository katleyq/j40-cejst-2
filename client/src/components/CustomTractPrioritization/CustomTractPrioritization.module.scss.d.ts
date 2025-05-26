declare namespace CustomTractPrioritizationNamespace {
    export interface ICustomTractPrioritizationScss {
      invert: string;
      invert0: string;
      invert1: string;
      invert2: string;
      invert3: string;
      invert4: string;
      invert5: string;
      invert6: string;
      invert7: string;
      invert8: string;

    }
  }

declare const CustomTractPrioritizationScssModule: CustomTractPrioritizationNamespace.ICustomTractPrioritizationScss & {
    /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
    locals: TractPrioritizationNamespace.ITractPrioritizationScss;
  };

  export = CustomTractPrioritizationScssModule;
