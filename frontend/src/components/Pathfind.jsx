// src/components/Pathfind.jsx

import React, { useState, useEffect } from 'react';
import { dij, getNodesInShortestPathOrder } from './algorithms/dij';

const cols = 20;
const rows = 20;

const NodeType = {
  START: 'start',
  END: 'end',
  WALL: 'wall',
  EMPTY: 'empty',
  VISITED: 'visited',
  PATH: 'path'
};

const Node = ({ row, col, type, onClick }) => {
  const getNodeClass = (type) => {
    switch (type) {
      case NodeType.START:
        return 'node-start';
      case NodeType.END:
        return 'node-end';
      case NodeType.WALL:
        return 'node-wall';
      case NodeType.VISITED:
        return 'node-visited';
      case NodeType.PATH:
        return 'node-path';
      default:
        return '';
    }
  };

  return (
    <div
      className={`node ${getNodeClass(type)}`}
      onClick={() => onClick(row, col)}
    ></div>
  );
};

const Pathfind = () => {
  const [grid, setGrid] = useState([]);
  const [startNode, setStartNode] = useState({ row: 0, col: 0 });
  const [endNode, setEndNode] = useState({ row: rows - 1, col: cols - 1 });
  const [algorithm, setAlgorithm] = useState('dij');
  const [visitedNodesCount, setVisitedNodesCount] = useState(0);
  const [shortestPathCount, setShortestPathCount] = useState(0);

  useEffect(() => {
    const initialGrid = [];
    for (let row = 0; row < rows; row++) {
      const currentRow = [];
      for (let col = 0; col < cols; col++) {
        currentRow.push({
          row,
          col,
          type:
            row === startNode.row && col === startNode.col
              ? NodeType.START
              : row === endNode.row && col === endNode.col
              ? NodeType.END
              : NodeType.EMPTY,
        });
      }
      initialGrid.push(currentRow);
    }
    setGrid(initialGrid);
  }, [startNode, endNode]);

  const handleNodeClick = (row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    if (node.type === NodeType.EMPTY) {
      newGrid[row][col].type = NodeType.WALL;
    } else if (node.type === NodeType.WALL) {
      newGrid[row][col].type = NodeType.EMPTY;
    }
    setGrid(newGrid);
  };

  const handleFindPath = () => {
    const start = grid[startNode.row][startNode.col];
    const end = grid[endNode.row][endNode.col];
    const result = dij(grid, start, end);
    const { visitedNodes, nodesInShortestPathOrder } = result;
    if (!visitedNodes || !nodesInShortestPathOrder) {
      console.error('Dijkstra algorithm returned an invalid result:', result);
      return;
    }
    setVisitedNodesCount(visitedNodes.length);
    setShortestPathCount(nodesInShortestPathOrder.length);
    animateAlgorithm(visitedNodes, nodesInShortestPathOrder);
  };

  const animateAlgorithm = (visitedNodes, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodes.length; i++) {
      if (i === visitedNodes.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodes[i];
        const newGrid = grid.slice();
        newGrid[node.row][node.col].type = NodeType.VISITED;
        setGrid(newGrid);
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const newGrid = grid.slice();
        newGrid[node.row][node.col].type = NodeType.PATH;
        setGrid(newGrid);
      }, 50 * i);
    }
  };

  const handleClear = () => {
    const newGrid = grid.slice();
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (
          newGrid[row][col].type === NodeType.VISITED ||
          newGrid[row][col].type === NodeType.PATH
        ) {
          newGrid[row][col].type = NodeType.EMPTY;
        }
      }
    }
    setGrid(newGrid);
    setVisitedNodesCount(0);
    setShortestPathCount(0);
  };

  return (
    <div className="visualizer">
      <nav className="nav-bar">
        <div className="nav-title">Pathfinding Visualizer</div>
        <ul className="nav-links">
          <li>
            <button onClick={() => setAlgorithm('dij')}>Dijkstra</button>
          </li>
          <li>
            <button onClick={handleClear}>Clear</button>
          </li>
          <li>
            <button>Instructions</button>
          </li>
          <li>Nodes Visited: {visitedNodesCount}</li>
          <li>Shortest Path: {shortestPathCount}</li>
          <li>
            <button onClick={handleFindPath}>Find Path</button>
          </li>
        </ul>
      </nav>
      <div className="grid">
        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="grid-row">
            {row.map((node, nodeIdx) => (
              <Node
                key={nodeIdx}
                row={node.row}
                col={node.col}
                type={node.type}
                onClick={handleNodeClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pathfind;
