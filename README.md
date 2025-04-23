# Data Pipeline Simulation and Validation Tool

A full-stack web application built with **FastAPI** and **React.js** for simulating and validating custom, node-based data processing workflows. Designed to detect cycles and ensure Directed Acyclic Graph (DAG) compliance, this tool allows users to visually construct and validate modular pipeline logic in real-time.

## 🚀 Project Overview

This project was developed as part of the **Vectorshift – Pipeline Logic Validator** technical assessment. It simulates data workflows where each node represents a task or process, and connections represent data flow between them. The backend performs rigorous validation to ensure submitted workflows are logically feasible and error-free before execution.

---

## 🧠 Key Features

- **🔁 Backend Algorithm Development**  
  Developed a robust algorithm to detect cycles and validate Directed Acyclic Graph (DAG) structure, ensuring logical correctness before pipeline execution.

- **🔌 RESTful API Integration**  
  Created fast, reliable API endpoints using **FastAPI** and **Pydantic** models to receive structured graph data and return validation results in real-time.

- **🖱️ Interactive Frontend**  
  Built a user-friendly interface with **React.js** where users can drag, connect, and visualize nodes to create custom workflows. The UI offers immediate validation feedback.

- **📊 Graph Theory Implementation**  
  Applied graph traversal and cycle detection techniques to enforce DAG constraints and maintain logical integrity in the pipeline flow.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, HTML5, CSS3  
- **Backend**: FastAPI, Python, Pydantic  
- **Graph Handling**: Custom algorithm for DAG validation  
- **Version Control**: Git, GitHub

---


