export const POI_CONFIG = {
  residential: {
    documentId: "f5da6e97-e410-4400-9908-596dd199aa36",
    slug: "hoa-and-residential-communities",
    label: "Residential",
    component: "POIResidential",
    importPath: "../poiIndustries/poiResidential/POIResidential",
    markerPosition: [73, 40, 70],
  },
  cannabis: {
    documentId: "f1df6760-10be-420b-97ec-6581037c36cf",
    slug: "cannabis-facilities",
    label: "Cannabis Facilities",
    component: "POICannabisFacilities",
    importPath: "../poiIndustries/poiCannabisFacilities/POICannabisFacilities",
    markerPosition: [-90, 40, 40],
  },
  hotels: {
    documentId: "8132be9e-ef67-41a5-85cb-44b5ee0753fe",
    slug: "hotels-and-resorts",
    label: "Hotels & Resorts",
    component: "POIHotelResorts",
    importPath: "../poiIndustries/poiHotelResorts/POIHotelResorts",
    markerPosition: [-117, 40, -50],
  },
  shops: {
    documentId: "5eed968b-8b73-4761-86a3-e158103c28d3",
    slug: "retail-and-commercial",
    label: "Retail & Commercial",
    component: "POIShops",
    importPath: "../poiIndustries/poiShops/POIShops",
    markerPosition: [80, 40, 16],
  },
  events: {
    documentId: "b3dc7090-7a15-4ed4-9760-e9584497c6de",
    slug: "events",
    label: "Events",
    component: "POIEvents",
    importPath: "../poiIndustries/poiShops/POIEvents",
    markerPosition: [35, 40, -32],
  },
  construction: {
    documentId: "b059dbf9-78be-4f90-aa65-66b4e8fd095a",
    slug: "construction",
    label: "Construction",
    component: "POIConstruction",
    importPath: "../poiIndustries/poiConstruction/POIConstruction",
    markerPosition: [84, 40, -60],
  },
  about: {
    documentId: "company-about",
    slug: "about",
    label: "About Us",
    component: "POIAbout",
    importPath: "../poiCompany/POIAbout",
    markerPosition: [-18, 40, 33],
  },
} as const;

export type POIConfigKey = keyof typeof POI_CONFIG;
