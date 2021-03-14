import { useEffect, useState } from "react";
import useDomain from "../../../hooks/useDomain";
import User from "../entities/User";

interface IResponse {
    data: any;
    error:any;
}

const useGetListUser = () => {
    const {run} = useDomain();

    const [usuarios, setUsuarios] = useState<User[]>();

    useEffect(() => {
        getuser().then(response => {
            setUsuarios(response.data);
        })
    // eslint-disable-next-line
    }, []);

    const getuser = async () :Promise<IResponse> => {
        const response :IResponse = await run((domain) => domain.get_list_user_use_case.execute());
        return response;
    }

    return {
        usuarios
    }
}

export default useGetListUser;