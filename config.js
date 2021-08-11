const config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1IjoiY2ZpZWJlciIsImEiOiJja3J3aG44MGIwZ3IzMm9vN2NvajczZzJwIn0.B9P8F_VRLzdMtl2TNgzZpg",
  CSV: "./leadingbyexample.csv",
  center: [-77.0365581,38.8949924],
  zoom: 3,
  maxzoom:11,
  title: "Federal Agencies Leading by Example",
  description:
    "Federal agencies across the country are taking action now to implement the President's Federal Sustainability Plan and Executive Order 14XX.",
  sideBarInfo: ["Location_Name", "Snippet"],
  popupInfo: ["Popup"],
  url: ["URL"],
  image: ["Image"],
  filters: [
    {
      type: "dropdown",
      title: "Select Agency: ",
      columnHeader: "Agency",
      listItems: [
        "Department of Energy",
        "Department of Transportation",
      ],
    },
    {
      type: "dropdown",
      title: "Project Element: ",
      columnHeader: "Type",
      listItems: [
        "Carbon Pollution-Free Electricity", 
        "Zero-Emissions Fleet", 
        "Green Building", 
        "Net-Zero Procurement and Supply Chain", 
        "Net-Zero Emissions", 
        "Strengthening the Resilience of Operations and Infrastructure", 
        "Engaging, Educating, and Training the Federal Workforce", 
        "Environmental Justice and Equity", 
        "Domestic and Global Partnerships",
      ], 
    },
    {
      type: "dropdown",
      title: "Select State: ",
      columnHeader: "State",
      listItems: [
        "LA",
        "MA",
      ],
    },
  ],
};
