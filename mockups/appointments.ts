import { employees } from "./employees";

export const appointments = [
  {
    id: 1,
    clientName: "غادة محمد القحطاني",
    services: ["منكير كلاسيك", "لون عادي"],
    time: "7pm",
    date: "6/13/2024",
    phoneNumber: "0551234567",
    employees: ["محمد", "علي"],
    status: "confirmed",
  },
  {
    id: 2,
    clientName: "سارة علي الهاشمي",
    services: ["بديكير", "علاج القدم"],
    time: "5pm",
    date: "6/11/2024",
    phoneNumber: "0552345678",
    employees: ["عمر", "عبدالله"],
    status: "pending",
  },
  {
    id: 3,
    clientName: "ليلى خالد السعيد",
    services: ["قص الشعر", "تصفيف الشعر"],
    time: "3pm",
    date: "6/16/2024",
    phoneNumber: "0553456789",
    employees: ["محمد", "علي"],
    status: "confirmed",
  },
  {
    id: 4,
    clientName: "نورا عبدالله الزهراني",
    services: ["تنظيف الوجه", "ماسك"],
    time: "11am",
    date: "6/15/2024",
    phoneNumber: "0554567890",
    employees: ["عمر", "عبدالله"],
    status: "cancelled",
  },
  {
    id: 5,
    clientName: "ريم محمد الشريف",
    services: ["تلوين شعر", "علاج الكيراتين"],
    time: "1pm",
    date: "6/10/2024",
    phoneNumber: "0555678901",
    employees: ["محمد", "علي"],
    status: "pending",
  },
  {
    id: 6,
    clientName: "فاطمة أحمد البخيت",
    services: ["قص الأظافر", "طلاء الأظافر"],
    time: "2pm",
    date: "6/14/2024",
    phoneNumber: "0556789012",
    employees: ["عمر", "عبدالله"],
    status: "confirmed",
  },
  {
    id: 7,
    clientName: "هدى خالد الأنصاري",
    services: ["علاج الشعر", "تسريحة"],
    time: "4pm",
    date: "6/12/2024",
    phoneNumber: "0557890123",
    employees: ["محمد", "علي"],
    status: "pending",
  },
  {
    id: 8,
    clientName: "مها عبدالعزيز الرشيد",
    services: ["إزالة الشعر", "تقشير البشرة"],
    time: "10am",
    date: "6/13/2024",
    phoneNumber: "0558901234",
    employees: ["عمر", "عبدالله"],
    status: "confirmed",
  },
  {
    id: 9,
    clientName: "ندى محمد السالم",
    services: ["تصفيف الشعر", "صبغ الشعر"],
    time: "9am",
    date: "6/14/2024",
    phoneNumber: "0559012345",
    employees: ["محمد", "علي"],
    status: "pending",
  },
  {
    id: 10,
    clientName: "رانيا فهد الحربي",
    services: ["علاج البشرة", "تنظيف البشرة"],
    time: "12pm",
    date: "6/16/2024",
    phoneNumber: "0560123456",
    employees: ["عمر", "عبدالله"],
    status: "confirmed",
  },
  {
    id: 11,
    clientName: "منال علي الدوسري",
    services: ["مساج", "تنظيف القدم"],
    time: "3pm",
    date: "6/17/2024",
    phoneNumber: "0561234567",
    employees: ["محمد", "علي"],
    status: "pending",
  },
  {
    id: 12,
    clientName: "صفية سعيد العمري",
    services: ["علاج الكيراتين", "تسريح الشعر"],
    time: "8am",
    date: "6/10/2024",
    phoneNumber: "0562345678",
    status: "confirmed",
  },
  {
    id: 13,
    clientName: "سمية عبدالمجيد الهاشمي",
    services: ["تلوين الأظافر", "علاج الأظافر"],
    time: "6pm",
    date: "6/13/2024",
    phoneNumber: "0563456789",
    employees: ["عمر", "عبدالله"],
    status: "pending",
  },
  {
    id: 14,
    clientName: "عائشة محمود البلوشي",
    services: ["حلاقة", "تسريحة"],
    time: "11am",
    date: "6/16/2024",
    phoneNumber: "0564567890",
    employees: ["محمد", "علي"],
    status: "confirmed",
  },
  {
    id: 15,
    clientName: "هيفاء حسن السعدي",
    services: ["علاج البشرة", "تبييض الأسنان"],
    time: "4pm",
    date: "6/14/2024",
    phoneNumber: "0565678901",
    employees: ["عمر", "عبدالله"],
    status: "pending",
  },
  {
    id: 16,
    clientName: "خديجة صالح الغانم",
    services: ["مساج", "تقشير الجسم"],
    time: "9am",
    date: "6/11/2024",
    phoneNumber: "0566789012",
    employees: ["محمد", "علي"],
    status: "confirmed",
  },
  {
    id: 17,
    clientName: "حصة عبدالله السيف",
    services: ["تنظيف الوجه", "ماسك"],
    time: "2pm",
    date: "6/12/2024",
    phoneNumber: "0567890123",
    employees: ["عمر", "عبدالله"],
    status: "pending",
  },
  {
    id: 18,
    clientName: "لينا سعود العتيبي",
    services: ["صبغ الشعر", "قص الشعر"],
    time: "10am",
    date: "6/11/2024",
    phoneNumber: "0568901234",
    employees: ["محمد", "علي"],
    status: "confirmed",
  },
  {
    id: 19,
    clientName: "هديل محمد الغامدي",
    services: ["تصفيف الشعر", "علاج الشعر"],
    time: "5pm",
    date: "6/17/2024",
    phoneNumber: "0569012345",
    employees: ["عمر", "عبدالله"],
    status: "pending",
  },
  {
    id: 20,
    clientName: "مي خالد المطيري",
    services: ["علاج الأظافر", "طلاء الأظافر"],
    time: "8pm",
    date: "6/16/2024",
    phoneNumber: "0570123456",
    employees: ["محمد", "علي"],
    status: "confirmed",
  },
];
