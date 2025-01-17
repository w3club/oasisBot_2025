import { readToken, delay } from "./utils/file.js";
import { createConnection } from "./utils/websocket.js";
import { showBanner } from "./utils/banner.js";
import { logger } from "./utils/logger.js";

async function start() {
    showBanner()
    const tokens = await readToken("providers.txt");
    const proxies = await readToken("proxy.txt");
    
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const proxy = proxies[i]; 

        await createConnection(token, proxy);
        await delay(5000);
    }
}

start();
