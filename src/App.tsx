import "./App.css";
import Header from "@/components/Header/header";
import Main from "@/components/Main/main";
import Footer from "@/components/Footer/footer";

import AppProviders from "@/context/appProviders";

function App() {
    return (
        <>
            <AppProviders>
                <Header />
                <Main />
                <Footer />
            </AppProviders>
        </>
    );
}

export default App;
