const formatDuration = (months) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  }

  if (remainingMonths > 0 || parts.length === 0) {
    parts.push(`${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`);
  }

  return parts.join(" ");
};

const monthCountInclusive = (startValue, endValue) => {
  const [startYear, startMonth] = startValue.split("-").map(Number);
  const endDate = endValue === "present" ? new Date() : new Date(`${endValue}-01T00:00:00`);
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth() + 1;

  return (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
};

if (typeof document !== "undefined") {
  document.querySelectorAll(".duration").forEach((duration) => {
    const start = duration.dataset.start;
    const end = duration.dataset.end;

    if (!start || !end) return;

    duration.textContent = formatDuration(monthCountInclusive(start, end));
  });
}
