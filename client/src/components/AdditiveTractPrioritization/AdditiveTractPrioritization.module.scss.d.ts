declare namespace AdditiveTractPrioritizationNamespace {
    export interface IAdditiveTractPrioritizationScss {
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

declare const AdditiveTractPrioritizationScssModule: AdditiveTractPrioritizationNamespace.IAdditiveTractPrioritizationScss & {
    /** WARNING: Only available when "css-loader" is used without "style-loader" or "mini-css-extract-plugin" */
    locals: TractPrioritizationNamespace.ITractPrioritizationScss;
  };

  export = AdditiveTractPrioritizationScssModule;
