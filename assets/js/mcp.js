async function mcp() {
    const idInput = document.getElementById('mcid').value;
    const hardapi = `https://minotar.net/helm/${idInput}/100.png`;
    const skinapi = `https://minotar.net/body/${idInput}/100.png`;

    document.getElementById('hard').src = hardapi;
    document.getElementById('skin').src = skinapi;
    document.getElementById('name').textContent = idInput;
    
    try {
        const playername = document.getElementById('mcid').value;
        const url = `https://api.ashcon.app/mojang/v2/user/${playername}`;
        const playerInfoDiv = document.getElementById('playerInfo');
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('這不是一個真實的玩家');
        }
        const data = await response.json();

        const uuid = data.uuid || 'N/A';
        const oldname = data.username_history.map(user => user.username).join(', ') || 'N/A';
        const createdutc = data.created_at || 'N/A';

        playerInfoDiv.innerHTML = `
            UUID: ${uuid}</br>
            歷史名稱: ${oldname}</br>
            帳號創建日期: ${createdutc}
        `;
    } catch (error) {
        playerInfoDiv.innerHTML = `錯誤: ${error.message}`;
    }
};

mcp();

document.getElementById('mcid').addEventListener('input', mcp);