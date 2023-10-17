import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

export default function DrawerComponent(props) {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {

        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            {["bottom"].map((anchor) => (
                <React.Fragment key={anchor}>
                <button
                    onClick={toggleDrawer(anchor, true)}
                    className="btn"
                    style={{backgroundColor: "#000d4e", color: "white"}}
                >
                    Detalle
                </button>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    <div style={{ display: "flex", flexDirection: "column", minHeight: "90vh",}} className="container">
                        <Divider style={{ marginTop: "30px" }}>
                            <button className="btn btn-actions" onClick={toggleDrawer(anchor, false)}>
                                <span style={{ fontWeight: "bold" }}>VOLVER</span>
                            </button>
                        </Divider>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                              
                            <path
                            fill="#000d4e"
                            fillOpacity="1"
                            d="M0,96L480,160L960,96L1440,128L1440,0L960,0L480,0L0,0Z"
                            ></path>
                        </svg>

                        <div>

                        </div>

                    </div>
                </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
