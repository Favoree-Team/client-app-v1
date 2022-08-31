import { contact_number, hubungi_admin, laporkan_kendala } from "../../credential";

export const Header = {
  ABOUT: "Tentang Kami",
  HOW_IT_WORKS: "Cara Kerja",
};

export const HeroText = {
  TITLE: "Solusi aman dan mudah transfer saldo e-wallet anda", // antar
  DESCRIPTION: "Favoree merupakan platform digital yang mejamin keamanan anda dalam melakukan transfer saldo antar E-wallet dengan biaya rendah.",
  START: "Yuk mulai",
  CARA_KERJA: "Lihat Cara Kerja",
}

export const FooterText = {
  SOCIAL : "Sosial media kami",

  FEATURE_HEAD: "Fitur",
  FEATURE_SECTION: [{
    name: "Benefit",
    isExternal: false, // nge href, pindah page / ke web lain, bukan set false, scrolling ke atas
    href: "#benefit",
  },{
    name: "Tentang Kami",
    isExternal: false,
    href: "#about-us",
  }, {
    name: "Cara Kerja",
    isExternal: false,
    href: "#cara-kerja",
  },{
    name: "Testimoni",
    isExternal: false,
    href: "#testimoni",
  }, {
    name: "FAQ",
    isExternal: false,
    href: "#faq",
  }],

  SERVICE_HEAD: "Layanan Pengguna",
  SERVICE_SECTION: [{
    name: "Laporkan Kendala",
    isExternal: true,
    href: laporkan_kendala,
  },{
    name: "Hubungi Admin",
    isExternal: true,
    href: hubungi_admin,
  }, {
    name: "Syarat dan Ketentuan",
    isExternal: true,
    href: "/term-and-condition"
  }],
  
  CONTACT_HEAD: "Hubungi Kami",
  CONTACT_SECTION: ["Nomor Telepon", "0857-3665-3576", {
    name: "Nomor Telepon",
    isExternal: false,
    isLink: false,
  }, {
    name: "0857-3665-3576",
    isExternal: true,
    isLink: true,
    href: contact_number
  }],

  TIME_OPERATION: "Jam Operasional",
  TIME: "Setiap hari, pukul 08.00 - 21.00 WIB",
}
