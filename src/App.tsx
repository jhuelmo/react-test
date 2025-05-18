import "./App.css";
import Header from "@/components/Header/header";
import MainLayout from "@/components/Main/mainLayout";
import Footer from "@/components/Footer/footer";

import AppProviders from "@/context/appProviders";

function App() {
    return (
        <>
            <AppProviders>
                <Header />
                <MainLayout />
                <Footer />
            </AppProviders>
        </>
    );
}

export default App;
