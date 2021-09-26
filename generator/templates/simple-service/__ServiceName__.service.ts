export interface DemoInput {
    foo: string;
}

export interface DemoOutput {
    bar: string;
}

export interface __ServiceName__ {
    demoMethod(input: DemoInput): Promise<DemoOutput>;
}
