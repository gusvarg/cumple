import { FiHome, FiInfo, FiCoffee, FiGift } from 'react-icons/fi';

export const navItems = [
  { name: "El Cuarentón", link: "#inicio", icon: <FiHome />, ariaLabel: "Ir a la sección de Inicio" },
  { name: "Cuándo es?", link: "#detalles", icon: <FiInfo />, ariaLabel: "Ir a la sección de Detalles" },
  { name: "Para Comer y Beber", link: "#menu", icon: <FiCoffee />, ariaLabel: "Ir a la sección Para Comer y Beber" },
  { name: "Ideas de Regalo", link: "#regalos", icon: <FiGift />, ariaLabel: "Ir a la sección de Regalos" },
];