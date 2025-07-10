import React from 'react';
import { FiCalendar, FiClock, FiMapPin, FiUsers } from 'react-icons/fi';

export const detailsContent = {
  title: "¿Cómo Llegar a los 40 de Gus?",
  subtitleWords: [
    { text: "Acá" },
    { text: "están" },
    { text: "los" },
    { text: "detalles" },
    { text: "para" },
    { text: "que" },
    { text: "no" },
    { text: "te" },
    { text: "pierdas" },
    { text: "¡Agéndate Pues!", className: "text-[#6862FC]" },
  ],
  cards: [
    {
      title: '¿Cuando?',
      subtitle: 'este Viernes 18 de Julio',
      icon: <FiCalendar className="h-100 w-100" />
    },
    {
      title: '¿A qué hora?',
      subtitle: 'Pilas llega a las 5:30 Pm',
      icon: <FiClock className="h-100 w-100" />
    },
    {
      title: '¿Y en donde es?',
      subtitle: 'en Sky 15 Rooftop del Hilton Bogotá de la 7a con 72 en Bogotá',
      icon: <FiMapPin className="h-100 w-100" />,
      button: { text: '¿Y cómo llego?', link: 'https://www.google.com/maps?rlz=1C1VDKB_esAR1021AR1021&um=1&ie=UTF-8&fb=1&gl=co&sa=X&geocode=Kb0Li-w_mz-OMVbian6605VL&daddr=Ak+7+%23No.+72-41,+Chapinero,+Bogot%C3%A1,+Cundinamarca' }
    },
    {
      title: '¿Como vestir?',
      subtitle: 'Jajajaja como quieras relájate',
      icon: <FiUsers className="h-100 w-100" />
    },
  ]
};