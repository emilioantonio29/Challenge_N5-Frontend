import React, {useEffect} from 'react';
import CommonSpacer from '../../../components/common/spacer';
import '../../../pages/pages.scss';
import { useNavigate } from 'react-router-dom';
import PermissionsAllContainer from '../../../containers/permissions-all';

const HomeComponent = (props) => {

    const navigate = useNavigate();

    useEffect(()=>{

        //Mount: 
        if(props.redirect){
            navigate("/home")
        }

        return () =>{
        //Unmount
    
        }
    }, [])

    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "55vh", paddingTop: "50px"}} className='container'>
            <div className="jumbotron bg-light" style={{borderRadius: "20px", marginTop: "20px", minHeight: "20vh"}}>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h3 className="color-font-main" style={{alignText: "center", fontWeight: "bold"}}>Permission List</h3>
                    </div>
                    <CommonSpacer marginTop={"20px"}/>
                    <PermissionsAllContainer/>                    
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;