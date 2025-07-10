import React from 'react';
import { FiPhone, FiInstagram } from 'react-icons/fi';
import { MaskContainer } from '../ui/svg-mask-effect';
import { footerContent } from '../../config/footer';

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-black">
      <MaskContainer
        revealText={
          <div className="container mx-auto text-gray-400 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            {/* Mensaje Principal */}
            <div className="text-center mb-16">
              <p className="text-2xl text-white font-semibold">{footerContent.signature}</p>
            </div>

            {/* Sección Principal del Footer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              
              {/* Columna 1: Mensaje Personal */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 font-display tracking-wider">{footerContent.personalMessage.title}</h3>
                <p className="text-sm leading-relaxed">
                  {footerContent.personalMessage.body}
                </p>
              </div>

              {/* Columna 2: Contacto Rápido */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 font-display tracking-wider">{footerContent.contact.title}</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-center md:justify-start gap-3">
                    <FiPhone />
                    <a href={footerContent.contact.whatsapp.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {footerContent.contact.whatsapp.text}
                    </a>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-500">
                  {footerContent.contact.note}
                </p>
              </div>

              {/* Columna 3: Redes Sociales */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 font-display tracking-wider">{footerContent.social.title}</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-center md:justify-start gap-3">
                    <FiInstagram />
                    <a href={footerContent.social.instagram.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {footerContent.social.instagram.text}
                    </a>
                  </li>
                </ul>
                <p className="mt-4 text-xl md:text-2xl font-semibold text-white">
                  {footerContent.social.hashtag}
                </p>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-xs">
              <p className="mb-2">
                {footerContent.bottom.credits} <span className="text-white font-semibold">{footerContent.bottom.author}</span>
              </p>
              <p className="mb-4">
                Desarrollo Web Profesional by <a href={footerContent.bottom.developer.link} target="_blank" rel="noopener noreferrer" className="text-[#62EFFC] hover:underline font-bold">{footerContent.bottom.developer.text}</a>
              </p>
              <p className="text-gray-500">
                {footerContent.bottom.copyright}
              </p>
            </div>
          </div>
        }
        className="text-black"
      >
        ¡LA CELEBRACIÓN <span className="text-[#6862FC]">APENAS COMIENZA!</span>
      </MaskContainer>
    </footer>
  );
};

export default Footer;