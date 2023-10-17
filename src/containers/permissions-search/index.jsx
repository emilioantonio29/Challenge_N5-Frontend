import React, { useState, useEffect } from "react";
import CommonLoader from "../../components/common/loader";
import { getPermissionsBySearchValue } from "../../utils/hooks/general-axios";
import PermissionTableComponent from "../../components/user/permission-table";

const PermissionsSearchContainer = () => {
    const [loader, setLoader] = useState(false);
    const [permissions, setPermissions] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const searchPermissions = async () => {
        setErrorMsg("");

        setLoader(true);

        let res = await getPermissionsBySearchValue(searchValue);

        if (res?.status == 200 && res.data) {
            setPermissions(res.data);
        } else if (res.response.status == 404) {
            setErrorMsg("• No se encontraron permisos.");
        } else {
            setErrorMsg("• Error inesperado.");
        }

        setLoader(false);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    }

    useEffect(() => {
        //Mount:

        setPermissions(null);

        if(searchValue){
            searchPermissions();
        }

        return () => {
        //Unmount
        };
    }, [searchValue]);

  return (
    <>

        <div style={{width: "100%", paddingBottom: "20px"}} className="d-flex justify-content-center">
            <input
                style={{width:"80%"}}
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Busqueda por Id o por nombre"
            />
        </div>
        {permissions ?
            <>
                <PermissionTableComponent permissions={permissions}/>
            </>
            :
            <h6 style={{color: "white", textAlign: "center"}}>{errorMsg}</h6>
        }

    </>
  );
};

export default PermissionsSearchContainer;
