import { Option } from "@/lib/types";
import { useEffect, useState } from "react";
import UploadIcon from "./icons/UploadIcon";
import CloseIcon from "./icons/CloseIcon";
import Image from "next/image";
import TooltipInfo from "./TooltipInfo";

const ImageUpload = ({ name, tooltip, intialValue }: { name: string; tooltip?: string, intialValue?: string }) => {
  const [image, setImage] = useState<Option | null>(null);

  useEffect(() => {
    if (intialValue) {
      setImage({
        value: intialValue,
        label: "logo",
      });
    }
  }, [intialValue]);

  return (
    <div className="flex flex-col gap-2.5" key={name}>
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="text-xs font-semibold text-black">
          {name}
        </label>
        {tooltip && <TooltipInfo title={tooltip} />}
      </div>

      <div className="fancy-scroll flex items-center justify-start gap-2 overflow-x-auto overflow-y-hidden">
        {image ? (
          <label
            htmlFor={name}
            className="relative max-h-[68px] min-h-[68px] min-w-[68px] max-w-[68px] rounded-lg bg-bgGray px-2 py-3"
          >
            <Image
              src={image.value}
              alt={image.label}
              width={52}
              height={44}
              className="max-h-[44px] max-w-[52px] rounded-lg object-cover"
            />
            <button
              type="button"
              onClick={() => setImage(null)}
              className="absolute right-0 top-0 rounded-full bg-white p-[0px] text-[#DC0202]"
            >
              <CloseIcon width={20} height={20} />
            </button>
          </label>
        ) : (
          <div className="max-h-[68px] min-h-[68px] min-w-[68px] max-w-[68px] rounded-lg bg-bgGray px-2 py-3">
            <label
              htmlFor={name}
              className="flex flex-col items-center gap-1 text-primary"
            >
              <UploadIcon />
              <span className="text-[10px] ">إضافة صورة</span>
            </label>
          </div>
        )}

        <input
          type="file"
          id={name}
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const files = e.target.files;
            if (files) {
              const image = files[0];
              setImage({
                value: URL.createObjectURL(image),
                label: image.name,
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
