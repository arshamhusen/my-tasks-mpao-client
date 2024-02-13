props:
- labels: array of strings, required
- datasets: array of objects, required

datasets shape: array of objects, where each object is a dataset with a label property and data property

const datasets = [
    {
        label: "Software Development", // the name of the dataset
        data: [50, 40, 30, 20, 10, 18, 10, 30, 19, 19, 39, 49],
    },
    {
        label: "Marketing",
        data: [9, 16, 15, 7, 26, 29, 10, 10, 18, 18, 49, 20],
    },
]

any extra property added to a dataset will override the default ones

const datasets = [
  {
      label: "Software Development", // the name of the dataset
      data: [50, 40, 30, 20, 10, 18, 10, 30, 19, 19, 39, 49],
      fill: false
  },
  {
      label: "Marketing",
      data: [9, 16, 15, 7, 26, 29, 10, 10, 18, 18, 49, 20],
      fill: false
  },
]

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

example component:

<LineChart labels={labels} title="Revenue per department per month (in thousands) in 2022" datasets={datasets}/>

the shape of the "data" property in the datasets object depends on the graph being used

example for bubble chart:

const bubbleDatasets = [
  {
    label: "DS1",
    data: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
  },
  {
    label: "DS2",
    data: [[10, 11, 12], [13, 14, 14], [16, 17, 18]],
  },
  {
    label: "DS3",
    data: [[10, 83, 8], [18, 4, 9], [18, 8, 2]],
  },
]

example for scatter charts:

const scatterDatasets = [
  {
    label: "DS1",
    data: [[50, 40], [30, 20], [48, 12]],
  },
  {
    label: "DS2",
    data: [[19, 49], [12, 26], [37, 31]],
  },
  {
    label: "DS2",
    data: [[17, 17], [38, 29], [26, 27]],
  },
]