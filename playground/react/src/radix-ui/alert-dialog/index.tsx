import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const Basic = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger>delete everything</AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
        <AlertDialog.Description>This will do a very dangerous thing. Thar be dragons!</AlertDialog.Description>
        <AlertDialog.Action>yolo, do it</AlertDialog.Action>
        <AlertDialog.Cancel>maybe not</AlertDialog.Cancel>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
