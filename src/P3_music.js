var data = [
    {parent: "Group 1", id: "alpha", value: 29},
    {parent: "Group 1", id: "beta", value: 10},
    {parent: "Group 1", id: "gamma", value: 2},
    {parent: "Group 2", id: "delta", value: 29},
    {parent: "Group 2", id: "eta", value: 25}
  ];
  

new d3plus.Pack()
  .data(data)
  .groupBy(["parent", "id"])
  .sum("value")
  .render();

