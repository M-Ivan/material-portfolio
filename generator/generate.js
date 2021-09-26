// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateTemplateFiles, CaseConverterEnum } = require('generate-template-files');
// eslint-disable-next-line @typescript-eslint/no-var-requires
var exec = require('child_process').exec;

const lintOnComplete = async (results) => {
    await new Promise((res) => {
        const files = results.output.files.join(' ');
        console.log('Service created, running linter...');
        exec('eslint --fix ' + files, function () {
            res();
        });
    });
};

const baseDynamicReplacers = [
    { slot: '/* eslint-disable */', slotValue: '' },
    { slot: '// @ts-nocheck', slotValue: '' },
];

generateTemplateFiles([
    {
        option: 'Create simple fragment',
        defaultCase: CaseConverterEnum.PascalCase,
        entry: {
            folderPath: './generator/templates/simple-fragment/',
        },
        stringReplacers: [{ question: 'Insert fragment name', slot: '__FragmentName__' }],
        dynamicReplacers: baseDynamicReplacers,
        output: {
            path: './src/fragments/__FragmentName__',
            pathAndFileNameDefaultCase: CaseConverterEnum.KebabCase,
            overwrite: true,
        },
        onComplete: lintOnComplete,
    },
    {
        option: 'Create simple component',
        defaultCase: CaseConverterEnum.PascalCase,
        entry: {
            folderPath: './generator/templates/simple-component/',
        },
        stringReplacers: [{ question: 'Insert component name', slot: '__ComponentName__' }],
        dynamicReplacers: baseDynamicReplacers,
        output: {
            path: './src/components/__ComponentName__',
            pathAndFileNameDefaultCase: CaseConverterEnum.KebabCase,
            overwrite: true,
        },
        onComplete: lintOnComplete,
    },
    {
        option: 'Create simple service',
        defaultCase: CaseConverterEnum.PascalCase,
        entry: {
            folderPath: './generator/templates/simple-service/',
        },
        stringReplacers: [{ question: 'Insert service name', slot: '__ServiceName__' }],
        dynamicReplacers: baseDynamicReplacers,
        output: {
            path: './src/services/__ServiceName__',
            pathAndFileNameDefaultCase: CaseConverterEnum.KebabCase,
            overwrite: true,
        },
        onComplete: lintOnComplete,
    },
]).finally();
