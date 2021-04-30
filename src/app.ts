import { createServer } from './utils/server'

async function runApplication() {
    try {
        const server = await createServer();
        const port = 3000;
        server.listen(port, () =>{
            console.info(`Listening on http://localhost:${port}`)
        });    
    } catch (error) {
        throw error;
    }
}

runApplication();