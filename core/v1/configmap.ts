import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";

export interface ConfigMapArgs {
    resources: pulumi.Inputs
}

export class ConfigMap extends pulumi.ComponentResource {
    public readonly resources: k8s.core.v1.ConfigMap
    constructor(
        name: string,
        args: ConfigMapArgs,
        opts?: pulumi.ComponentResourceOptions,
    ) {
        super('empty:module:ConfigMap', name, {}, opts)
        for (var i in args.resources) {
            for (var j in args.resources[i].configmap) {
                this.resources = new k8s.core.v1.ConfigMap(args.resources[i].configmap[j].metadata.name,
                    {
                        binaryData: args.resources[i].configmap[j].binaryData || {},
                        data: args.resources[i].configmap[j].data || {},
                        immutable: args.resources[i].configmap[j].immutable || false,
                        metadata: args.resources[i].configmap[j].metadata
                    },
                    {
                        parent: this,
                        protect: opts?.protect,
                        dependsOn: opts?.dependsOn
                    }
                )
            }
        }
    }
}