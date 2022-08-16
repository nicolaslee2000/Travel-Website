import {
    HailOutlined,
    AirplaneTicketOutlined,
    AccountCircleOutlined,
} from "@mui/icons-material";

const Menuitems = [
    {
        title: "Traveler Info",
        icon: HailOutlined,
        href: "/dashboard/travelerInfo",
    },
    {
        title: "My Bookings",
        icon: AirplaneTicketOutlined,
        href: "/dashboard/mybookings",
    },
    {
        title: "Account",
        icon: AccountCircleOutlined,
        href: "/dashboard/account",
    },
];

export default Menuitems;
