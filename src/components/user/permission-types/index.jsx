import React, {useContext} from 'react';
import '../../../pages/pages.scss';
import CommonSpacer from '../../common/spacer';

const PermissionTypesComponent = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "55vh", paddingTop: "50px"}} className='container'>
            <div className="jumbotron bg-light" style={{borderRadius: "20px", marginTop: "20px", minHeight: "20vh"}}>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h3 className="color-font-main" style={{alignText: "center", fontWeight: "bold"}}>Permission Search</h3>
                    </div>
                    <CommonSpacer marginTop={"20px"}/>
                    <h3 className="color-font-main" style={{alignText: "left", fontWeight: "bold"}}>Not Implemented</h3>
                </div>
            </div>
        </div>
    );
}

export default PermissionTypesComponent;