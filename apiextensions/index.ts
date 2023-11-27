import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export { CustomResourceArgs } from "./customresource";
export type CustomResource = import("./customresource").CustomResource;
export const CustomResource: typeof import("./customresource").CustomResource = null as any;
utilities.lazyLoad(exports, ["CustomResource"], () => require("./customresource"));

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:k8s.apiextensions.CustomResource":
                return new CustomResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "apiextensions", _module)