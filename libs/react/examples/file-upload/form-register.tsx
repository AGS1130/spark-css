import { FileUpload } from "@ark-ui/react/file-upload";
import { fileUploadStyledSlots as minimal } from "@spark-css/theme-minimal";
import { fileUploadStyledSlots as park } from "@spark-css/theme-park";
import { fileUploadStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { FileIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { type Theme, getTheme } from "../utils";

interface FieldValues {
  files: File[];
}

export const WithFormRegister = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const { register, handleSubmit } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FileUpload.Root maxFiles={5}>
        <FileUpload.Label>File Upload</FileUpload.Label>
        <FileUpload.Dropzone>Drag your file(s) here</FileUpload.Dropzone>
        <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
        <FileUpload.ItemGroup>
          <FileUpload.Context>
            {({ acceptedFiles }) =>
              acceptedFiles.map((file) => (
                <FileUpload.Item key={file.name} file={file}>
                  <FileUpload.ItemPreview type="image/*">
                    <FileUpload.ItemPreviewImage />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemPreview type=".*">
                    <FileIcon />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemName />
                  <FileUpload.ItemSizeText />
                  <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              ))
            }
          </FileUpload.Context>
        </FileUpload.ItemGroup>
        <FileUpload.HiddenInput {...register("files")} />
      </FileUpload.Root>

      <button type="submit">Submit</button>
    </form>
  );
};
