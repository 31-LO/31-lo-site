import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

type DownloadButtonProps = {
  children: React.ReactNode;
  fileName: string;
};

export default function DownloadButton({
  children,
  fileName,
}: DownloadButtonProps) {
  return (
    <a role="button" download href={useBaseUrl(`files/${fileName}`)}>
      {children} <FileDownloadIcon fontSize="small" />
    </a>
  );
}
