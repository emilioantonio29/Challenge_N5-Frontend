import React, { useState, useEffect } from "react";
import CommonLoader from "../../components/common/loader";
import { getPermissions } from "../../utils/hooks/general-axios";
import DrawerComponent from "../../components/user/bottom-drawer";
import PermissionTableComponent from "../../components/user/permission-table";

const PermissionsAllContainer = () => {
    const [loader, setLoader] = useState(false);
    const [permissions, setPermissions] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    const searchPermissions = async () => {
        setErrorMsg("");

        setLoader(true);

        let res = await getPermissions();

        if (res?.status == 200 && res.data) {
            setPermissions(res.data);
        } else if (res.response.status == 404) {
            setErrorMsg("• No se encontraron permisos.");
        } else {
            setErrorMsg("• Error inesperado.");
        }

        setLoader(false);
    };

    useEffect(() => {
        //Mount:
        searchPermissions();

        return () => {
        //Unmount
        };
    }, []);

  return (
    <>
        {loader ? 
            <CommonLoader/>
            :
            <>
                {permissions ?
                    <>
                        <PermissionTableComponent permissions={permissions}/>
                    </>
                    :
                    <h6 style={{color: "white", textAlign: "center"}}>{errorMsg}</h6>
                }
            </>
        }
    </>
  );
};

export default PermissionsAllContainer;
