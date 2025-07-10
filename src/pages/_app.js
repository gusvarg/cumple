import '../styles/globals.css';
import Footer from '../components/layout/Footer';
import { FloatingNav } from '../components/ui/FloatingNav';
import { navItems } from '../config/nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
