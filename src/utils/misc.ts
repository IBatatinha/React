// Will return whether the current environment is in a regular browser
// and not CEF
export const isEnvBrowser = (): boolean => !(window as any).invokeNative

// Basic no operation function
export const noop = () => { }

export function formatToCurrency(value:number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value).replace(/\s+/g, '');
}