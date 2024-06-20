import { Typography, Box } from "@mui/material";
import { Attribute } from "@/lib/odota";
import { AttributeImage } from "../AttributeImage";

const ATTRIBUTE_TO_TITLE: Record<Attribute, string> = {
  str: "Strength",
  agi: "Agility",
  int: "Intelligence",
  all: "Universal",
};

export function PrimaryAttribute({
  attribute,
}: Readonly<{ attribute: Attribute }>) {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography
        variant="body1"
        fontSize={16}
        fontWeight={700}
        textTransform="uppercase"
      >
        Primary Attribute
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <AttributeImage width={32} height={32} attribute={attribute} />
        <Typography variant="body1" fontSize={24} textTransform="uppercase">
          {ATTRIBUTE_TO_TITLE[attribute]}
        </Typography>
      </Box>
    </Box>
  );
}
