import {controls} from "../../components/types";

const toolboxInToolbox: controls = {
    name: "share",
    icon: "share",
    variant: "outline-dark",
    hasLabels: false,
    list: [
        {
            name: "github",
            icon: "github"
        },
        {
            name: "twitter",
            icon: "twitter"
        },
        {
            name: "fb",
            icon: "facebook"
        },
    ]
}

export const toolboxContents: controls = {
    name: "tools",
    icon: "gear",
    hasLabels: true,
    list: [
        {
            name: "mail",
            icon: "envelope"
        },
        {
            name: "alert",
            icon: "bell"
        },
        toolboxInToolbox
    ]
}

export const simpleToolbox: controls = {
    name: "commands",
    list: [
        {
            name: "mail",
            icon: "envelope"
        },
        {
            name: "web",
            icon: "globe"
        },
        {
            name: "poweroff",
            icon: "power"
        }
    ]
}
