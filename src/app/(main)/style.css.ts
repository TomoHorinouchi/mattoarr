import { style } from "@vanilla-extract/css";

const cardBase = {
  background: "rgba(255, 255, 255, 0.9)",
  borderRadius: "20px",
  boxShadow: "0 20px 60px rgba(25, 40, 65, 0.12)",
  border: "1px solid rgba(15, 23, 42, 0.08)",
};

export const appShell = style({
  minHeight: "100svh",
  padding: "48px clamp(20px, 4vw, 56px) 80px",
  background:
    "radial-gradient(circle at top left, #fff7ea 0%, #f7f3ff 35%, #eef7ff 70%, #f9fcff 100%)",
  color: "#0f172a",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const header = style({
  display: "grid",
  gap: "12px",
  maxWidth: "960px",
});

export const hero = style({
  display: "grid",
  gap: "12px",
});

export const heroCaption = style({
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  fontSize: "12px",
  fontWeight: 600,
  color: "#64748b",
});

export const heroTitle = style({
  fontSize: "clamp(28px, 4vw, 48px)",
  lineHeight: 1.05,
  fontWeight: 700,
  color: "#0f172a",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr)",
  gap: "28px",
  "@media": {
    "screen and (min-width: 960px)": {
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
      alignItems: "start",
    },
  },
});

export const card = style({
  ...cardBase,
  padding: "24px",
  display: "grid",
  gap: "20px",
});

export const panel = style({
  ...cardBase,
  padding: "24px",
  display: "grid",
  gap: "18px",
});

export const sectionTitle = style({
  fontSize: "18px",
  fontWeight: 600,
});

export const controlRow = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
  gap: "16px",
  alignItems: "end",
  overflowX: "auto",
  paddingBottom: "4px",
});

export const label = style({
  display: "grid",
  gap: "6px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#1f2937",
});

export const input = style({
  borderRadius: "12px",
  border: "1px solid rgba(148, 163, 184, 0.6)",
  padding: "10px 14px",
  fontSize: "14px",
  background: "#fff",
});

export const select = style({
  borderRadius: "12px",
  border: "1px solid rgba(148, 163, 184, 0.6)",
  padding: "10px 14px",
  fontSize: "14px",
  background: "#fff",
});

export const toggleLabel = style({
  display: "grid",
  gap: "8px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#1f2937",
  justifySelf: "end",
});

export const toggleRow = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  whiteSpace: "nowrap",
});

export const toggleInput = style({
  position: "absolute",
  opacity: 0,
  width: 1,
  height: 1,
});

export const toggleTrack = style({
  position: "relative",
  width: "44px",
  height: "26px",
  borderRadius: "999px",
  background: "rgba(148, 163, 184, 0.45)",
  border: "1px solid rgba(148, 163, 184, 0.7)",
  transition: "background 0.2s ease, border-color 0.2s ease",
  flexShrink: 0,
});

export const toggleThumb = style({
  position: "absolute",
  top: "3px",
  left: "3px",
  width: "18px",
  height: "18px",
  borderRadius: "999px",
  background: "#ffffff",
  boxShadow: "0 6px 12px rgba(15, 23, 42, 0.18)",
  transition: "transform 0.2s ease",
});

export const toggleOn = style({
  background: "#0f172a",
  borderColor: "#0f172a",
});

export const toggleThumbOn = style({
  transform: "translateX(18px)",
});

export const csvArea = style({
  width: "100%",
  minHeight: "240px",
  borderRadius: "16px",
  border: "1px solid rgba(148, 163, 184, 0.5)",
  padding: "16px",
  fontSize: "14px",
  fontFamily: "var(--font-geist-mono)",
  lineHeight: 1.6,
  background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
});

export const toolbar = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "center",
  gap: "12px",
});

export const toolbarGroup = style({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  gap: "10px",
  minWidth: 0,
});

export const toolbarActions = style({
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  gap: "10px",
  flexShrink: 0,
  whiteSpace: "nowrap",
});

export const toolbarTitle = style({
  fontSize: "18px",
  fontWeight: 600,
  whiteSpace: "nowrap",
});

export const tableMeta = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "10px",
  marginTop: "8px",
});

export const chip = style({
  padding: "8px 12px",
  borderRadius: "999px",
  border: "1px solid rgba(148, 163, 184, 0.7)",
  background: "rgba(255, 255, 255, 0.9)",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "#1f2937",
  cursor: "pointer",
  selectors: {
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const selectionChip = style({
  flex: "1 1 auto",
  minWidth: 0,
  maxWidth: "100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const infoChip = style({
  padding: "8px 12px",
  borderRadius: "999px",
  border: "1px solid rgba(148, 163, 184, 0.55)",
  background: "rgba(248, 250, 252, 0.9)",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "#1f2937",
  cursor: "default",
});

export const table = style({
  display: "grid",
  columnGap: "8px",
  rowGap: "8px",
  overflowX: "auto",
  paddingBottom: "8px",
  gridTemplateColumns:
    "64px repeat(var(--table-column-count), minmax(120px, 1fr))",
});

export const tableRow = style({
  display: "contents",
});

const cellBase = {
  padding: "10px 12px",
  borderRadius: "12px",
  border: "1px solid rgba(148, 163, 184, 0.35)",
  background: "#ffffff",
  fontSize: "13px",
  color: "#0f172a",
  textAlign: "left" as const,
  minWidth: 0,
  whiteSpace: "pre-wrap" as const,
  overflowWrap: "anywhere" as const,
};

export const tableHeaderCell = style({
  ...cellBase,
  background: "linear-gradient(180deg, #eef2ff 0%, #ffffff 100%)",
  fontWeight: 600,
  cursor: "pointer",
});

export const rowHeaderCell = style({
  ...cellBase,
  background: "linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%)",
  fontWeight: 600,
  cursor: "pointer",
});

export const tableCell = style({
  ...cellBase,
  background: "#ffffff",
  fontFamily: "var(--font-geist-mono)",
});

export const selectedCell = style({
  borderColor: "#0f172a",
  boxShadow: "0 0 0 2px rgba(15, 23, 42, 0.15)",
});
