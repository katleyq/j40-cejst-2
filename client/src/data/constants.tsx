/* eslint quotes: [2, "double"] */

import {LngLatBoundsLike} from "maplibre-gl";
import {isMobile as isMobileReactDeviceDetect} from "react-device-detect";

export const isMobile = isMobileReactDeviceDetect;

// Pages URL
export const PAGES_ENDPOINTS = {
  EXPLORE: "/",
  METHODOLOGY: "/methodology",
  DOWNLOADS: "/user-guide",
  TSD: "/technical-support-document",
  ABOUT: "/about",
  FAQS: "/frequently-asked-questions",
  PUBLIC_ENG: "/public-engagement",
  CONTACT: "/contact",
  PREVIOUS_VERSIONS: "/previous-versions",
  PRIVACY: "/privacy",
  DATA: "/data",
};

// Performance markers
export const PERFORMANCE_MARKER_MAP_IDLE = "MAP_IDLE";

// ******* PROPERTIES FROM TILE SERVER **************
export type J40Properties = { [key: string]: any };

// ****** SIDE PANEL BACKEND SIGNALS ***********

export const MISSING_DATA_STRING = "--";

// Tribal signals
export const TRIBAL_ID = "tribalId";
export const LAND_AREA_NAME = "landAreaName";
export const TRIBAL_AREAS_PERCENTAGE = "TA_PERC_FE";
export const TRIBAL_AREAS_COUNT_AK = "TA_COUNT_AK";
export const TRIBAL_AREAS_COUNT_CONUS = "TA_COUNT_C";

// Set the threshold percentile used by most indicators in the side panel
export const DEFAULT_THRESHOLD_PERCENTILE = 90;

// General Census Track Info
export const GEOID_PROPERTY = "GEOID10";
export const COUNTY_NAME = "CF";
export const STATE_NAME = "SF";
export const TOTAL_POPULATION = "TPF";

// GEODA data
export const GI_STAR_BURDEN = "GIS_BURD";
export const PSIM_BURDEN = "P_BURD";
export const BURDEN_ID = "ID_BURD";
export const GI_STAR_INDICATOR = "GIS_IND";
export const PSIM_INDICATOR = "P_IND";
export const INDICATOR_ID = "ID_IND";

// Demographics
export const DEMO_NON_HISPANIC_WHITE = "DM_W";
export const DEMO_BLACK = "DM_B";
export const DEMO_AMERICAN_INDIAN = "DM_AI";
export const DEMO_ASIAN = "DM_A";
export const DEMO_HAWAIIAN = "DM_HI";
export const DEMO_OTHER_RACE = "DM_O";
export const DEMO_TWO_OR_MORE_RACES = "DM_T";
export const DEMO_HISPANIC = "DM_H";
export const DEMO_AGE_UNDER_10 = "AGE_10";
export const DEMO_AGE_MID = "AGE_MIDDLE";
export const DEMO_AGE_OVER_64 = "AGE_OLD";

/**
 * The SCORE_BOUNDAY_THRESHOLD will determine if the tract is disadvantaged
 * or not. Currently all values are railed to 0 or 1. If the
 * SCORE_PROPERTY_HIGH is greater than SCORE_BOUNDARY_THRESHOLD,
 * the tract will be considered disadvantaged.
 */
export const SCORE_BOUNDARY_THRESHOLD = 0.6;
export const PSIM_POP_THRESHOLD = 100;

// Determines the X of Y threshold exceeded
export const TOTAL_NUMBER_OF_DISADVANTAGE_INDICATORS = "TC";
export const TOTAL_NUMBER_OF_INDICATORS = "THRHLD";
export const COUNT_OF_CATEGORIES_DISADV = "CC";
export const SCORE_N_COMMUNITIES = "SN_C";
export const SCORE_N_TRIBAL = "SN_T";
export const IS_GRANDFATHERED = "SN_GRAND";

export const SIDE_PANEL_STATE = "UI_EXP";
export const SIDE_PANEL_STATE_VALUES = {
  NATION: "Nation",
  PUERTO_RICO: "Puerto Rico",
  ISLAND_AREAS: "Island Areas",
};

/**
 * Note that the FIPS code is a string
 * The FIPS codes listed are:
 * 60: American Samoa, 66: Guam, 69: N. Mariana Islands, 78: US Virgin Islands
 */
export const TILES_ISLAND_AREA_FIPS_CODES = ["60", "66", "69", "78"];

// Climate category
export const IS_CLIMATE_FACTOR_DISADVANTAGED = "N_CLT";
export const IS_CLIMATE_EXCEED_ONE_OR_MORE_INDICATORS = "N_CLT_EOMI";

export const EXP_AGRICULTURE_LOSS_PERCENTILE = "EALR_PFS";
export const IS_EXCEEDS_THRESH_FOR_EXP_AGR_LOSS = "EAL_ET";

export const EXP_BUILDING_LOSS_PERCENTILE = "EBLR_PFS";
export const IS_EXCEEDS_THRESH_FOR_EXP_BLD_LOSS = "EBL_ET";

export const EXP_POPULATION_LOSS_PERCENTILE = "EPLR_PFS";
export const IS_EXCEEDS_THRESH_FOR_EXP_POP_LOSS = "EPL_ET";

export const FLOODING_PERCENTILE = "FLD_PFS";
export const IS_EXCEEDS_THRESH_FLOODING = "FLD_ET";

export const WILDFIRE_PERCENTILE = "WFR_PFS";
export const IS_EXCEEDS_THRESH_WILDFIRE = "WFR_ET";

export const IS_EXCEED_BOTH_SOCIO_INDICATORS = "N_EBSI";

export const POVERTY_BELOW_200_PERCENTILE = "P200_I_PFS";
export const IS_FEDERAL_POVERTY_LEVEL_200 = "FPL200S";
// Percentile FPL 200 for islands only
export const CENSUS_DECENNIAL_POVERTY_LESS_THAN_200_FPL_PERCENTILE = "FPL200P";

export const HIGHER_ED_PERCENTILE = "CA";
export const IS_HIGHER_ED_PERCENTILE = "CA_LT20";

export const NON_HIGHER_ED_PERCENTILE = "NCA";

// Energy category
export const IS_ENERGY_FACTOR_DISADVANTAGED = "N_ENY";
export const IS_ENERGY_EXCEED_ONE_OR_MORE_INDICATORS = "N_ENY_EOMI";

export const ENERGY_PERCENTILE = "EBF_PFS";
export const IS_EXCEEDS_THRESH_FOR_ENERGY_BURDEN = "EB_ET";

export const PM25_PERCENTILE = "PM25F_PFS";
export const IS_EXCEEDS_THRESH_FOR_PM25 = "PM25_ET";

// Transport category
export const IS_TRANSPORT_FACTOR_DISADVANTAGED = "N_TRN";
export const IS_TRANSPORT_EXCEED_ONE_OR_MORE_INDICATORS = "N_TRN_EOMI";

export const DIESEL_MATTER_PERCENTILE = "DSF_PFS";
export const IS_EXCEEDS_THRESH_FOR_DIESEL_PM = "DS_ET";

export const TRAVEL_DISADV_PERCENTILE = "TD_PFS";
export const IS_EXCEEDS_THRESH_TRAVEL_DISADV = "TD_ET";

export const TRAFFIC_PERCENTILE = "TF_PFS";
export const IS_EXCEEDS_THRESH_FOR_TRAFFIC_PROX = "TP_ET";

// Housing category
export const IS_HOUSING_FACTOR_DISADVANTAGED = "N_HSG";
export const IS_HOUSING_EXCEED_ONE_OR_MORE_INDICATORS = "N_HSG_EOMI";

export const HISTORIC_UNDERINVESTMENT_EXCEED_THRESH = "HRS_ET";
export const HISTORIC_UNDERINVESTMENT_RAW_YES = "1";

export const HOUSING_BURDEN_PROPERTY_PERCENTILE = "HBF_PFS";
export const IS_EXCEEDS_THRESH_FOR_HOUSE_BURDEN = "HB_ET";

export const IMPERVIOUS_PERCENTILE = "IS_PFS";
export const IS_EXCEEDS_THRESH_IMPERVIOUS = "IS_ET";

export const KITCHEN_PLUMB_PERCENTILE = "KP_PFS";
export const IS_EXCEEDS_THRESH_KITCHEN_PLUMB = "KP_ET";

export const LEAD_PAINT_PERCENTILE = "LPF_PFS";
export const IS_EXCEEDS_THRESH_FOR_LEAD_PAINT_AND_MEDIAN_HOME_VAL = "LPP_ET";

// Pollution category
export const IS_POLLUTION_FACTOR_DISADVANTAGED = "N_PLN";
export const IS_POLLUTION_EXCEED_ONE_OR_MORE_INDICATORS = "N_PLN_EOMI";

export const AML_RAW_YES = 1;
export const ABANDON_LAND_MINES_EXCEEDS_THRESH = "AML_ET";

export const FORMER_DEF_SITES_RAW_VALUE = "FUDS_RAW";
export const FUDS_RAW_YES = 1;
export const FUDS_RAW_NO = 0;
export const FORMER_DEF_SITES_EXCEEDS_THRESH = "FUDS_ET";

export const PROXIMITY_TSDF_SITES_PERCENTILE = "TSDF_PFS";
export const IS_EXCEEDS_THRESH_FOR_HAZARD_WASTE = "TSDF_ET";

export const PROXIMITY_NPL_SITES_PERCENTILE = "NPL_PFS";
export const IS_EXCEEDS_THRESH_FOR_SUPERFUND = "NPL_ET";

export const PROXIMITY_RMP_SITES_PERCENTILE = "RMP_PFS";
export const IS_EXCEEDS_THRESH_FOR_RMP = "RMP_ET";

// Water category
export const IS_WATER_FACTOR_DISADVANTAGED = "N_WTR";
export const IS_WATER_EXCEED_ONE_OR_MORE_INDICATORS = "N_WTR_EOMI";

export const LEAKY_UNDER_PERCENTILE = "UST_PFS";
export const IS_EXCEEDS_THRESH_LEAKY_UNDER = "UST_ET";

export const WASTEWATER_PERCENTILE = "WF_PFS";
export const IS_EXCEEDS_THRESH_FOR_WASTEWATER = "WD_ET";

// Health category
export const IS_HEALTH_FACTOR_DISADVANTAGED = "N_HLTH";
export const IS_HEALTH_EXCEED_ONE_OR_MORE_INDICATORS = "N_HLTH_EOMI";

export const ASTHMA_PERCENTILE = "AF_PFS";
export const IS_EXCEEDS_THRESH_FOR_ASTHMA = "A_ET";

export const DIABETES_PERCENTILE = "DF_PFS";
export const IS_EXCEEDS_THRESH_FOR_DIABETES = "DB_ET";

export const HEART_PERCENTILE = "HDF_PFS";
export const IS_EXCEEDS_THRESH_FOR_HEART_DISEASE = "HD_ET";

export const LIFE_PERCENTILE = "LLEF_PFS";
export const IS_EXCEEDS_THRESH_FOR_LOW_LIFE_EXP = "LLE_ET";

// Workforce category
export const IS_WORKFORCE_FACTOR_DISADVANTAGED = "N_WKFC";
export const IS_WORKFORCE_EXCEED_ONE_OR_MORE_INDICATORS = "N_WKFC_EOMI";

export const LINGUISTIC_ISOLATION_PROPERTY_PERCENTILE = "LIF_PFS";
export const IS_EXCEEDS_THRESH_FOR_LINGUISITIC_ISO = "LISO_ET";

export const LOW_MEDIAN_INCOME_PERCENTILE = "LMI_PFS";
export const IS_EXCEEDS_THRESH_FOR_LOW_MEDIAN_INCOME = "LMI_ET";
export const ISLAND_AREAS_LOW_MEDIAN_INCOME_LOW_HS_EDU_PERCENTILE_FIELD =
  "IALMILHSE_PFS";
export const IS_EXCEEDS_THRESH_FOR_ISLAND_AREA_LOW_MEDIAN_INCOME = "IA_LMI_ET";

export const UNEMPLOYMENT_PROPERTY_PERCENTILE = "UF_PFS";
export const IS_EXCEEDS_THRESH_FOR_UNEMPLOYMENT = "UN_ET";
export const ISLAND_AREAS_UNEMPLOYMENT_LOW_HS_EDU_PERCENTILE_FIELD =
  "IAULHSE_PFS";
export const IS_EXCEEDS_THRESH_FOR_ISLAND_AREA_UNEMPLOYMENT = "IA_UN_ET";

export const POVERTY_BELOW_100_PERCENTILE = "P100_PFS";
export const IS_EXCEEDS_THRESH_FOR_BELOW_100_POVERTY = "POV_ET";
export const ISLAND_AREAS_POVERTY_LOW_HS_EDU_PERCENTILE_FIELD = "IAPLHSE_PFS";
export const IS_EXCEEDS_THRESH_FOR_ISLAND_AREA_BELOW_100_POVERTY = "IA_POV_ET";

export const IS_WORKFORCE_EXCEED_BOTH_SOCIO_INDICATORS = "N_WKFC_EBSI";

export const HIGH_SCHOOL_PROPERTY_PERCENTILE = "HSEF";
export const IS_LOW_HS_EDUCATION_LOW_HIGHER_ED_PRIORITIZED = "LHE";
export const ISLAND_AREAS_HS_EDU_PERCENTAGE_FIELD = "IAHSEF";
export const ISLAND_AREA_LOW_HS_EDU = "IALHE";

// Misc category
export const ADJACENCY_EXCEEDS_THRESH = "ADJ_ET";
export const ADJACENCY_LOW_INCOME_EXCEEDS_THRESH = "AJDLI_ET";

export const IMPUTE_FLAG = "IMP_FLG";

// ********** MAP CONSTANTS ***************
// Source name constants
export const BASE_MAP_SOURCE_NAME = "base-map-source-name";
export const HIGH_ZOOM_SOURCE_NAME = "high-zoom-source-name";
export const LOW_ZOOM_SOURCE_NAME = "low-zoom-source-name";

export const PSIM_BURDEN_HIGH_ZOOM_SOURCE_NAME =
  "psim-burden-high-zoom-source-name";
export const PSIM_BURDEN_LOW_ZOOM_SOURCE_NAME =
  "psim-burden-low-zoom-source-name";
export const PSIM_INDICATOR_HIGH_ZOOM_SOURCE_NAME =
  "psim-indicator-high-zoom-source-name";
export const PSIM_INDICATOR_LOW_ZOOM_SOURCE_NAME =
  "psim-indicator-low-zoom-source-name";

export const ADD_BURD_HIGH_ZOOM_SOURCE_NAME = "add-burd-high-zoom-source-name";
export const ADD_BURD_LOW_ZOOM_SOURCE_NAME = "add-burd-low-zoom-source-name";
export const ADD_IND_HIGH_ZOOM_SOURCE_NAME = "add-ind-high-zoom-source-name";
export const ADD_IND_LOW_ZOOM_SOURCE_NAME = "add-ind-low-zoom-source-name";

export const CUSTOM_BURD_HIGH_ZOOM_SOURCE_NAME = "custom-burd-high-zoom-source-name";
export const CUSTOM_IND_HIGH_ZOOM_SOURCE_NAME = "custom-ind-high-zoom-source-name";

export const TRIBAL_SOURCE_NAME = "tribal-source-name";

// Layer ID constants
export const SCORE_SOURCE_LAYER = "blocks"; // The name of the layer within the tiles that contains the score
export const TRIBAL_SOURCE_LAYER = "blocks";
export const BASE_MAP_LAYER_ID = "base-map-layer-id";
export const HIGH_ZOOM_LAYER_ID = "high-zoom-layer-id";
export const PRIORITIZED_HIGH_ZOOM_LAYER_ID = "prioritized-high-zoom-layer-id";
export const GRANDFATHERED_HIGH_ZOOM_LAYER_ID =
  "grandfathered-high-zoom-layer-id";
export const LOW_ZOOM_LAYER_ID = "low-zoom-layer-id";
export const FEATURE_BORDER_LAYER_ID = "feature-border-layer-id";
export const SELECTED_FEATURE_BORDER_LAYER_ID =
  "selected-feature-border-layer-id";

export const PSIM_BURD_SELECTED_FEATURE_BORDER_LAYER_ID =
  "psim-burd-selected-feature-border-layer-id";
export const PSIM_IND_SELECTED_FEATURE_BORDER_LAYER_ID =
  "psim-ind-selected-feature-border-layer-id";

export const ADD_BURD_SELECTED_FEATURE_BORDER_LAYER_ID =
  "add-burd-selected-feature-border-layer-id";
export const ADD_IND_SELECTED_FEATURE_BORDER_LAYER_ID =
  "add-ind-selected-feature-border-layer-id";

// Add new layer IDs
export const PSIM_BURDEN_LAYER_ID = "psim-burden-layer-id";
export const PSIM_BURDEN_LOW_LAYER_ID = "psim-burden-low-layer-id";
export const PSIM_BURDEN_HIGH_LAYER_ID = "psim-burden-high-layer-id";

export const PSIM_INDICATOR_LAYER_ID = "psim-indicator-layer-id";
export const PSIM_INDICATOR_LOW_LAYER_ID = "psim-indicator-low-layer-id";
export const PSIM_INDICATOR_HIGH_LAYER_ID = "psim-indicator-high-layer-id";

export const LEGACY_LAYER_ID = "legacy-layer-id";

export const ADD_BURDEN_LAYER_ID = "add-burden-layer-id";
export const ADD_BURDEN_LOW_LAYER_ID = "add-burden-low-layer-id";
export const ADD_BURDEN_HIGH_LAYER_ID = "add-burden-high-layer-id";

export const ADD_INDICATOR_LAYER_ID = "add-indicator-layer-id";
export const ADD_INDICATOR_LOW_LAYER_ID = "add-indicator-low-layer-id";
export const ADD_INDICATOR_HIGH_LAYER_ID = "add-indicator-high-layer-id";

export const CUSTOM_BURDEN_LAYER_ID = "custom-burden-layer-id";
export const CUSTOM_BURDEN_HIGH_LAYER_ID = "custom-burden-high-layer-id";

export const CUSTOM_INDICATOR_LAYER_ID = "custom-indicator-layer-id";
export const CUSTOM_INDICATOR_HIGH_LAYER_ID = "custom-indicator-high-layer-id";

export const TRIBAL_LAYER_ID = "tribal-layer-id";
export const TRIBAL_ALASKA_POINTS_LAYER_ID = "tribal-alaska-points-layer-id";
export const TRIBAL_LABELS_LAYER_ID = "tribal-labels-layer-id";

// Used in layer filters:
export const SCORE_PROPERTY_LOW = "SCORE";
export const SCORE_PROPERTY_HIGH = "SN_C";
export const ADD_BURD = "CC";
export const ADD_IND = "TC";

// Zoom
export const GLOBAL_MIN_ZOOM = 3;
export const GLOBAL_MAX_ZOOM = 22;

export const GLOBAL_MIN_ZOOM_LOW = 3;
export const GLOBAL_MAX_ZOOM_LOW = 5;

export const GLOBAL_MIN_ZOOM_HIGH = 5;
export const GLOBAL_MAX_ZOOM_HIGH = 11;

export const GLOBAL_MIN_ZOOM_FEATURE_BORDER = 5;
export const GLOBAL_MAX_ZOOM_FEATURE_BORDER = 22;
export const TRIBAL_MIN_ZOOM = 6.6;
export const TRIBAL_MAX_ZOOM = 22;
export const ALASKA_MIN_ZOOM = 3;
export const ALASKA_MAX_ZOOM = 22;

// Opacity
export const FEATURE_BORDER_OPACITY = 0.5;
export const HIGH_ZOOM_PRIORITIZED_FEATURE_FILL_OPACITY = 0.3;
export const LOW_ZOOM_PRIORITIZED_FEATURE_FILL_OPACITY = 0.6;
export const NON_PRIORITIZED_FEATURE_FILL_OPACITY = 0;
export const TRIBAL_FEATURE_FILL_OPACITY = 0.3;
export const LOW_ZOOM_PSIM_FEATURE_FILL_OPACITY = 0.7;
export const HIGH_ZOOM_PSIM_FEATURE_FILL_OPACITY = 0.6;

// Colors
export const FEATURE_BORDER_COLOR = "#4EA5CF";
export const SELECTED_FEATURE_BORDER_COLOR = "#1A4480";
export const PRIORITIZED_FEATURE_FILL_COLOR = "#0050D8";
export const PSIM_FEATURE_FILL_COLOR = "#612D29";
export const GRANDFATHERED_FEATURE_FILL_COLOR = "#8168B3";

export const TRIBAL_BORDER_COLOR = "#4EA5CF";
export const SELECTED_TRIBAL_BORDER_COLOR = "#1A4480";
export const TRIBAL_FILL_COLOR = "#768FB3";
export const TRIBAL_ALASKA_CIRCLE_FILL_COLOR = "#768FB3";
export const TRIBAL_ALASKA_CIRCLE_RADIUS = 5;

export const PSIM_FEATURE_BORDER_COLOR = "#A99B83";
export const ADD_FEATURE_BORDER_COLOR = "#A0506B";

export const PSIM_SELECTED_FEATURE_BORDER_COLOR = "#242426";
export const ADD_SELECTED_FEATURE_BORDER_COLOR = "#290a01";

export const PSIM_DEFAULT_COLOR = "#FBF8F3";
export const PSIM_COLD_COLOR = "#1818ed";
export const PSIM_VERY_COLD_COLOR = "#0101b3";
// export const PSIM_HOT_COLOR = "#7a1408";
export const PSIM_HOT_COLOR = "#cf1717";
export const PSIM_VERY_HOT_COLOR = "#ad0000";
// export const PSIM_VERY_HOT_COLOR = "#bd0606";
export const PSIM_NA_COLOR = "#FBF8F3";

// export const ADD_0_COLOR = "#FBF8F3";
// export const ADD_1_COLOR = "#f88b78";
// export const ADD_2_COLOR = "#fe5b4b";
// export const ADD_3_COLOR = "#ec2c2c";
// export const ADD_4_COLOR = "#d91d1d";
// export const ADD_5_COLOR = "#b50f0f";
// export const ADD_6_COLOR = "#990b0b";
// export const ADD_7_COLOR = "#3d0101";

// Magma
export const ADD_0_COLOR = "#FBF8F3"; // Lightest
export const ADD_1_COLOR = "#febb81";
export const ADD_2_COLOR = "#f8765c";
export const ADD_3_COLOR = "#d3436e";
export const ADD_4_COLOR = "#982d80";
export const ADD_5_COLOR = "#5f187f";
export const ADD_6_COLOR = "#221150";
export const ADD_7_COLOR = "#000004"; // Darkest

// Inferno
// export const ADD_0_COLOR = "#FBF8F3"; // Lightest
// export const ADD_1_COLOR = "#fac228";
// export const ADD_2_COLOR = "#f57d15";
// export const ADD_3_COLOR = "#d44842";
// export const ADD_4_COLOR = "#9f2a63";
// export const ADD_5_COLOR = "#65156e";
// export const ADD_6_COLOR = "#280b53";
// export const ADD_7_COLOR = "#000004";

// Viridis
// export const ADD_0_COLOR = "#FBF8F3"; // Lightest
// export const ADD_1_COLOR = "#a0da39";
// export const ADD_2_COLOR = "#4ac16d";
// export const ADD_3_COLOR = "#1fa187";
// export const ADD_4_COLOR = "#277f8e";
// export const ADD_5_COLOR = "#365c8d";
// export const ADD_6_COLOR = "#46327e";
// export const ADD_7_COLOR = "#440154";

// Widths
export const FEATURE_BORDER_WIDTH = 0.8;
export const SELECTED_FEATURE_BORDER_WIDTH = 5.0;
export const ALAKSA_POINTS_STROKE_WIDTH = 1.0;

// Bounds - these bounds can be obtained by using the getCurrentMapBoundingBox() function in the map
export const GLOBAL_MAX_BOUNDS: LngLatBoundsLike = [
  [-180.118306, 5.49955],
  [-65.0, 83.162102],
];

export const LOWER_48_BOUNDS: LngLatBoundsLike = [
  [-134.943542, 1.301806],
  [-60.060729, 57.050462],
];

export const ALASKA_BOUNDS: LngLatBoundsLike = [
  [-183.856888, 50.875311],
  [-140.932617, 71.958797],
];

export const HAWAII_BOUNDS: LngLatBoundsLike = [
  [-161.174534, 17.65217],
  [-154.21894, 23.603623],
];

export const PUERTO_RICO_BOUNDS: LngLatBoundsLike = [
  [-67.945404, 17.88328],
  [-65.220703, 18.515683],
];

export const GUAM_BOUNDS: LngLatBoundsLike = [
  [-215.389709, 13.225909],
  [-215.040894, 13.663335],
];

export const MARIANA_ISLAND_BOUNDS: LngLatBoundsLike = [
  [-215.313449, 14.007801],
  [-213.742404, 19.750326],
];

export const AMERICAN_SAMOA_BOUNDS: LngLatBoundsLike = [
  [-172.589874, -15.548699],
  [-169.6433, -12.046934],
];

export const US_VIRGIN_ISLANDS_BOUNDS: LngLatBoundsLike = [
  [-65.5782239, 17.6739145],
  [-64.2704123, 18.7495796],
];

export const DEFAULT_CENTER = [33.4687126, -97.502136];

// USWDS Breakpoints
export const USWDS_BREAKPOINTS = {
  MOBILE_LG: 480,
  DESKTOP: 1024,
};

// ********** SURVEY LINKS ***************

export const DATA_SURVEY_LINKS = {
  EN: "https://eop.gov1.qualtrics.com/jfe/form/SV_3WC1hmbqoS4Ak2G",
  ES: "https://eop.gov1.qualtrics.com/jfe/form/SV_bNsBlreFIhs9uFU",
};

export const SITE_SATISFACTION_SURVEY_LINKS = {
  EN: "https://eop.gov1.qualtrics.com/jfe/form/SV_2mF9GXOhDKKjxcy",
  ES: "https://eop.gov1.qualtrics.com/jfe/form/SV_bgfSa2U8NGuyr9c",
};

export const CONTACT_SURVEY_LINKS = {
  EN: "https://eop.gov1.qualtrics.com/jfe/form/SV_4Znk7uRks9ZmfFI",
  ES: "https://eop.gov1.qualtrics.com/jfe/form/SV_9Ww5utf8pqBwdRs",
};

export const CENSUS_TRACT_SURVEY_LINKS = {
  EN: "https://eop.gov1.qualtrics.com/jfe/form/SV_73d0HfsVzCz6F0O",
  ES: "https://eop.gov1.qualtrics.com/jfe/form/SV_3LbCTDxjTqZdyPI",
};

export const TILE_BASE_URL =
  process.env.DATA_SOURCE === "local" ?
    process.env.GATSBY_LOCAL_TILES_BASE_URL :
    process.env.GATSBY_CDN_TILES_BASE_URL;

export const TILE_PATH =
  process.env.DATA_SOURCE === "local" ?
    process.env.GATSBY_DATA_PIPELINE_SCORE_PATH_LOCAL :
    process.env.GATSBY_2_0_SCORE_PATH;

export const MAP_TRACT_SEARCH_PATH =
  process.env.DATA_SOURCE === "local" ?
    process.env.GATSBY_DATA_PIPELINE_SEARCH_PATH_LOCAL :
    process.env.GATSBY_2_0_MAP_TRACT_SEARCH_PATH;

export const GATSBY_DATA_PIPELINE_TRIBAL_PATH =
  process.env.DATA_SOURCE === "local" ?
    process.env.GATSBY_DATA_PIPELINE_TRIBAL_PATH_LOCAL :
    process.env.GATSBY_2_0_TRIBAL_PATH;
