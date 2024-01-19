function formatReleaseDate(date) {
  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObject.toLocaleDateString("en-US", options);
}

export { formatReleaseDate };
