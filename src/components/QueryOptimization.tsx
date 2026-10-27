"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowDown,
  Check,
  Database,
  Info,
  Layers3,
  SlidersHorizontal,
  Sparkles,
  Zap,
} from "lucide-react";

type IndexType = "none" | "customer" | "composite";

const formatNumber = (value: number) =>
  Math.round(value).toLocaleString("en-US");

const formatMs = (value: number) =>
  value < 10 ? `${value.toFixed(2)} ms` : `${value.toFixed(1)} ms`;

const indexOptions: {
  value: IndexType;
  label: string;
  description: string;
}[] = [
  {
    value: "none",
    label: "No index",
    description: "Scan the table and sort matching rows.",
  },
  {
    value: "customer",
    label: "Customer index",
    description: "Find matching rows, then sort them.",
  },
  {
    value: "composite",
    label: "Composite index",
    description: "Filter and read rows in the required order.",
  },
];

function calculateModel(
  tableRows: number,
  selectivity: number,
  limit: number,
  index: IndexType
) {
  const matchingRows = Math.max(1, Math.ceil(tableRows * (selectivity / 100)));

  const rowsReturned = Math.min(matchingRows, limit);

  // A simplified logical-work model, not a PostgreSQL cost model.
  const rowsExamined =
    index === "none"
      ? tableRows
      : index === "customer"
        ? matchingRows
        : rowsReturned;

  const sortRows = index === "composite" ? 0 : matchingRows;

  // Approximate top-N sorting work.
  const sortWork =
    sortRows > limit
      ? sortRows * Math.log2(Math.max(2, limit))
      : sortRows * Math.log2(Math.max(2, sortRows));

  // These coefficients are illustrative assumptions. They do not predict
  // real PostgreSQL latency and should be calibrated against actual runs.
  const scanCost =
    index === "none"
      ? rowsExamined / 25000
      : index === "customer"
        ? 1.8 + rowsExamined / 12000
        : 2.4 + rowsExamined / 12000;

  const sortCost = sortWork / 90000;
  const modeledMs = 1.5 + scanCost + sortCost;

  return {
    matchingRows,
    rowsReturned,
    rowsExamined,
    sortRows,
    sortWork,
    modeledMs,
  };
}

export default function QueryOptimizationLab() {
  const [tableRows, setTableRows] = useState(1_000_000);
  const [selectivity, setSelectivity] = useState(1);
  const [limit, setLimit] = useState(20);
  const [index, setIndex] = useState<IndexType>("none");

  const baseline = useMemo(
    () => calculateModel(tableRows, selectivity, limit, "none"),
    [tableRows, selectivity, limit]
  );

  const result = useMemo(
    () => calculateModel(tableRows, selectivity, limit, index),
    [tableRows, selectivity, limit, index]
  );

  const reduction =
    baseline.rowsExamined > 0
      ? (1 - result.rowsExamined / baseline.rowsExamined) * 100
      : 0;

  const latencyReduction =
    baseline.modeledMs > 0
      ? (1 - result.modeledMs / baseline.modeledMs) * 100
      : 0;

  const explanation =
    index === "none"
      ? "Without an index, the model scans the whole table to find matching rows. The database then sorts the matching rows to return the requested page."
      : index === "customer"
        ? "The customer index narrows the search to matching rows. However, the index does not provide the requested created_at ordering, so matching rows still need to be sorted."
        : "The composite index places customer_id first and created_at DESC second. For this query pattern, the model can seek to one customer and read the latest rows in index order, stopping at LIMIT.";

  return (
    <section
      id="query-lab"
      aria-labelledby="query-lab-title"
      className="bg-[#faf9f6] px-5 py-20 text-[#20211f] sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {/* <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#77786e]">
            <Database size={15} />
            Interactive engineering lab / 01
          </div> */}

          <h2
            id="query-lab-title"
            className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-6xl"
          >
            Change the workload.
            <br />
            <span className="text-[#85867b]">See what changes.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#686961]">
            Adjust the data size, filter selectivity, and index design. Explore
            how those choices affect the estimated work required to answer a
            database query.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[#20211f]/10 bg-white shadow-[0_20px_70px_-45px_rgba(32,33,31,0.3)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#20211f]/10 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2f2ec]">
                <SlidersHorizontal size={18} />
              </span>
              <div>
                <h3 className="text-sm font-semibold">
                  Query workload simulator
                </h3>
                <p className="mt-1 text-xs text-[#85867b]">
                  PostgreSQL-inspired · Deterministic model
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setTableRows(1_000_000);
                setSelectivity(1);
                setLimit(20);
                setIndex("none");
              }}
              className="text-xs font-medium text-[#686961] underline underline-offset-4 hover:text-black"
            >
              Reset inputs
            </button>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Workload controls */}
            <div className="space-y-7 border-b border-[#20211f]/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.13em] text-[#85867b]">
                  01 / Define the workload
                </p>
                <h3 className="mt-3 text-xl font-medium tracking-tight">
                  What is your database handling?
                </h3>
              </div>

              <SliderField
                label="Table size"
                value={tableRows}
                display={`${formatNumber(tableRows)} rows`}
                min={100_000}
                max={10_000_000}
                step={100_000}
                onChange={setTableRows}
                leftLabel="100K"
                rightLabel="10M"
              />

              <SliderField
                label="Customer selectivity"
                value={selectivity}
                display={`${selectivity.toFixed(1)}%`}
                min={0.1}
                max={20}
                step={0.1}
                onChange={setSelectivity}
                leftLabel="0.1% · Selective"
                rightLabel="20% · Broad"
              />

              <SliderField
                label="LIMIT"
                value={limit}
                display={`${formatNumber(limit)} rows`}
                min={10}
                max={1000}
                step={10}
                onChange={setLimit}
                leftLabel="10"
                rightLabel="1,000"
              />

              <div className="border-t border-[#20211f]/10 pt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.13em] text-[#85867b]">
                  02 / Choose an index
                </p>

                <div className="space-y-2">
                  {indexOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={index === option.value}
                      onClick={() => setIndex(option.value)}
                      className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#779d38] ${
                        index === option.value
                          ? "border-[#a9c64f] bg-[#f6f9e9]"
                          : "border-[#20211f]/10 hover:border-[#20211f]/30"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          index === option.value
                            ? "border-[#779d38] bg-[#779d38] text-white"
                            : "border-[#b9baae]"
                        }`}
                      >
                        {index === option.value && <Check size={12} />}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">
                          {option.label}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-[#77786e]">
                          {option.description}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-[#f5f5f0] p-4">
                <p className="text-xs font-semibold">Query being modeled</p>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-[11px] leading-5 text-[#55574e]">
                  {`SELECT id, total, created_at
FROM orders
WHERE customer_id = 42
ORDER BY created_at DESC
LIMIT ${limit};`}
                </pre>
              </div>
            </div>

            {/* Live results */}
            <div className="min-w-0 p-5 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.13em] text-[#85867b]">
                    03 / Estimated results
                  </p>
                  <h3 className="mt-3 text-xl font-medium tracking-tight">
                    Your query profile
                  </h3>
                </div>

                <span className="rounded-full bg-[#f2f2ec] px-3 py-1.5 text-[10px] font-medium text-[#686961]">
                  Live calculation
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Metric
                  label="Rows examined"
                  value={formatNumber(result.rowsExamined)}
                  icon={<Layers3 size={15} />}
                />
                <Metric
                  label="Rows returned"
                  value={formatNumber(result.rowsReturned)}
                  icon={<Database size={15} />}
                />
                <Metric
                  label="Modeled latency"
                  value={formatMs(result.modeledMs)}
                  icon={<Zap size={15} />}
                />
                <Metric
                  label="Sort input"
                  value={formatNumber(result.sortRows)}
                  icon={<ArrowDown size={15} />}
                />
              </div>

              <div className="mt-7 rounded-xl border border-[#20211f]/10 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold">
                    Estimated rows examined
                  </p>
                  <span className="text-xs text-[#77786e]">
                    Lower is better
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <ResultBar
                    label="No index"
                    value={baseline.rowsExamined}
                    max={tableRows}
                    color="neutral"
                  />
                  <ResultBar
                    label={indexOptions.find((o) => o.value === index)!.label}
                    value={result.rowsExamined}
                    max={tableRows}
                    color="green"
                  />
                </div>

                <div className="mt-5 border-t border-[#20211f]/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#779d38]" />
                    <p className="text-sm font-semibold">What changed?</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#686961]">
                    {explanation}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-[#f5f5f0] p-4">
                  <p className="text-xs text-[#77786e]">
                    Estimated scan-work reduction
                  </p>
                  <p className="mt-2 text-2xl font-medium tracking-tight">
                    {formatNumber(reduction)}%
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-[#77786e]">
                    Relative to the full-table-scan baseline.
                  </p>
                </div>
                <div className="rounded-xl bg-[#f5f5f0] p-4">
                  <p className="text-xs text-[#77786e]">
                    Modeled latency change
                  </p>
                  <p className="mt-2 text-2xl font-medium tracking-tight">
                    {index === "none"
                      ? "Baseline"
                      : `${formatNumber(latencyReduction)}%`}
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-[#77786e]">
                    Model output, not a measured benchmark.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-2 rounded-lg border border-[#20211f]/10 p-4">
                <Info size={15} className="mt-0.5 shrink-0 text-[#77786e]" />
                <p className="text-xs leading-5 text-[#686961]">
                  These estimates use a simplified work model. PostgreSQL
                  chooses plans using statistics, cost parameters, available
                  indexes, and other factors. Actual execution time must be
                  measured against a real database.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Index lesson */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Lesson
            number="01"
            title="Selectivity matters"
            text="A highly selective filter may make an index more attractive. A broad filter can change the planner's preferred strategy."
          />
          <Lesson
            number="02"
            title="Column order matters"
            text="The composite index aligns the customer filter with the requested ordering, allowing the model to stop early."
          />
          <Lesson
            number="03"
            title="Indexes have a cost"
            text="Indexes consume storage and add write overhead. Optimize the workload as a whole, not just one query."
          />
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
  leftLabel,
  rightLabel,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <label className="text-sm font-medium">{label}</label>
        <output className="rounded-lg bg-[#f2f2ec] px-2.5 py-1.5 font-mono text-xs">
          {display}
        </output>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
        className="h-2 w-full cursor-pointer accent-[#779d38]"
      />

      <div className="mt-2 flex justify-between gap-3 text-[10px] text-[#85867b]">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-[#20211f]/10 p-3.5 sm:p-4">
      <div className="flex items-center gap-2 text-[#85867b]">
        {icon}
        <span className="text-[11px] leading-4">{label}</span>
      </div>
      <p className="mt-3 break-words text-xl font-medium tracking-tight sm:text-2xl">
        {value}
      </p>
    </div>
  );
}

function ResultBar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: "neutral" | "green";
}) {
  const width = Math.max(1, Math.min(100, (value / max) * 100));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-xs text-[#686961]">{label}</span>
        <span className="font-mono text-xs font-medium">
          {formatNumber(value)}
        </span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-[#eeeee8]"
        role="img"
        aria-label={`${label}: ${formatNumber(value)} rows examined`}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-300 ${
            color === "green" ? "bg-[#779d38]" : "bg-[#b9baae]"
          }`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function Lesson({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-[#20211f]/15 pt-4">
      <p className="text-xs text-[#85867b]">{number}</p>
      <h3 className="mt-2 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#686961]">{text}</p>
    </div>
  );
}
