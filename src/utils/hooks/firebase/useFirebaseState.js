import { useEffect } from "react";
import { useObjectVal } from "react-firebase-hooks/database";
import deepEqual from "deep-equal";
import { getDatabaseRef } from "utils";

export default (refPath, state, setState, sync = true, initialState = {}) => {
    const ref = getDatabaseRef(refPath);
    const [value, loading, error] = useObjectVal(ref);
    useEffect(() => {
        const v = value || initialState;
        sync && !loading && !deepEqual(v, state) && setState(v);
    }, [value, sync, loading, setState, state, initialState]);
    return [loading, error];
};
