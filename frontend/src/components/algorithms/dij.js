// src/algorithms/dij.js

export const dij = (grid, startNode, endNode) => {
    const visitedNodes = [];
    const unvisitedNodes = getAllNodes(grid);
    startNode.distance = 0;
    while (unvisitedNodes.length > 0) {
      sortNodesByDistance(unvisitedNodes);
      const closestNode = unvisitedNodes.shift();
      if (closestNode.type === 'wall') continue;
      if (closestNode.distance === Infinity) return { visitedNodes, nodesInShortestPathOrder: [] };
      closestNode.type = 'visited';
      visitedNodes.push(closestNode);
      if (closestNode === endNode) {
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
        return { visitedNodes, nodesInShortestPathOrder };
      }
      updateUnvisitedNeighbors(closestNode, grid);
    }
    return { visitedNodes, nodesInShortestPathOrder: [] };
  };
  
  const sortNodesByDistance = (unvisitedNodes) => {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  };
  
  const updateUnvisitedNeighbors = (node, grid) => {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  };
  
  const getUnvisitedNeighbors = (node, grid) => {
    const neighbors = [];
    const { row, col } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => neighbor.type !== 'visited');
  };
  
  const getAllNodes = (grid) => {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  };
  
  export const getNodesInShortestPathOrder = (endNode) => {
    const nodesInShortestPathOrder = [];
    let currentNode = endNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  };
  