import React, {useState, useContext, useEffect} from "react";
import { emailValidator } from "../../utils/hooks/regex-validator";
import './containers-update.scss';
import { UserGlobalContextMemorySpace } from "../../contexts/user-context";
import CommonSpacer from "../../components/common/spacer";
import { getPermissionTypes, updatePermission } from "../../utils/hooks/general-axios";
import Overlay from "../../components/common/overlay";
import Swal from "sweetalert2";


const UpdatePermissionContainer = ({permission}) => {

    const {fireSearch, setFireSearch} = useContext(UserGlobalContextMemorySpace);
    const [selectedOption, setSelectedOption] = useState(null);
    const [data, setData] = useState([{id:1}, {id:2}]);

    const [loader, setLoader] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [name, setName] = useState(permission.name);
    const [lastname, setLastname] = useState(permission.lastname);
    const [permissionTypeId, setPermissionTypeId] = useState(permission.permissionTypeId);
    const [id, setId] = useState(permission.id)

    const handleUpdate = async (event) =>{
        event.preventDefault();
        setErrorMsg("");

        if(!name || !lastname || !permissionTypeId){
            setErrorMsg("• Por favor ingresa los datos solicitados.")
        }else{
            setLoader(true);

            let res = await updatePermission(id, name, lastname, permissionTypeId);

            if(res?.status == 201 && res.data){

                setFireSearch(!fireSearch);
                
                Swal.fire({
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 2500
                })

            }else if(res.response.status == 404){

                Swal.fire({
                    title: 'Ops!',
                    text: "This permission type isn't available. Please try another",
                    icon: 'warning',
                    // showCancelButton: true,
                    cancelButtonColor: '#d33',
                })

            }else{

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })

            }

            setLoader(false);
        }


    }

    const handleInputChange = (e) => {

        const value = e.target.value;
    
        if (/^\d*$/.test(value)) {
          setPermissionTypeId(value);
        }

    };

    useEffect(()=>{

        return () =>{
        //Unmount
    
        }
    }, [])

    return (  
        <>
            {loader? <Overlay/> : null}
            
            <div className="d-flex flex-column" style={{width: "100%"}}>
                <div className="card" style={{width: "100%"}}>
                    <div className="d-flex flex-column">
                        <form className="d-flex flex-column justify-content-center form-login" onSubmit={handleUpdate}>
                            <CommonSpacer marginTop={"20px"}/>
                            <div className="form-group form-group-login d-flex justify-content-center" >
                                <input 
                                    style={{width: "90%"}}
                                    onChange={(e)=> setName(e.target.value)} value={name}
                                    type="text" 
                                    className="form-control input-login" 
                                    placeholder="Name"/>
                            </div>
                            <CommonSpacer marginBottom="20px"/>
                            <div className="form-group form-group-login d-flex justify-content-center">
                                <input 
                                    style={{width: "90%"}}
                                    onChange={(e)=> setLastname(e.target.value)} value={lastname}
                                    type="text" 
                                    className="form-control input-login" 
                                    placeholder="Lastname"/>
                            </div>
                            <CommonSpacer marginBottom="20px"/>
                            <div className="form-group form-group-login d-flex justify-content-center">
                                <input 
                                    style={{width: "90%"}}
                                    onChange={handleInputChange}
                                    value={permissionTypeId}
                                    type="text" 
                                    className="form-control input-login" 
                                    placeholder="Permission Type Id"/>
                            </div>
                            <CommonSpacer marginBottom="20px"/>
                            {loader ? 
                            <>
                                <button className="btn">
                                    <span className="spinner-grow spinner-grow-sm"></span>
                                    <span className="spinner-grow spinner-grow-sm"></span>
                                    <span className="spinner-grow spinner-grow-sm"></span>
                                </button>
                            </> 
                            : 
                            <>
                                <div className="form-group form-group-login d-flex justify-content-center">
                                    <input 
                                        style={{width: "90%"}}
                                        type="submit" className="btn btn-primary input-login input-submit" value="Continuar"/>
                                </div>
                            </>
                            }
                            <CommonSpacer marginBottom="20px"/>
                        </form>
                    </div>
                    <div className="input-login">
                        <CommonSpacer marginBottom="20px"/>
                        <p style={{textAlign:"center"}} className="fontColorMain">{errorMsg}</p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default UpdatePermissionContainer;
