import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import CommonSpacer from "../../common/spacer";
import Collapse from "@mui/material/Collapse";
import UpdatePermissionContainer from "../../../containers/update-permission";

export default function DrawerComponent(props) {

    const [formatDate, setFormatDate] = React.useState(null);
    const [collapse, setCollapse] = React.useState(false);

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

    React.useEffect(()=>{

        //Mount: 
        let propDate = new Date(props.permission.date);
        let day = propDate.getDate();
        let month = propDate.getMonth() + 1;
        let year = propDate.getFullYear();

        setFormatDate(`${day}-${month}-${year}`)

        return () =>{
        //Unmount
    
        }
    }, [])

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
                    <div style={{ display: "flex", flexDirection: "column", minHeight: "88vh",}} className="container">
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

                        <div className="d-flex justify-content-center" style={{width: "100%"}}>
                            <div className="card" style={{width: "70%"}}>
                                <div className="card-header">
                                    User #{props.permission.id}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{props.permission.name}</h5>
                                    <h5 className="card-title">{props.permission.lastname}</h5>
                                    <h5 className="">Creation Date: {formatDate}</h5>
                                    <h5 className="">Permission Id: {props.permission.permissionTypeId}</h5>
                                    <CommonSpacer marginTop={"20px"}/>
                                    <div className="d-flex justify-content-center">
                                        <button onClick={()=>setCollapse(!collapse)} 
                                            className="btn" 
                                            style={{backgroundColor: "#000d4e", color: "white"}}
                                        >
                                            {!collapse ? <>Actualizar</> : <>Volver</>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CommonSpacer marginTop={"20px"}/>

                        <Collapse in={collapse}>
                            <hr size="8px"/>
                            <CommonSpacer marginTop={"35px"}/>



                            <div className="d-flex justify-content-center" style={{width: "100%"}}>
                                <div style={{width: "70%"}}>
                                    <UpdatePermissionContainer permission={props.permission}/>

                                </div>
                            </div>
                        </Collapse>

                    </div>
                </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
