import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import styles from "./DownloadButton.module.css";

type DownloadButtonProps = {
  children: React.ReactNode;
  fileName: string;
};

export default function DownloadButton({
  children,
  fileName,
}: DownloadButtonProps) {
  return (
    <a
      role="button"
      download
      href={useBaseUrl(`files/${fileName}`)}
      className={styles.button}
    >
      {children}
    </a>
  );
}
