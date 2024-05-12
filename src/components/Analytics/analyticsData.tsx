interface AnalyticsData {
    id: number;
    xs?: number;
    position?: "top-full" | "bottom-left" | "bottom-middle" | "bottom-right";
    content?: string;
    height?: number;
    container?: Container[];
};  

interface Container {
    id: number;
    xs: number;
    position: string;
    content: string;
}

export const analyticsData: AnalyticsData[] = [
    {
        id: 1,
        xs: 6,
        position: "top-full",
        content: "row-1 item-1 xs-6",
        height: 300,
    },
    {
        id: 2,
        xs: 6,
        position: "top-full",
        content: "row-1 item-2 xs-6",
        height: 300,
    },
    {
        id: 3,
        xs: 3,
        position: "bottom-left",
        content: "row-2 item-3 xs-3",
        height: 300,
    },
    {
        id: 4,
        position: "bottom-middle",
        container: [
            {
                id: 5,
                xs: 6,
                position: "bottom-middle",
                content: "row-2 grid item-4 xs-6",
            },
            {
                id: 6,
                xs: 6,
                position: "bottom-middle",
                content: "row-2 grid item-5 xs-6",
            },
            {
                id: 7,
                xs: 6,
                position: "bottom-middle",
                content: "row-2 grid item-6 xs-6",
            },
            {
                id: 8,
                xs: 6,
                position: "bottom-middle",
                content: "row-2 grid item-7 xs-6",
            }
        ],
    },
    {
        id: 9,
        xs: 4,
        position: "bottom-right",
        content: "row-2 grid item-8 xs-4",
    },
]