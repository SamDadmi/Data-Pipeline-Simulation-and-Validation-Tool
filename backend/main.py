from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from collections import defaultdict, deque

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development; adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the request data model
class PipelineData(BaseModel):
    nodes: List[str]  # Expecting a list of node IDs
    edges: List[List[str]]  # Expecting a list of edges as lists of node IDs

# Endpoint to parse pipeline data
@app.post("/pipelines/parse")
async def parse_pipeline(data: PipelineData):
    print("Received Data:", data)  # Log received data for debugging
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)

    is_dag = check_dag(data.nodes, data.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }

# Function to check if the graph is a Directed Acyclic Graph (DAG)
def check_dag(nodes, edges):
    graph = defaultdict(list)
    in_degree = {node: 0 for node in nodes}

    for edge in edges:
        graph[edge[0]].append(edge[1])
        in_degree[edge[1]] += 1

    queue = deque(node for node in nodes if in_degree[node] == 0)
    visited_count = 0

    while queue:
        current = queue.popleft()
        visited_count += 1

        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return visited_count == len(nodes)

# Basic root endpoint for health check
@app.get("/")
def read_root():
    return {"message": "API is running"}
