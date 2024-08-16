async function mcs() {
    const ipInput = document.getElementById('mcip').value;
    const motdapi = `https://mcapi.us/server/image?ip=${ipInput}`;

    document.getElementById('motd').src = motdapi;
    document.getElementById('ip').textContent = ipInput;
    
    try {
        const ipgo = document.getElementById('mcip').value;
        const url = `https://mcapi.us/server/status?ip=${ipgo}`;
        const serverInfoDiv = document.getElementById('serverInfo');
        const response = await fetch(url);
        const data = await response.json();
        if (data.online != true) {
            serverInfoDiv.innerHTML = `這是一個不在線或無效的伺服器`;
        } else{
            const now = data.players.now || 'N/A';
            const max = data.players.max || 'N/A';
            const name = data.server.name || 'N/A';
            const protocol = data.server.protocol || 'N/A';
            const error = data.error || 'N/A';

            serverInfoDiv.innerHTML = `
                伺服器玩家: ${now} / ${max}</br>
                伺服器核心: ${name}</br>
                伺服器核心版本: ${protocol}<br>
                錯誤: ${error}
            `;
        }
    } catch (error) {
        serverInfoDiv.innerHTML = `<p>錯誤: ${error.message}</p>`;
    }
};

mcs();

document.getElementById('mcip').addEventListener('input', mcs);