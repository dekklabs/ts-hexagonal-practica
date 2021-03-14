import { useEffect, useState } from "react";
import domain from "../@domain";

export type StatusType = "idle" | "pending" | "success" | "error";
export type DomainType = typeof domain;
export type RunType = (domain: DomainType) => Promise<any>;

interface IUseDomain {
    initRun?: RunType,
    initState?: any
}

const useDomain = ({initRun, initState = null } : IUseDomain = {}) => {
    const [data, setData] = useState(initState);
    const [status, setStatus] = useState<StatusType>("idle");
    const [error, setError] = useState<any>(null);

    const executeUseCase = async (run:RunType) => {
        let response = null;
        let error = null;
        setStatus("pending");
        setError(null);

        try {
            response = await run(domain);
            if (response) {
                setData(response);
                setStatus("success");
            } else {
                error = "error";
                setStatus("error");
                setError("error");
            }
        } catch (e) {
            setStatus("error");
            setError(e);
            error = e;
        }

        return {data:response, error: error};
    }

    useEffect(() => {
        if (initRun) executeUseCase(initRun);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const clearError = (newState?:any) => {
        setStatus("idle");
        setError(null);
        setData(newState);
    }

    return {
        isIdle: status === "idle",
        isLoading: status === "pending",
        isError: status === "error",
        isSuccess: status === "success",
        status,
        error,
        data,
        run: executeUseCase,
        clearError
    };
};

export default useDomain;