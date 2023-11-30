import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";

export interface ServiceArgs {
    resources: pulumi.Inputs
}

export class Service extends pulumi.ComponentResource {
    public readonly resources: k8s.core.v1.Service
    constructor(
        name: string,
        args: ServiceArgs,
        opts?: pulumi.ComponentResourceOptions,
    ) {
        super('empty:module:Service', name, {}, opts)
        for (var i in args.resources) {
            for (var j in args.resources[i].service) {
                this.resources = new k8s.core.v1.Service(args.resources[i].service[j].metadata.name,
                    {
                        metadata: args.resources[i].service[j].metadata || {},
                        spec: args.resources[i].service[j].spec || {}
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