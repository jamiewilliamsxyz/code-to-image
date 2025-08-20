import "./DownloadButton.css";

export const DownloadButton = ({ onDownload }) => {
  return (
    <button onClick={onDownload} className="download-btn">
      Download
    </button>
  );
};
