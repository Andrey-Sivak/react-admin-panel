import {useState, useRef, useEffect} from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {Link} from 'react-router-dom';
import {tokens} from "../../theme";
/** icons */
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({title, to, icon, selected, setSelected}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{color: colors.grey[100]}}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
        >
            <Typography variant="h6">{title}</Typography>
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const menuRef = useRef(null);
    const [selected, setSelected] = useState('Dashboard');

    const setInitialSelected = () => {
        const menu = menuRef.current;

        if (!menu) return;

        const currentPath = window.location.pathname || '/';
        const currentSelected = menu.querySelector(`a[href="${currentPath}"]`).innerText;
        setSelected(currentSelected);
    }

    // useEffect(setInitialSelected, []);

    return (
        <Box
            sx={{
                "& .ps-menuitem-root a:hover": {
                    color: '#868dfb !important',
                },
                "& .ps-sidebar-root": {
                    border: "none",
                },
                "& .ps-menu-button:hover": {
                    backgroundColor: "transparent !important",
                },
                "& .ps-menu-button.ps-active": {
                    color: '#6870fa !important',
                },
            }}
        >
            <ProSidebar
                collapsed={isCollapsed}
                backgroundColor={colors.primary[400]}
                style={{height: "100%"}}
                transitionDuration={300}
            >
                <Menu>
                    {/*  Logo and Menu icon  */}
                    <MenuItem
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/*  USER  */}
                    <Box mb="25px">
                        {!isCollapsed ? (
                            <>
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img
                                        alt="profile-user"
                                        width="100px"
                                        height="100px"
                                        src={`../../assets/user-profile.jpg`}
                                        style={{cursor: "pointer", borderRadius: "100%"}}
                                    />
                                </Box>

                                <Box textAlign="center">
                                    <Typography
                                        variant="h2"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{
                                            m: "10px 0 0 0"
                                        }}
                                    >
                                        Andrii Sivak
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color={colors.greenAccent[500]}
                                    >
                                        Web Developer
                                    </Typography>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img
                                        alt="profile-user"
                                        width="40px"
                                        height="40px"
                                        src={`../../assets/user-profile.jpg`}
                                        style={{cursor: "pointer", borderRadius: "100%"}}
                                    />
                                </Box>

                                <Box textAlign="center">
                                    <Typography
                                        variant="h3"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{
                                            m: "10px 0 0 0"
                                        }}
                                    >
                                        AS
                                    </Typography>
                                </Box>
                            </>
                        )}
                    </Box>

                    {/*  Menu Items  */}
                    <Box paddingLeft={isCollapsed ? null : "10%"} style={{paddingLeft: '0'}} ref={menuRef}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>

                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;