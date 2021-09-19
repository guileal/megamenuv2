window.onload = () => {
    asyncExecute();
};

async function asyncExecute() {
    try {
        await createDynamicMegamenu();
    } catch (e) {
        // console.error(e);
        //possible function return error handler
    } finally {
        // controllMegamenuUI();
    }
}
