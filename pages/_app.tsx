import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { CntrlProvider, customItems, customSections } from '@cntrl-site/sdk-nextjs';
import { CTALink } from '../components/CTALink/CTALink';

// place your custom items/sections definitions here
customItems.define('cta-link', () => <CTALink label="Get Access" href="#" />);
customSections.define('section_7', {
  component: () => <div>Hello from Code</div>,
  dataResolver: async () => ({ your: 'CMS data here' })
});

function App({ Component, pageProps }: AppProps) {
  return (
    <CntrlProvider>
      <Component {...pageProps} />
    </CntrlProvider>
  );
}

export default App;
