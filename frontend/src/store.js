import React, { useEffect, useState } from 'react';
import { createWithEqualityFn } from 'zustand/traditional';
import { addEdge, applyNodeChanges, applyEdgeChanges, MarkerType } from 'reactflow';

// Zustand Store
export const useStore = createWithEqualityFn((set, get) => ({
    nodes: [],
    edges: [],
    nodeIDs: {},

    getNodeID: (type) => {
        const newIDs = { ...get().nodeIDs };
        if (newIDs[type] === undefined) {
            newIDs[type] = 0;
        }
        newIDs[type] += 1;
        set({ nodeIDs: newIDs });
        return `${type}-${newIDs[type]}`;
    },

    addNode: (node) => {
        set((state) => ({
            nodes: [...state.nodes, node],
        }));
    },

    onNodesChange: (changes) => {
        set((state) => ({
            nodes: applyNodeChanges(changes, state.nodes),
        }));
    },

    onEdgesChange: (changes) => {
        set((state) => ({
            edges: applyEdgeChanges(changes, state.edges),
        }));
    },

    onConnect: (connection) => {
        set((state) => {
            const updatedEdges = addEdge(
                {
                    ...connection,
                    type: 'smoothstep',
                    animated: true,
                    markerEnd: { type: MarkerType.Arrow, height: 20, width: 20 },
                },
                state.edges
            );
            console.log("Edge added:", updatedEdges); // Confirm edges are added
            return { edges: updatedEdges };
        });
    },

    setEdges: (edges) => set({ edges }), // Add this setter for edges
}));

const GraphComponent = () => {
    const { nodes, edges, onConnect, setEdges } = useStore(state => ({
        nodes: state.nodes,
        edges: state.edges,
        onConnect: state.onConnect,
        setEdges: state.setEdges,
    }));
    const [loadingEdges, setLoadingEdges] = useState(true);

    useEffect(() => {
        const fetchEdgesData = async () => {
            try {
                setLoadingEdges(true);
                const response = await fetch('/api/edges'); // Replace with your actual endpoint
                const data = await response.json();
                setEdges(data.edges); // Ensure this updates the Zustand store
            } catch (error) {
                console.error("Error fetching edges:", error);
            } finally {
                setLoadingEdges(false);
            }
        };

        fetchEdgesData();
    }, [setEdges]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (loadingEdges) {
            alert("Loading edges, please wait...");
            return;
        }

        if (edges.length === 0) {
            alert("Please add at least one edge before submitting.");
            return;
        }

        // Your submission logic here
        console.log("Submitting with nodes:", nodes);
        console.log("Submitting with edges:", edges);
        // Implement your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Render your graph or nodes here */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default GraphComponent;
