import { Option } from "@/lib/types";
import { useState } from "react";
import Select from "react-select";
import InfoIcon from "./icons/InfoIcon";
import UploadIcon from "./icons/UploadIcon";
import CloseIcon from "./icons/CloseIcon";
import Image from "next/image";

const ImagesUpload = ({ name }: { name: string }) => {
  const [images, setImages] = useState<Option[]>([]);
  return (
    <div className="flex flex-col gap-2.5" key={name}>
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="text-xs font-semibold text-black">
          {name}
        </label>
        <InfoIcon className="text-textGray" />
      </div>

      <div className="flex items-center justify-start gap-2 fancy-scroll overflow-x-auto overflow-y-hidden">
        <div className="bg-bgGray rounded-lg py-3 px-2 min-w-[68px] min-h-[68px] max-w-[68px] max-h-[68px]">
          <label
            htmlFor={name}
            className="flex flex-col items-center gap-1 text-primary"
          >
            <UploadIcon />
            <span className="text-[10px] ">إضافة صورة</span>
          </label>

          <input
            type="file"
            id={name}
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                const imagesArray = Array.from(files).map((file) => {
                  return {
                    value: URL.createObjectURL(file),
                    label: file.name,
                  };
                });
                setImages([...images, ...imagesArray]);
              }
            }}
          />
        </div>

        {images.length > 0 &&
          images.map((image, index) => (
            <div key={index} className="relative bg-bgGray rounded-lg py-3 px-2 min-w-[68px] min-h-[68px] max-w-[68px] max-h-[68px]">
              <Image
                src={image.value}
                alt={image.label}
                width={52}
                height={44}
                className="object-cover max-w-[52px] max-h-[44px] rounded-lg"
              />
              <button
                type="button"
                onClick={() => {
                  const newImages = images.filter(
                    (img) => img.value !== image.value,
                  );
                  setImages(newImages);
                }}
                className="absolute right-0 top-0 rounded-full text-[#DC0202] bg-white p-[0px]"
              >
                <CloseIcon width={20} height={20} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImagesUpload;
