import {
  Braces,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  Network,
} from "lucide-react";

export const services = [
  {
    number: "01",
    icon: Database,
    title: "Database engineering",
    headline: "Make your data work harder.",
    description:
      "Slow queries, inefficient indexes, and poor data models can hold back an entire product. Find the bottlenecks, understand the workload, and optimize what matters.",
    capabilities: [
      "Query analysis & execution plans",
      "Schema design & indexing",
      "Transactions & concurrency",
      "Connection pooling & caching",
    ],
    tags: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    number: "02",
    icon: Gauge,
    title: "Full-stack optimization",
    headline: "Fast where it matters. Reliable everywhere.",
    description:
      "Performance doesn't stop at the database. Trace the request from browser to backend, identify wasted work, and improve the entire application.",
    capabilities: [
      "API latency & backend profiling",
      "Frontend loading & rendering",
      "Queues & background processing",
      "Observability & reliability",
    ],
    tags: ["Node.js", "React", "Kafka"],
  },
  {
    number: "03",
    icon: Braces,
    title: "AI integration",
    headline: "Turn AI experiments into useful products.",
    description:
      "Build AI features around real business needs, with the data access, application architecture, and operational controls required to run them reliably.",
    capabilities: [
      "LLM integration & AI assistants",
      "Retrieval-augmented generation",
      "Tool calling & MCP",
      "Latency & inference-cost control",
    ],
    tags: ["LLMs", "RAG", "MCP"],
  },
];

export const projects = [
  {
    number: "01",
    category: "DATA INFRASTRUCTURE",
    title: "Real-time enterprise data platform",
    description:
      "Designed event-driven ingestion and stream-processing workflows for heterogeneous enterprise systems, with an emphasis on reliability, throughput, and operational visibility.",
    details: [
      "Kafka-based ingestion pipelines",
      "Idempotent consumers and event replay",
      "Backpressure, retries, and dead-letter queues",
      "Processing-lag monitoring and query optimization",
    ],
    icon: Network,
    stack: "Kafka · PostgreSQL · APIs · Observability",
  },
  {
    number: "02",
    category: "DATABASE ENGINEERING",
    title: "Data migration & reconciliation engine",
    description:
      "Built a migration platform to move data between systems with resumable workers, incremental processing, and automated source-to-target validation.",
    details: [
      "Schema discovery and mapping",
      "Checkpointed, idempotent migration workers",
      "Count, checksum, and aggregate validation",
      "Audit trails and progress tracking",
    ],
    icon: GitBranch,
    stack: "SQL · TypeScript · Background workers",
  },
  {
    number: "03",
    category: "APPLICATION ENGINEERING",
    title: "Real-time operational monitoring",
    description:
      "Developed full-stack monitoring experiences for payment-terminal health and latency, bringing live telemetry and network diagnostics into one operational view.",
    details: [
      "Live telemetry dashboards",
      "Network fault detection using SNMP",
      "Streaming data visualization",
      "Frontend performance and code splitting",
    ],
    icon: Layers3,
    stack: "React · Node.js · D3.js · SNMP",
  },
];

export const myprocess = [
  {
    number: "01",
    title: "Understand",
    description:
      "Learn the system, the workload, and what is actually going wrong.",
  },
  {
    number: "02",
    title: "Measure",
    description:
      "Establish a baseline with execution plans, traces, and performance metrics.",
  },
  {
    number: "03",
    title: "Diagnose",
    description:
      "Find the root cause and evaluate the trade-offs before changing anything.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Implement focused improvements and compare the results against the baseline.",
  },
];

export const principles = [
  {
    title: "Measure before optimizing",
    description:
      "A plausible bottleneck isn't necessarily the actual bottleneck.",
  },
  {
    title: "Fix causes, not symptoms",
    description: "Adding infrastructure can hide a problem without solving it.",
  },
  {
    title: "Keep complexity intentional",
    description:
      "Every index, cache, queue, and service should justify its existence.",
  },
];
