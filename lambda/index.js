exports.handler = async (event) => {
    let myParam = event.myParam;
    return {
        statusCode: 200,
        body: JSON.stringify(myParam)
    };
};