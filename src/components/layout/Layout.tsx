import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const fullTitle = title 
    ? `${title} | Alcoholics Anonymous - Ekta Intergroup` 
    : 'Alcoholics Anonymous - Ekta Intergroup';

  const defaultDescription = 
    'Alcoholics Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from alcoholism.';

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aaekta.org" />
        <meta property="og:image" content="/images/og-img.png" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
