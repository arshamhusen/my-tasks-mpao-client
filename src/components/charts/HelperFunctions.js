const transparency = 0.1;

export function generateColorPalette(data) {
  const colors = [];

  for (let i = 0; i < data.length; i++) {
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, ${transparency}`;
    colors.push(color);
  }

  return colors;
}

export function generateBorderColorPalette(colorPalette) {
  const borderColorPalette = colorPalette.map((color) => {
    return color.replace(transparency, "1");
  });
  return borderColorPalette;
}

export function randomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  }, ${transparency})`;
}

export function fillColor(color) {
  return color.replace(transparency, "1");
}

export function normaliseDatasets(datasets) {
  const normlisedDatasets = datasets.map((dataset) => {
    let color;
    let filledColor;
    if (datasets.length > 1) {
      color = randomColor();
      filledColor = fillColor(color);
    } else {
      color = generateColorPalette(dataset.data);
      filledColor = generateBorderColorPalette(color);
    }
    return {
      label: dataset.label,
      data: dataset.data,
      fill: true,
      backgroundColor: color,
      pointBorderWIdth: 1,
      borderWidth: 0.4,
      tension: 0.2,
      borderColor: filledColor,
      ...dataset,
    };
  });

  return normlisedDatasets;
}

export const defaultProps = {
  title: "",
  labels: [],
  datasets: [],
  className: "",
};
