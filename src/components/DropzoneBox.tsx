// Components
import { Flex, Image } from "@chakra-ui/react";
import { MdOutlineAddPhotoAlternate as ImageIcon } from "react-icons/md";

// Dependencies
import { v4 as uuid } from "uuid";

// Constants, Functions, and Hooks
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

// Types
import type { ReactElement } from "react";
import type { DropzoneOptions } from "react-dropzone";

export default function DropzoneBox({
  index,
  data, setData,
}: any) {

  // State variables
  const [content, setContent] = useState<ReactElement>();

  // react-dropzone
  const options: DropzoneOptions = {
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      // Update state variable: files
      const file_uploaded: any = acceptedFiles[0];
      const file_new: any = {
        name: file_uploaded.path,
        preview: URL.createObjectURL(file_uploaded),
      };
      const reader: FileReader = new FileReader();
      reader.onabort = () => console.log("File reading aborted!");
      reader.onerror = () => console.log("File reading failed!");
      reader.onload = () => {
        file_new.b64s = reader.result;
      }
      reader.readAsDataURL(file_uploaded); // encode image into base64 string

      const data_new: any[] = [...data];
      data_new.splice(index, 1, file_new);
      setData(data_new);
    },
  };
  const { getRootProps, getInputProps } = useDropzone(options);

  useEffect(() => {
    if (data[index]?.preview) {
      setContent(
        <Image
          key={uuid()}
          src={data[index]?.preview}
          objectFit="cover"
          width="72px"
          height="72px"
          borderRadius="5px"
          cursor="pointer"
          transition="all 200ms ease-in-out"
          _focusVisible={{
            filter: "brightness(0.8)",
            transform: "scale(1.05)",
          }}
          _hover={{
            filter: "brightness(0.8)",
            transform: "scale(1.05)",
          }}
        />
      );
    } else {
      setContent(
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          padding="20px"
          width="min-content"
          cursor="pointer"
          border="1px solid white"
          borderRadius="5px"
          transition="background 200ms ease-in-out"
          _focusVisible={{
            background: "rgba(0, 0, 0, 0.3)",
          }}
          _hover={{
            background: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            gap="10px"
            height="100%"
          >
            <ImageIcon size="30px" />
          </Flex>
        </Flex>
      );
    }
  }, [data]);

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input
        id="image-input"
        {...getInputProps}
        style={{
          position: "absolute",
          width: "0",
          height: "0",
          overflow: "hidden",
        }} 
      />
      {content}
    </div>
  );
}

