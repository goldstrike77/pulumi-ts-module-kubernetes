import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

export { StorageClassArgs } from "./storageclass";
export type StorageClass = import("./storageclass").StorageClass;
export const StorageClass: typeof import("./storageclass").StorageClass = null as any;
utilities.lazyLoad(exports, ["StorageClass"], () => require("./storageclass"));

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:storage.k8s.io/v1:StorageClass":
                return new StorageClass(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("kubernetes", "storage.k8s.io/v1", _module)