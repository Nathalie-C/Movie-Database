function formatReleaseDate(date) {
  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObject.toLocaleDateString("en-US", options);
}

function filterVideos(videoDataArray) {
  //site = "Youtube"
  //type - "Trailer"
  return videoDataArray.filter(() => {
    return (
      videoDataArray.site === "Youtube" && videoDataArray.type === "Trailer"
    );
  });
}

export { formatReleaseDate, filterVideos };
