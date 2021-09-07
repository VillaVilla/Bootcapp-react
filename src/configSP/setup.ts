import { SPFetchClient } from "@pnp/nodejs";
import { sp } from "@pnp/sp/presets/all";

export const configSP = () => {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient(
                    'https://devfvg.sharepoint.com/sites/EstebanVillaPortalPublicacion',
                    '3de9aa34-7fbf-4201-afc5-b1448d4dc33c',
                    'D/6vvY/0/bCggYFYCf8TNHrbN8UIL0/2UU4cBn4R5Gw='
                )
            },
        },
    });
}
