import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export { ConfigFileArgs } from "./configfile";
export type ConfigFile = import("./configfile").ConfigFile;
export const ConfigFile: typeof import("./configfile").ConfigFile = null as any;
utilities.lazyLoad(exports, ["ConfigFile"], () => require("./configfile"));

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:yaml.ConfigFile":
                return new ConfigFile(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "yaml", _module)