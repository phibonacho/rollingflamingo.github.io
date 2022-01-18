module.exports = {
    client: {
        service: {
            name: 'portfolio-service',
            url: process.env.REACT_APP_STRAPI_HOST,
            includes: 'src/**/*.tsx?',
        }
    }
};