import { ReactElement } from "react";
import { AiOutlineHome, AiOutlineUser, AiTwotoneCalendar } from "react-icons/ai";
import { BiLogOut, BiHelpCircle, BiBarChartSquare, BiMessageDetail } from "react-icons/bi";
import { TbArrowBack } from "react-icons/tb";

import { Routes } from "../../Routes/Routes";

type DTO = {
    id?: number;
    icon?: ReactElement;
    title?: string | ReactElement;
    path?: string;
    profile?: boolean;
    logout?: boolean;
};

export const sidebarData: DTO[] = [
    {
        id: 1,
        profile: true,
        logout: false
    },
    {
        id: 2,
        icon: <AiOutlineHome/>,
        title: "Dashboard",
        path: Routes.DASHBOARD,
        profile: false,
        logout: false,
    },
    {
        id: 3,
        icon: <AiOutlineUser/>,
        title: "Customers",
        path: `${Routes.DASHBOARD}${Routes.CUSTOMERS}`,
        profile: false,
        logout: false,
    },
    {
        id: 4,
        icon: <AiTwotoneCalendar/>,
        title: "Calendar",
        path: `${Routes.DASHBOARD}${Routes.CALENDAR}`,
        profile: false,
        logout: false,
    },
    {
        id: 5,
        icon: <BiBarChartSquare/>,
        title: "Charts",
        path: `${Routes.DASHBOARD}${Routes.CHARTS}`,
        profile: false,
        logout: false,
    },
    {
        id: 6,
        icon: <BiHelpCircle/>,
        title: "FAQ",
        path: `${Routes.DASHBOARD}${Routes.FAQ}`,
        profile: false,
        logout: false,
    },
    {
        id: 7,
        icon: <BiMessageDetail/>,
        title: "Support",
        path: `${Routes.DASHBOARD}${Routes.SUPPORT}`,
        profile: false,
        logout: false,
    },
    {
        id: 8,
        icon: <TbArrowBack/>,
        title: "Go back",
        path: Routes.HOME,
        profile: false,
        logout: false,
    },
    {
        id: 9,
        profile: false,
        logout: true,
    },
]