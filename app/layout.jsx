import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Prompt-share",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
    
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Navbar/>
          {children}
        </main>
     
    </body>
  </html>
);

export default RootLayout;