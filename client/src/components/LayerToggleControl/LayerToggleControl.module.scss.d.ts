// declare namespace LayerToggleControlNamespace {
//     export interface ILayerToggleControlScss {
//       noMarginTop: string;
//       label: string;
//     }
//   }

// declare const LayerToggleControlScssModule: LayerToggleControlNamespace.ILayerToggleControlScss & {
//     /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
//     locals: LayerToggleControlNamespace.ILayerToggleControlScss;
//   };

//   export = LayerToggleControlScssModule;

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
