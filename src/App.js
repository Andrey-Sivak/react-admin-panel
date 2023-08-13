import {ColorModeContext, useMode} from "./theme";
import Sidebar from "./sceens/global/Sidebar";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./sceens/global/Topbar";

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                        <Topbar />
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
