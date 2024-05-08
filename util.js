function defaultEquals(a, b) {
  return a === b;
}

function defaultToString(item) {
  if (item === null) return "NULL";
  if (item === undefined) return "UNDEFINED";
  if (typeof item === "string" || item instanceof String) return `${item}`;
  return item.toString();
}

const Compare = {
  BIGGER_THAN: 1,
  LESS_THAN: -1,
};

function defaultCompare(a, b) {
  if (a === b) return 0;
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

const Colors = {
  WHITE: 0,
  GRAY: 1,
  BLACK: 2,
};

const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

module.exports = {
  defaultEquals,
  defaultToString,
  Compare,
  defaultCompare,
  Colors,
  initializeColor,
};
