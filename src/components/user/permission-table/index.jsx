import React, {useContext} from 'react';
import DrawerComponent from '../bottom-drawer';

const PermissionTableComponent = (props) => {

    return (
        <>
            {props.permissions?
                <table className="">
                    <thead>
                        <tr>
                            <td scope="">
                                <h5 className="color-font-main" style={{alignText: "center", fontWeight: "bold"}}>#</h5>
                            </td>
                            <td scope="">
                                <h5 className="color-font-main" style={{alignText: "center", fontWeight: "bold"}}>Name</h5>
                            </td>
                            <td scope="">
                                <h5 className="color-font-main" style={{alignText: "center", fontWeight: "bold"}}>Lastname</h5>
                            </td>
                            <td scope="">
                                <h5 className="color-font-main" style={{alignText: "center", fontWeight: "bold"}}>Action</h5>
                            </td>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {props.permissions.map((data, index)=>{
                            return(
                                <tr key={index}>
                                    <td scope="">{data.id}</td>
                                    <td scope="">{data.name}</td>
                                    <td scope="">{data.lastname}</td>
                                    <td scope=""><DrawerComponent permission={data}/></td>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>
            :
            null}
        </>
    );
}

export default PermissionTableComponent;