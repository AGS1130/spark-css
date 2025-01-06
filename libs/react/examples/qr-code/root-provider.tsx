import { QrCode, useQrCode } from "@ark-ui/react/qr-code";

export const RootProvider = () => {
  const qrCode = useQrCode({ value: "http://ark-ui.com" });

  return (
    <>
      <button type="button" onClick={() => qrCode.setValue("https://ark-ui.com")}>
        Set Value
      </button>

      <QrCode.RootProvider value={qrCode}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.RootProvider>
    </>
  );
};