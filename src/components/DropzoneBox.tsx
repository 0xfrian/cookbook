// Components
import { Flex, Image } from "@chakra-ui/react";
import { MdOutlineAddPhotoAlternate as ImageIcon } from "react-icons/md";

// Dependencies
import { v4 as uuid } from "uuid";

// Constants, Functions, and Hooks
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { readFile } from "../utils/helpers";

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
    maxSize: 2000000, // 2MB
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      async function init() {
        // Parse file contents
        if (acceptedFiles.length > 0) {
          const file_uploaded: any = acceptedFiles[0];
          const file_size: number = file_uploaded.size/(1024^2)/1000;
          const file_data: string = await readFile(file_uploaded);

          console.log(`File Size: ${file_size.toFixed(2)} MB`);
          
          // Construct custom file object
          const file_new: any = {
            name: file_uploaded.path,
            preview: URL.createObjectURL(file_uploaded),
            data: file_data,
            type: file_uploaded.type,
          };
          
          // Insert new file object at the given index
          const data_new: any[] = [...data];
          data_new.splice(index, 1, file_new);
          setData(data_new);
        } else {
          console.log("Invalid file upload!");
        }
      }

      init();
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

