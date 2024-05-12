import { ReactNode } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneIncoming } from "react-icons/bi";
import { RxTwitterLogo } from "react-icons/rx";

interface SupportData {
    id: number;
    icon: ReactNode;
    content: string;
};  

export const supportData = [
    {
        id: 1,
        icon: <AiOutlineMail/>,
        content: "support24@gmail.com"
    },
    {
        id: 2,
        icon: <BiPhoneIncoming/>,
        content: "+381 66/666-66-66"
    },
    {
        id: 3,
        icon: <RxTwitterLogo/>,
        content: "https://twitter.com/support24"
    },
]