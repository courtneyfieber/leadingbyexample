const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiY2ZpZWJlciIsImEiOiJja3J3a3MzNXkwaG1oMnZwYW4wZjFnNnB1In0.VkdQ3fjQS1D5h0gb_HgNmQ",
  CSV: "./leadingbyexample.csv",
  center: [-77.0365581,38.8949924],
  zoom: 6,
  title: "Leading by Example",
  description:
    "Federal agencies across the country are taking action now to implement the President's Federal Sustainability Plan and Executive Order 14XX. View each project on the map to learn more.",
  sideBarInfo: ["Location_Name"],
  popupInfo: ["location_name", "description"],
  filters: [
    {
      type: "dropdown",
      title: "Select Agency: ",
      columnHeader: "agency",
      listItems: [
        "Department of Transportation",
      ],
    },
    {
      type: "dropdown",
      title: "Goal(s) achieved: ",
      columnHeader: "type", // Case sensitive - must match spreadsheet entry
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
      columnHeader: "state",
      listItems: [
        "MA",
      ],
    },
  ],
};
