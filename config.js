const config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1IjoiY2ZpZWJlciIsImEiOiJja3J3a3MzNXkwaG1oMnZwYW4wZjFnNnB1In0.VkdQ3fjQS1D5h0gb_HgNmQ",
  CSV: "./leadingbyexample.csv",
  center: [-71.109734,42.373615],
  zoom: 6,
  title: "Federal Agencies Leading by Example",
  description:
    "Description",
  sideBarInfo: ["Location_Name", "Snippet"],
  popupInfo: ["Location_Name", "Snippet"],
  filters: [
    {
      type: "dropdown",
      title: "Select Agency: ",
      columnHeader: "Agency",
      listItems: [
        "Department of Transportation",
      ],
    },
    {
      type: "dropdown",
      title: "Goal achieved: ",
      columnHeader: "Type", // Case sensitive - must match spreadsheet entry
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
      // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Select State: ",
      columnHeader: "State",
      listItems: [
        "MA",
      ],
    },
  ],
};
