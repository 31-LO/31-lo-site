import Link from "@docusaurus/Link";
import Stack from "@mui/material/Stack";
import React from "react";

export default function CallToAction() {
  return (
    <div
      style={{
        backgroundColor: "var(--ifm-color-primary)",
        padding: "2rem 1rem",
      }}
    >
      <div
        className="container"
        style={{
          margin: "2rem auto",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap-reverse"
          gap={2}
          className="card"
          sx={{ padding: "2rem" }}
        >
          <Stack
            sx={{
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2>Chcesz do nas dołączyć?</h2>
              <p>Zapoznaj się z zasadmi rekrutacji i do dzieła!</p>
            </div>
            <div>
              <Link
                className="button button--primary button--lg"
                href="/docs/zasady-rekrutacji"
              >
                Rekrutacja
              </Link>
            </div>
          </Stack>
          <img
            src="/img/features/undraw_educator.svg"
            alt=""
            style={{
              width: "400px",
              maxWidth: "100%",
            }}
          />
        </Stack>
      </div>
    </div>
  );
}
