"use client";

import { useMemo, useState } from "react";
import {
  appShell,
  card,
  chip,
  cornerHeaderCell,
  controlRow,
  csvArea,
  grid,
  header,
  hero,
  heroCaption,
  heroTitle,
  infoChip,
  fileButton,
  fileInput,
  input,
  label,
  panel,
  rowHeaderCell,
  sectionTitle,
  selectedCell,
  selectionChip,
  table,
  tableMeta,
  tableCell,
  tableHeaderCell,
  tableRow,
  toggleInput,
  toggleLabel,
  toggleOn,
  toggleRow,
  toggleThumb,
  toggleThumbOn,
  toggleTrack,
  toolbar,
  toolbarActions,
  toolbarGroup,
  toolbarTitle,
} from "./style.css";

type Selection =
  | { type: "row"; index: number }
  | { type: "column"; index: number }
  | null;

function parseDelimited(raw: string): string[][] {
  if (!raw.trim()) return [];
  const delimiter = raw.includes("\t") ? "\t" : ",";
  const rows: string[][] = [];
  let current: string[] = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < raw.length; i += 1) {
    const char = raw[i];
    const next = raw[i + 1];
    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === delimiter && !inQuotes) {
      current.push(cell);
      cell = "";
      continue;
    }
    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      current.push(cell);
      cell = "";
      rows.push(current);
      current = [];
      continue;
    }
    cell += char;
  }
  current.push(cell);
  rows.push(current);
  return rows.filter((row) => row.some((value) => value.length > 0));
}

function toPostgresArray(values: string[]): string {
  const escaped = values.map((value) =>
    value.replace(/\\/g, "\\\\").replace(/'/g, "''"),
  );
  return `ARRAY[${escaped.map((value) => `'${value}'`).join(", ")}]`;
}

function buildHeaders(count: number): string[] {
  return Array.from({ length: count }, (_, index) =>
    String.fromCharCode(65 + (index % 26)) +
      (index >= 26 ? Math.floor(index / 26) : ""),
  );
}

export default function Home() {
  const [csvText, setCsvText] = useState("");
  const [hasHeader, setHasHeader] = useState(true);
  const [selection, setSelection] = useState<Selection>(null);
  const [copyStatus, setCopyStatus] = useState("");

  const parsed = useMemo(() => parseDelimited(csvText), [csvText]);
  const columnCount = parsed.reduce(
    (max, row) => Math.max(max, row.length),
    0,
  );
  const headers = hasHeader
    ? parsed[0] ?? buildHeaders(columnCount)
    : buildHeaders(columnCount);
  const dataRows = hasHeader ? parsed.slice(1) : parsed;
  const rowCount = dataRows.length;

  const selectionValues = useMemo(() => {
    if (!selection) return [];
    if (selection.type === "row") {
      return dataRows[selection.index] ?? [];
    }
    return dataRows.map((row) => row[selection.index] ?? "");
  }, [dataRows, selection]);

  const handleCopy = async (format: "js" | "pg") => {
    if (!selection || selectionValues.length === 0) return;
    const payload =
      format === "js"
        ? JSON.stringify(selectionValues)
        : toPostgresArray(selectionValues);
    try {
      await navigator.clipboard.writeText(payload);
      setCopyStatus("Copied to clipboard.");
    } catch {
      setCopyStatus("Copy failed. Please copy manually.");
    }
    setTimeout(() => setCopyStatus(""), 2000);
  };

  return (
    <div className={appShell} data-testid="app-shell">
      <section className={grid}>
        <div className={card} data-testid="csv-card">
          <h2 className={sectionTitle}>CSV入力</h2>
          <div className={controlRow}>
            <label className={label}>
              CSVファイル
              <input
                className={fileInput}
                type="file"
                accept=".csv,text/csv"
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;
                  const text = await file.text();
                  setCsvText(text);
                  setSelection(null);
                }}
              />
              <span className={fileButton}>ファイルを選択</span>
            </label>
            <label className={toggleLabel}>
              ヘッダー
              <span className={toggleRow}>
                <input
                  className={toggleInput}
                  type="checkbox"
                  role="switch"
                  checked={hasHeader}
                  onChange={(event) => {
                    setHasHeader(event.target.checked);
                    setSelection(null);
                  }}
                />
                <span className={`${toggleTrack} ${hasHeader ? toggleOn : ""}`}>
                  <span
                    className={`${toggleThumb} ${hasHeader ? toggleThumbOn : ""}`}
                  />
                </span>
                <span>{hasHeader ? "あり" : "なし"}</span>
              </span>
            </label>
          </div>
          <textarea
            className={csvArea}
            data-testid="csv-textarea"
            value={csvText}
            onChange={(event) => {
              setCsvText(event.target.value);
              setSelection(null);
            }}
            placeholder={`例:\nname,age,city\nAmi,28,Tokyo\nNoah,31,Osaka`}
          />
        </div>

        <div className={panel} data-testid="table-panel">
          <div className={toolbar}>
            <div className={toolbarGroup}>
              <h2 className={toolbarTitle}>配列コピー</h2>
              {selection ? (
                <span className={`${chip} ${selectionChip}`}>
                  {selection.type === "row"
                    ? `Row ${selection.index + 1}`
                    : `Col ${headers[selection.index] ?? selection.index + 1}`}
                </span>
              ) : (
                <span className={chip}>行・列を選択</span>
              )}
            </div>
            <div className={toolbarActions}>
              <button
                type="button"
                className={chip}
                onClick={() => handleCopy("js")}
                disabled={!selection || selectionValues.length === 0}
              >
                JS配列をコピー
              </button>
              <button
                type="button"
                className={chip}
                onClick={() => handleCopy("pg")}
                disabled={!selection || selectionValues.length === 0}
              >
                PostgreSQL配列をコピー
              </button>
            </div>
          </div>
          <div className={tableMeta}>
            <span className={infoChip}>行数: {rowCount}</span>
            <span className={infoChip}>列数: {columnCount}</span>
          </div>
          {copyStatus && <p>{copyStatus}</p>}
          <div
            className={table}
            data-testid="csv-table"
            style={{ "--table-column-count": columnCount } as React.CSSProperties}
          >
            <div className={tableRow}>
              <div className={`${rowHeaderCell} ${cornerHeaderCell}`}></div>
              {headers.map((value, index) => (
                <button
                  type="button"
                  key={`header-${index}`}
                  className={`${tableHeaderCell} ${
                    selection?.type === "column" && selection.index === index
                      ? selectedCell
                      : ""
                  }`}
                  onClick={() => setSelection({ type: "column", index })}
                >
                  {value || `Column ${index + 1}`}
                </button>
              ))}
            </div>
            {dataRows.length === 0 ? (
              <div className={tableRow}>
                <div className={rowHeaderCell}></div>
                <div className={tableCell}>
                  CSVデータがまだありません。
                </div>
              </div>
            ) : (
              dataRows.map((row, rowIndex) => (
                <div
                  className={tableRow}
                  key={`row-${rowIndex}-${row.length}`}
                >
                  <button
                    type="button"
                    className={`${rowHeaderCell} ${
                      selection?.type === "row" && selection.index === rowIndex
                        ? selectedCell
                        : ""
                    }`}
                    onClick={() => setSelection({ type: "row", index: rowIndex })}
                  >
                    {rowIndex + 1}
                  </button>
                  {Array.from({ length: columnCount }, (_, colIndex) => (
                    <div className={tableCell} key={`cell-${rowIndex}-${colIndex}`}>
                      {row[colIndex] ?? ""}
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <header className={header}>
        <div className={hero}>
          <p className={heroCaption}>CSV Inspector</p>
          <h1 className={heroTitle}>CSVを即座にテーブル化して配列化</h1>
        </div>
        <p>
          CSVテキストやCSVファイルを読み込み、任意の行・列をJavaScript配列と
          PostgreSQL配列形式でコピーできます。
        </p>
      </header>
    </div>
  );
}
