import React, { useState, useEffect } from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const [loading, setLoading] = useState(false);
    const [graphInfo, setGraphInfo] = useState({ num_nodes: 0, is_dag: false });

    useEffect(() => {
        console.log("Current Nodes:", nodes);
        console.log("Current Edges:", edges);
    }, [nodes, edges]);

    const checkIfDAG = (edges) => {
        // Implement your logic to check if the graph is a DAG
        // This is just a placeholder function
        return true; // Replace with actual DAG checking logic
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submit button clicked");

        if (nodes.length === 0) {
            console.warn("No nodes found");
            return;
        }

        const numNodes = nodes.length;
        const isDAG = checkIfDAG(edges);
        
        // Update graph info state
        setGraphInfo({ num_nodes: numNodes, is_dag: isDAG });

        console.log(`Graph Info: {num_nodes: ${numNodes}, is_dag: ${isDAG}}`);

        try {
            setLoading(true);

            const payload = {
                nodes: nodes.map(node => node.id),
                edges: edges.map(edge => [edge.source, edge.target]),
            };

            const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Submission Successful:", data);
        } catch (error) {
            console.error("Error submitting pipeline:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={handleSubmit} type="button" disabled={loading}>
                {loading ? "Submitting..." : "Submit Pipeline"}
            </button>
            {/* Display graph information in a styled box */}
            <div style={{
                marginTop: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '1px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#f9f9f9',
                textAlign: 'center',
                width: 'fit-content',
                fontFamily: 'Arial, sans-serif',
            }}>
                <p style={{ margin: '0' }}>Graph Info:</p>
                <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>
                    {`{ num_nodes: ${graphInfo.num_nodes}, is_dag: ${graphInfo.is_dag} }`}
                </p>
            </div>
        </div>
    );
};
