const arrOptions = [
    { id: 1, title: "Ongoing" },
    { id: 2, title: "Completed" },
    { id: 3, title: 'Canceled' },
];


const methodPayment = [
    {id: 0, title:'Payal', image: require('../../assets/icons/paypal.png')},
    {id: 1, title:'Google Pay', image: require('../../assets/icons/google.png')},
    {id: 2, title:'Apple Pay', image: require('../../assets/icons/s3.png')},
    {id: 3, title:'MasterCard', image: require('../../assets/icons/card.png')},
]
//--------------DATA---------
const arrFakeDataOngoing = [
    { id: 1, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Paid', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 2, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Paid', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 3, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Paid', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 4, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Paid', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 5, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Paid', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 6, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Paid', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 7, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Paid', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
]
const arrFakeDataCompleted = [
    { id: 1, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Completed', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 2, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Completed', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 3, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Completed', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 4, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Completed', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 5, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Completed', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 6, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Completed', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 7, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Completed', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
]

const arrFakeDataCanceled = [
    { id: 1, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Canceled & Refunded', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 2, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Canceled & Refunded', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 3, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Canceled & Refunded', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 4, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Canceled & Refunded', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 5, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Canceled & Refunded', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 6, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Canceled & Refunded', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
    { id: 7, name: "Hotel XYZ", address: "HaNoi, VietNam", status: 'Canceled & Refunded', uri: "https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" },
]
export { arrOptions, methodPayment, arrFakeDataOngoing, arrFakeDataCompleted, arrFakeDataCanceled }

