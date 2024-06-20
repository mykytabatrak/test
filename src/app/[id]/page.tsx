import Link from "next/link";
import { Container, Typography } from "@mui/material";
import { HeroDetails } from "@/ui/HeroDetails/HeroDetails.client";
// import { HeroDetails } from "@/ui/HeroDetails/HeroDetails.server";

export default async function HeroPage({ params }: { params: { id: string } }) {
  return (
    <Container
      component="main"
      sx={{ py: 4, display: "flex", flexDirection: "column", gap: 4 }}
    >
      <Typography component={Link} href="/" sx={{ color: "text.primary" }}>
        Back To Heroes
      </Typography>
      <HeroDetails id={params.id} />
    </Container>
  );
}
