import i18n from "../../l10n/i18n";

const arrOptions = [
    { id: 1, title: i18n.t("home.recommended") },
    { id: 2, title: i18n.t("home.popular") },
    { id: 3, title: i18n.t("home.trending")},
    { id: 4, title: i18n.t("home.top") },
];

const arrFakeData = [
    {id:1,name:"Emeralda De Hotel",address:"Paris, France",price:29,rate:4.1,uri:"https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg"},
    {id:2,name:"Emeralda De Hotel",address:"Paris, France",price:39,rate:4.5,uri:"https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/09/maro-hotel-vntrip-e1536049726871.jpg"},
    {id:3,name:"Emeralda De Hotel",address:"Paris, France",price:19,rate:5.0,uri:"https://du-lich.chudu24.com/f/m/2303/07/khach-san-may-de-ville-premier-ha-noi-24.jpg?w=550&c=1"},
    {id:4,name:"Emeralda De Hotel",address:"Paris, France",price:99,rate:4.6,uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgXASz76hhXrwe_pQv3OQXdrnJ4Mmx5lTCw&usqp=CAU"},
]

export {arrOptions,arrFakeData}
