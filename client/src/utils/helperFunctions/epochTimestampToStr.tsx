export function epochTimestampToStr(timestamp: EpochTimeStamp) {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;
  if (diff < 60) {
    return `${Math.floor(diff)} seconds ago`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} mins ago`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hrs ago`;
  } else if (diff < 172800) {
    return `yesterday`;
  } else if (diff < 2_628_288) {
    return `${Math.floor(diff / 172800)} days ago`;
  } else {
    return `${Math.floor(diff / 2_628_288)} months ago`;
  }
}
