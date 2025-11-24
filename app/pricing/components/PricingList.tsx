// app/components/SupportRateCard.tsx
"use client";

import React, { useMemo, useState } from "react";

// Data model
type Segment = "All" | "Individual" | "SMB" | "Enterprise";

type Row = {
  id: string;
  service: string;
  segment: Exclude<Segment, "All">;
  hourly: number;
  project: number;
  monthly: number;
};

// Sample data (replace with CMS/API)
const rows: Row[] = [
  { id: "db-ind", service: "Data Backup Support", segment: "Individual", hourly: 25, project: 120, monthly: 80 },
  { id: "db-smb", service: "Data Backup Support", segment: "SMB", hourly: 40, project: 250, monthly: 300 },
  { id: "db-ent", service: "Data Backup Support", segment: "Enterprise", hourly: 70, project: 800, monthly: 900 },
  { id: "av-ind", service: "Antivirus Support Services", segment: "Individual", hourly: 20, project: 100, monthly: 70 },
  { id: "av-smb", service: "Antivirus Support Services", segment: "SMB", hourly: 35, project: 200, monthly: 250 },
  { id: "av-ent", service: "Antivirus Support Services", segment: "Enterprise", hourly: 60, project: 600, monthly: 800 },
  { id: "pr-ind", service: "Printer Support Services", segment: "Individual", hourly: 25, project: 90, monthly: 60 },
  { id: "pr-smb", service: "Printer Support Services", segment: "SMB", hourly: 35, project: 180, monthly: 220 },
  { id: "pr-ent", service: "Printer Support Services", segment: "Enterprise", hourly: 55, project: 650, monthly: 650 },
];

const segments: Segment[] = ["All", "Individual", "SMB", "Enterprise"];

export default function SupportRateCard() {
  const [segment, setSegment] = useState<Segment>("All");

  const filtered = useMemo(
    () => (segment === "All" ? rows : rows.filter(r => r.segment === segment)),
    [segment]
  );

  return (
    <section
      className="relative isolate w-full overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-gray-900 to-cyan-400/60 px-2 sm:px-6 py-8 sm:py-10"
      aria-labelledby="ratecard-title"
      role="region"
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-16 h-24 sm:h-36 blur-2xl"
      >
        <div className="mx-auto h-full w-11/12 sm:w-3/4 rounded-full bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-cyan-500/40" />
      </div>

      {/* Header row */}
      <div className="relative mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4 max-w-6xl 2xl:max-w-[1488px] mx-auto">
        <div className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-xl bg-white/10 text-xs font-semibold text-white">
          AI
        </div>
        <div className="min-w-0">
          <h2
            id="ratecard-title"
            className="truncate text-base sm:text-lg font-semibold text-white"
          >
            CyberRadar Systems — Support Rate Card
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            AI‑assisted price table — hourly, project & monthly plans
          </p>
        </div>
        <div className="ml-auto hidden sm:flex items-center gap-2">
          <span
            className="inline-flex h-3 w-3 rounded-full bg-cyan-400 animate-pulse"
            aria-hidden="true"
          />
          <span className="text-sm text-slate-200">AI‑assisted</span>
          <button
            type="button"
            className="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-slate-900"
          >
            Request Quote
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-200 max-w-6xl 2xl:max-w-[1488px] mx-auto">
        <span className="opacity-80">Showing:</span>
        <div
          role="tablist"
          aria-label="Customer segment"
          className="flex flex-wrap sm:flex-row gap-1 w-full sm:w-auto mb-2"
        >
          {segments.map(s => (
            <button
              key={s}
              role="tab"
              type="button"
              aria-selected={segment === s}
              // Avoid aria-controls pointing to the whole table; keep it simple
              onClick={() => setSegment(s)}
              className={[
                "rounded-full px-3 py-1 transition-colors",
                "text-xs sm:text-sm",
                segment === s
                  ? "bg-slate-700 text-white"
                  : "bg-white/5 text-slate-200 hover:bg-white/10",
              ].join(" ")}
            >
              {s === "All" ? "All Services" : s}
            </button>
          ))}
        </div>
      </div>

      {/* Table wrapper with responsive overflow */}
      <div className="relative rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur w-11/12 sm:max-w-6xl 2xl:max-w-[1488px] mx-auto overflow-hidden">
        <div className="overflow-x-auto">
          <table
            id="ratecard-table"
            className="min-w-0 w-full text-[10px] sm:text-sm"
          >
            <caption className="sr-only">
              Support rates by service, segment, hourly, project, and monthly plans
            </caption>
            <thead className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur">
              <tr>
                <Th>Service</Th>
                <Th>Customer Segment</Th>
                <Th numeric>Hourly Rate (USD)</Th>
                <Th numeric>Project Basis (USD)</Th>
                <Th numeric>Monthly Support (USD)</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr
                  key={r.id}
                  className={
                    i % 2
                      ? "bg-white/0 hover:bg-white/20 transition-colors duration-100"
                      : "bg-white/[0.03] hover:bg-white/20 transition-colors duration-100"
                  }
                >
                  <Td>{r.service}</Td>
                  <Td>
                    <span className="inline-flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-cyan-400/80"
                      />
                      {labelForSegment(r.segment)}
                    </span>
                  </Td>
                  <Td numeric>
                    <Pill>${r.hourly}/hr</Pill>
                  </Td>
                  <Td numeric>
                    <Pill>${r.project}</Pill>
                  </Td>
                  <Td numeric>
                    <Pill>${r.monthly}/mo</Pill>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile helpers */}
        <div className="px-4 py-3 text-xs text-slate-300 sm:hidden">
          Scroll horizontally to view all columns
        </div>
      </div>

      {/* CTA row for small screens */}
      <div className="mt-4 sm:hidden">
        <button
          type="button"
          className="w-11/12 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-slate-900"
        >
          Request Quote
        </button>
      </div>
    </section>
  );
}

// Accessible cells
function Th({
  children,
  numeric,
}: {
  children: React.ReactNode;
  numeric?: boolean;
}) {
  return (
    <th
      scope="col"
      className={[
        "px-3 sm:px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-200",
        numeric ? "text-right" : "",
      ].join(" ")}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  numeric,
}: {
  children: React.ReactNode;
  numeric?: boolean;
}) {
  return (
    <td
      className={[
        "px-3 sm:px-4 py-3 align-middle text-xs sm:text-sm text-slate-100",
        numeric ? "text-right" : "",
      ].join(" ")}
    >
      {children}
    </td>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-white/5 px-2.5 py-1 text-xs sm:text-sm text-white ring-1 ring-inset ring-white/10">
      {children}
    </span>
  );
}

function labelForSegment(s: Exclude<Segment, "All">) {
  if (s === "SMB") return "Small / Medium Company";
  return s;
}
