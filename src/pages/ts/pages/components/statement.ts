export interface OnlyOptions {
    name: string
    age?: number
}

export function fn(option: OnlyOptions): string {
    return `${option.name}：${option.age}`;
}