import React from "react";
import { Image } from "@aws-amplify/ui-react";

export function Head() {
  // const { tokens } = useTheme();

  return (
    <div>
      <Image width="100%" height="100%" objectFit="cover" />
    </div>
  );
}
