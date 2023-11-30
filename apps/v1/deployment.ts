import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";

export interface DeploymentArgs {
    resources: pulumi.Inputs
}

export class Deployment extends pulumi.ComponentResource {
    public readonly resources: k8s.apps.v1.Deployment
    constructor(
        name: string,
        args: DeploymentArgs,
        opts?: pulumi.ComponentResourceOptions,
    ) {
        super('empty:module:Deployment', name, {}, opts)
        for (var i in args.resources) {
            for (var j in args.resources[i].deployment) {
                this.resources = new k8s.apps.v1.Deployment(args.resources[i].deployment[j].metadata.name,
                    {
                        metadata: args.resources[i].deployment[j].metadata || {},
                        spec: args.resources[i].deployment[j].spec || {}
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