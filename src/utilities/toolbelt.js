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
  return videoDataArray.filter((videoData) => {
    return videoData.site === "YouTube" && videoData.type === "Trailer";
  });
}

function formatRuntime(runtime) {
  if (runtime < 60) {
    return runtime + "m";
  } else {
    return Math.floor(runtime / 60) + "h " + (runtime % 60) + "m";
  }
}

export { formatReleaseDate, filterVideos, formatRuntime };
