const BreakPoints = {
    Mobile: "600px",
    Tablet: "900px",
    Desktop: "1200px",
};

export const Device = {
    Mobile: `(max-width: ${BreakPoints.Mobile})`,
    Tablet: `(min-width: ${BreakPoints.Mobile}) and (max-width: ${BreakPoints.Tablet})`,
    Desktop: `(min-width: ${BreakPoints.Desktop})`,
};
