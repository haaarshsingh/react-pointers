"use client";

import Image from "next/image";
import { Cursor, CursorProps } from "react-pointers";

export default () => {
  const props: CursorProps = {
    default: { cursor: <PixelArtDefault /> },
    pointer: { cursor: <PixelArtPointer />, query: ["button", "a"] },
    wait: { cursor: <PixelArtLoading />, query: [".loading"] },
  };

  return <Cursor {...props} />;
};

const PixelArtDefault = () => (
  <Image width={24} height={24} src="/cursors/pixel-art/default.png" alt="" />
);

const PixelArtPointer = () => (
  <Image width={24} height={24} src="/cursors/pixel-art/pointer.png" alt="" />
);

const PixelArtLoading = () => (
  <Image width={24} height={24} src="/cursors/pixel-art/loading.png" alt="" />
);
