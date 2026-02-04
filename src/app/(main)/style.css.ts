import { style } from "@vanilla-extract/css";

const cardBase = {
  background: "#ffffff",
  borderRadius: "20px",
  boxShadow: "none",
  border: "1px solid #000000",
};

export const appShell = style({
  minHeight: "100svh",
  padding: "48px clamp(20px, 4vw, 56px) 80px",
  background: "#ffffff",
  color: "#000000",
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
  color: "#000000",
});

export const heroTitle = style({
  fontSize: "clamp(28px, 4vw, 48px)",
  lineHeight: 1.05,
  fontWeight: 700,
  color: "#000000",
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
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  gap: "16px",
  flexWrap: "nowrap",
  overflowX: "auto",
  paddingBottom: "4px",
});

export const label = style({
  display: "grid",
  gap: "6px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#000000",
});

export const input = style({
  borderRadius: "12px",
  border: "1px solid #000000",
  padding: "10px 14px",
  fontSize: "14px",
  background: "#ffffff",
});

export const fileInput = style({
  position: "absolute",
  opacity: 0,
  width: 1,
  height: 1,
  overflow: "hidden",
});

export const fileButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "160px",
  height: "36px",
  borderRadius: "999px",
  border: "2px solid #000000",
  background: "#ffffff",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "#000000",
  cursor: "pointer",
  lineHeight: 1,
});

export const select = style({
  borderRadius: "12px",
  border: "1px solid #000000",
  padding: "10px 14px",
  fontSize: "14px",
  background: "#ffffff",
});

export const toggleLabel = style({
  display: "grid",
  gap: "8px",
  fontSize: "13px",
  fontWeight: 600,
  color: "#000000",
  justifySelf: "end",
  whiteSpace: "nowrap",
  "@media": {
    "screen and (max-width: 720px)": {
      justifySelf: "start",
    },
  },
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
  background: "#ffffff",
  border: "2px solid #000000",
  transition: "background 0.2s ease, border-color 0.2s ease",
  flexShrink: 0,
});

export const toggleThumb = style({
  position: "absolute",
  top: "50%",
  left: "3px",
  width: "18px",
  height: "18px",
  borderRadius: "999px",
  background: "#000000",
  boxShadow: "none",
  transform: "translateY(-50%)",
  transition: "transform 0.2s ease",
});

export const toggleOn = style({
  background: "#000000",
  borderColor: "#000000",
});

export const toggleThumbOn = style({
  transform: "translate(18px, -50%)",
  background: "#ffffff",
});

export const csvArea = style({
  width: "100%",
  minHeight: "240px",
  borderRadius: "16px",
  border: "1px solid #000000",
  padding: "16px",
  fontSize: "14px",
  fontFamily: "var(--font-geist-mono)",
  lineHeight: 1.6,
  background: "#ffffff",
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
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 12px",
  borderRadius: "999px",
  border: "2px solid #000000",
  background: "#ffffff",
  fontSize: "12px",
  fontWeight: 600,
  lineHeight: 1,
  minHeight: "32px",
  letterSpacing: "0.02em",
  color: "#000000",
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
  borderWidth: "1px",
  cursor: "default",
  borderRadius: "10px",
});

export const infoChip = style({
  padding: "8px 12px",
  borderRadius: "10px",
  border: "2px solid #000000",
  background: "#ffffff",
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "#000000",
  cursor: "default",
});

export const table = style({
  display: "grid",
  columnGap: "8px",
  rowGap: "8px",
  overflowX: "auto",
  padding: "6px",
  paddingBottom: "14px",
  gridTemplateColumns:
    "64px repeat(var(--table-column-count), minmax(120px, 1fr))",
});

export const tableRow = style({
  display: "contents",
});

const cellBase = {
  padding: "10px 12px",
  borderRadius: "12px",
  border: "1px solid #000000",
  background: "#ffffff",
  fontSize: "13px",
  color: "#000000",
  textAlign: "left" as const,
  minWidth: 0,
  whiteSpace: "pre-wrap" as const,
  overflowWrap: "anywhere" as const,
};

export const tableHeaderCell = style({
  ...cellBase,
  background: "#ffffff",
  border: "2px solid #000000",
  fontWeight: 600,
  cursor: "pointer",
});

export const rowHeaderCell = style({
  ...cellBase,
  background: "#ffffff",
  border: "2px solid #000000",
  fontWeight: 600,
  cursor: "pointer",
});

export const cornerHeaderCell = style({
  cursor: "default",
  borderRadius: "8px",
});

export const tableCell = style({
  ...cellBase,
  background: "#ffffff",
  fontFamily: "var(--font-geist-mono)",
  borderRadius: "8px",
});

export const selectedCell = style({
  border: "2px solid #000000",
  outline: "2px double #000000",
  outlineOffset: "2px",
  boxShadow: "none",
});
