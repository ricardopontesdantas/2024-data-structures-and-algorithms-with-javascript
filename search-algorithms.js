const Queue = require("./02_queue/queue");
const { initializeColor, Colors } = require("./util");

const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  queue.enqueue(startVertex);
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GRAY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GRAY;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
    if (callback) callback(u);
  }
};

module.exports = { breadthFirstSearch };
