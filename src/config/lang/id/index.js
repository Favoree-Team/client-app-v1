import {
  dana_mini,
  gopay_mini,
  money,
  ovo_mini,
  shield,
  spay_mini,
  stack,
  step_one,
  step_two,
  step_three,
  step_four,
  step_five,
} from "../../../utils/assets";
import {
  contact_number,
  hubungi_admin,
  laporkan_kendala,
} from "../../credential";

export const Header = {
  ABOUT: "Tentang Kami",
  HOW_IT_WORKS: "Cara Kerja",
};

export const HeroText = {
  TITLE: "Solusi aman dan mudah transfer saldo e-wallet anda", // antar
  DESCRIPTION:
    "Favoree merupakan platform digital yang mejamin keamanan anda dalam melakukan transfer saldo antar E-wallet dengan biaya rendah.",
  START: "Yuk mulai",
  CARA_KERJA: "Lihat Cara Kerja",
};

export const FooterText = {
  SOCIAL: "Sosial media kami",
  FEATURE_HEAD: "Fitur",
  FEATURE_SECTION: [
    {
      name: "Benefit",
      isExternal: false, // nge href, pindah page / ke web lain, bukan set false, scrolling ke atas
      href: "#benefit",
    },
    {
      name: "Tentang Kami",
      isExternal: false,
      href: "#about-us",
    },
    {
      name: "Cara Kerja",
      isExternal: false,
      href: "#cara-kerja",
    },
    {
      name: "Testimoni",
      isExternal: false,
      href: "#testimoni",
    },
    {
      name: "FAQ",
      isExternal: false,
      href: "#faq",
    },
  ],

  SERVICE_HEAD: "Layanan Pengguna",
  SERVICE_SECTION: [
    {
      name: "Laporkan Kendala",
      isExternal: true,
      href: laporkan_kendala,
    },
    {
      name: "Hubungi Admin",
      isExternal: true,
      href: hubungi_admin,
    },
    {
      name: "Syarat dan Ketentuan",
      isExternal: true,
      href: "/term-and-condition",
    },
  ],

  CONTACT_HEAD: "Hubungi Kami",
  CONTACT_SECTION: [
    "Nomor Telepon",
    "0857-3665-3576",
    {
      name: "Nomor Telepon",
      isExternal: false,
      isLink: false,
    },
    {
      name: "0857-3665-3576",
      isExternal: true,
      isLink: true,
      href: contact_number,
    },
  ],

  TIME_OPERATION: "Jam Operasional",
  TIME: "Setiap hari, pukul 08.00 - 21.00 WIB",
};

export const BenefitText = {
  BENEFIT_DATA: [
    {
      title: "Aman",
      alt: "image-save",
      icon: shield,
      description: "Favoree menjamin 100% keamanan dengan garansi uang kembali",
    },
    {
      title: "Praktis",
      alt: "image-practical",
      icon: stack,
      description:
        "Konversi dengan Favoree dapat dilakukan dimanapun dan kapanpun",
    },
    {
      title: "Harga terjangkau",
      alt: "image-affordable-price",
      icon: money,
      description: "Favoree menawarkan biaya convert yang terjangkau",
    },
  ],

  WALLET_HEAD: "Mendukung pembaytaran untuk platform e-wallet",
  WALLET_DESCRIPTION: "Didukung oleh layanan keuangan terkenal di Indonesia",

  WALLET_ICON: [
    {
      alt: "image-gopay",
      icon: gopay_mini,
    },
    {
      alt: "image-dana",
      icon: dana_mini,
    },
    {
      alt: "image-spay",
      icon: spay_mini,
    },
    {
      alt: "image-ovo",
      icon: ovo_mini,
    },
  ],

  QRIS_DESCRIPTION:
    "Kami mendukung QRIS untuk mengintegrasikan seluruh metode pembayaran elektronik",
};

export const CaraKerjaText = {
  TITLE: "Cara Kerja",
  DESCRIPTION:
    "Ikuti alur cara kerja berikut untuk melakukan transaksi dengan mudah",

  STEP_DATA: [
    {
      number: "01",
      icon: step_one,
      alt: "image-step-one",
      header: "Lengkapi form",
      description:
        "isi formulir untuk melengkapi data yang kami butuhkan, Klik disini untuk memulai",
    },
    {
      number: "02",
      icon: step_two,
      alt: "image-step-two",
      header: "Lakukan pembayaran",
      description:
        "Lakukan pembayaran setelah mengisi formulir dengan lengkap",
    },
    {
      number: "03",
      icon: step_three,
      alt: "image-step-three",
      header: "Menuggu proses",
      description:
        "Ini mungkin memakan waktu beberapa menit",
    },
    {
      number: "04",
      icon: step_four,
      alt: "image-step-four",
      header: "Saldo diterima",
      description:
        "Laporan terkait status transfer akan dikirim melalui alamat email terdaftar",
    },
    {
      number: "05",
      icon: step_five,
      alt: "image-step-five",
      header: "Transfer selesai",
      description:
        "Transfer saldo e-wallet Anda telah berhasil",
    },
  ],
};
