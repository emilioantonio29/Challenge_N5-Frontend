import React, { useState, useEffect } from "react";
import CommonLoader from "../../components/common/loader";
import { getPermissions } from "../../utils/hooks/general-axios";
import DrawerComponent from "../../components/user/bottom-drawer";

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
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="w-10">#</th>
                                    <th scope="w-30">Name</th>
                                    <th scope="w-30">Lastname</th>
                                    <th scope="w-30">Detail</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {permissions.map((data, index)=>{
                                    return(
                                        <tr key={index}>
                                            <th scope="w-10">{data.id}</th>
                                            <th scope="w-30">{data.name}</th>
                                            <th scope="w-30">{data.lastname}</th>
                                            <th scope="w-30"><DrawerComponent permission={data}/></th>
                                        </tr>
                                    )})
                                }
                            </tbody>
                        </table>
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
