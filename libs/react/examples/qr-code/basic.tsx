import { QrCode } from "@ark-ui/react/qr-code";
import { qrCodeStyledSlots as minimal } from "@spark-css/theme-minimal";
import { qrCodeStyledSlots as park } from "@spark-css/theme-park";
import { qrCodeStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <QrCode.Root defaultValue="http://ark-ui.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
      <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png">
        Download
      </QrCode.DownloadTrigger>
    </QrCode.Root>
  );
};
