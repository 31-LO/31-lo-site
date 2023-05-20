import Link from "@docusaurus/Link";
import Stack from "@mui/material/Stack";
import React from "react";

export default function CallToAction() {
  return (
    <div className="container" style={{ margin: "2rem auto" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap-reverse"
        gap={2}
      >
        <Stack
          sx={{
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2>Chcesz do nas dołączyć?</h2>
            <p>
              Dowiedz się jeszcze więcej o szkole i poznaj zasady rekrutacji.
            </p>
          </div>
          <div>
            <Link
              className="button button--secondary button--lg"
              href="/docs/oferta-edukacyjna"
            >
              Oferta edukacyjna
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
  );
}
