import {useState} from 'react';
import {ColorModeContext, useMode} from "./theme";
import Sidebar from "./sceens/global/Sidebar";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Team from "./sceens/team";
import Topbar from "./sceens/global/Topbar";
import Dashboard from "./sceens/dashboard";
import Contacts from "./sceens/contacts";
import Invoices from "./sceens/invoices";
import Form from "./sceens/form";
import Calendar from "./sceens/calendar";
import FAQ from "./sceens/FAQ";
import Bar from "./sceens/bar";
import Pie from "./sceens/pie";
import Line from "./sceens/line";
import Geography from "./sceens/geography";

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <BrowserRouter basename="/react-admin-panel">
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        <Sidebar isSidebar={isSidebar} />
                        <main className="content">
                            <Topbar setIsSidebar={setIsSidebar} />
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/contacts" element={<Contacts />} />
                                <Route path="/invoices" element={<Invoices />} />
                                <Route path="/form" element={<Form />} />
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/bar" element={<Bar />} />
                                <Route path="/pie" element={<Pie />} />
                                <Route path="/line" element={<Line />} />
                                <Route path="/geography" element={<Geography />} />
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </BrowserRouter>
    );
}

export default App;
