/* eslint-disable */
// @ts-nocheck
import {
    __ServiceName__,
    DemoInput,
    DemoOutput,
} from 'services/__ServiceName__(kebabCase)/__ServiceName__(kebabCase).service';
import axios from 'axios';
import { useLocalSession } from 'auth/helpers/session.hooks';

export const useAPI__ServiceName__ = (): __ServiceName__ => {
    const [session] = useLocalSession();
    const demoMethod = async (input: DemoInput): Promise<DemoOutput> => {
        const response = await axios.get(process.env.REACT_APP_API_BASE_URL + '/demo', {
            headers: { Authorization: 'Bearer ' + session.token },
        });
        return response.data as DemoOutput;
    };

    return {
        demoMethod,
    };
};
