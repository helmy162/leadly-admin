"use client";
import AccountIcon from "@/components/icons/AccountIcon";
import EyeOffIcon from "@/components/icons/EyeOffIcon";
import EyeOnIcon from "@/components/icons/EyeOnIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import LockIcon from "@/components/icons/LockIcon";
import { english_font } from "@/fonts";
import { useState } from "react";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add login logic here
  };

  return (
    <div className="flex w-full flex-col gap-6 px-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-right text-[22px] font-bold text-black">
          تسجيل الدخول
        </h2>
        <h3 className="text-textGray text-right text-sm"> أهلًا بعودتك</h3>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <AccountIcon width={12} height={18} className="text-textGray" />
            </div>

            <input
              id="phone"
              name="phone"
              type="tel"
              className="text-textGray placeholder:text-placeholder w-full rounded-lg border border-borderGray py-3 pl-4  pr-10 text-right text-sm focus-within:border-primary focus-within:!outline-none focus:border-primary focus:!outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="رقم الجوال"
            />
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <LockIcon width={14} height={18} className="text-textGray" />
            </div>

            <button
              className="text-textGray absolute inset-y-0 left-4 flex cursor-pointer items-center"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {!showPassword ? (
                <EyeOffIcon width={20} height={18} />
              ) : (
                <EyeOnIcon width={22} height={20} />
              )}
            </button>

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              className="text-textGray placeholder:text-placeholder w-full rounded-lg border border-borderGray py-3 pl-4  pr-10 text-right text-sm focus-within:border-primary focus-within:!outline-none focus:border-primary focus:!outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="كلمة السر"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className=" flex items-center gap-3 font-bold text-black">
            <input
              type="checkbox"
              className="size-5 rounded-3xl leading-tight accent-primary"
            />
            <span className="text-xs font-medium leading-5">تذكرني</span>
          </label>
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="focus:shadow-outline hover:bg-primaryHover h-12 w-full rounded-xl bg-primary px-4 py-2 font-bold text-white focus:outline-none"
        >
          تسجيل الدخول
        </button>

        <div className="flex items-center">
          <hr className="flex-grow border-t border-borderGray" />
          <span className="text-textGray px-4">الدخول بواسطة</span>
          <hr className="flex-grow border-t border-borderGray" />
        </div>

        <button className={`${english_font.className} flex h-12 w-full items-center justify-center rounded-xl border border-borderGray bg-transparent px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100`}>
          Google
          <GoogleIcon className="mr-3" />
        </button>
      </form>
    </div>
  );
}
