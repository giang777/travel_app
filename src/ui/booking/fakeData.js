import i18n from '../../l10n/i18n';

const arrOptions = [
    { id: 1, title: i18n.t("booking.onGoing") },
    { id: 2, title: i18n.t("booking.completed") },
    { id: 3, title: i18n.t("booking.canceled") },
];


const methodPayment = [
    {id: 0, title:'Payal', image: require('../../../assets/icons/paypal.png')},
    {id: 1, title:'Google Pay', image: require('../../../assets/icons/google.png')},
    {id: 2, title:'Apple Pay', image: require('../../../assets/icons/s3.png')},
    {id: 3, title:'MasterCard', image: require('../../../assets/icons/card.png')},
]
//--------------DATA---------
const arrFakeDataOngoing = [
    { id: 1, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.paid"), uri: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg" },
    { id: 2, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.paid"), uri: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg" },
    { id: 3, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.paid"), uri: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg" },
    { id: 4, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.paid"), uri: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg" },
    { id: 5, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.paid"), uri: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg" },
    { id: 6, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.paid"), uri: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg" },
    { id: 7, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.paid"), uri: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg" },
]
const arrFakeDataCompleted = [
    { id: 1, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.completed"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 2, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.completed"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 3, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.completed"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 4, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.completed"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 5, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.completed"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 6, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.completed"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 7, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.completed"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
]

const arrFakeDataCanceled = [
    { id: 1, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.canceled"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 2, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.canceled"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 3, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.canceled"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 4, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.canceled"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 5, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.canceled"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 6, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.canceled"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 7, name: "Hotel XYZ", address: "HaNoi, VietNam", status: i18n.t("booking.status.canceled"), uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
]
export { arrOptions, methodPayment, arrFakeDataOngoing, arrFakeDataCompleted, arrFakeDataCanceled }

