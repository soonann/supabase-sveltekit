// src/routes/+layout.server.ts
import type { LayoutServerLoad, PageData } from './$types';

export const load: LayoutServerLoad = async ({ locals: { getSession } }): Promise<PageData> => {
    return {
        session: getSession()
    };
};
