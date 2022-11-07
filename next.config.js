const commonConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost','cdn.sanity.io']
    }
};

const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase, {defaultConfig}) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            ...commonConfig,
            typescript: {
                tsconfigPath: 'tsconfig.dev.json'
            }
        }
    }

    return {
        /* config options for all phases except development here */
        ...commonConfig,
        typescript: {
            tsconfigPath: 'tsconfig.json'
        }
    }
}
