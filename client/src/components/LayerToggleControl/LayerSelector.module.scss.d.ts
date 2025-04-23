declare namespace LayerToggleControlNamespace {
    export interface ILayerToggleControlScss {
        LayerToggleControlContainer: string;
    }
  }

declare const LayerToggleControlScssModule: LayerToggleControlNamespace.ILayerToggleControlScss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: LayerToggleControlNamespace.ILayerToggleControlScss;
  };

  export = LayerToggleControlScssModule;
