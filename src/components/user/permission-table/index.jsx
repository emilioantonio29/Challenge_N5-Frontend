import React, {useContext} from 'react';
import DrawerComponent from '../bottom-drawer';

const PermissionTableComponent = (props) => {

    return (
        <>
            {props.permissions?
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="w-10">#</th>
                            <th scope="w-30">Name</th>
                            <th scope="w-30">Lastname</th>
                            <th scope="w-30">&nbsp; Detail</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {props.permissions.map((data, index)=>{
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
            :
            null}
        </>
    );
}

export default PermissionTableComponent;