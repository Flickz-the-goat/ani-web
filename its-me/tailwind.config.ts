import type {Config} from "tailwindcss";

const config: Config = {
    content: [
    ],
    theme:{
        extend:{
            colors:{
                background: "rgba(var(--background))",
                effect: "rgba(var(--effect))",
                effectText: "rgba(var(--effectText))",
            },
        }
    },
    plugins: [],
}