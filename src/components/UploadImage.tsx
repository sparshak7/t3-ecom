'use client'

import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

const UploadImage = () => {
  const router = useRouter()
  return <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
    router.refresh()
  }} />;
}
export default UploadImage