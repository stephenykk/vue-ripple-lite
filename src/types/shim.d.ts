declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        clog: (...args: any[]) => false;
    }
}

declare global {
    const clog: (...args: string[]) => false;
}


export { }
