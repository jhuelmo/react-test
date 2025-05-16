import "./App.css";
import Header from "@/components/Header/header";
import Main from "@/components/Main/main";
import AppProviders from "@/context/appProviders";

function App() {
    return (
        <>
            <AppProviders>
                <Header />
                <Main />
            </AppProviders>
        </>
    );
}

export default App;
