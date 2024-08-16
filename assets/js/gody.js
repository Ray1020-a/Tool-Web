async function catinfo() {
    const mcsip = "這裡放要監控的伺服器IP";

    const serverapi = `https://api.mcsrvstat.us/3/${mcsip}`;
    const iconapi = `https://api.mcsrvstat.us/icon/${mcsip}`;
    const motdapi = `https://mcapi.us/server/image?ip=${mcsip}`;

    document.getElementById('motd').src = motdapi;
    document.getElementById('icon').src = iconapi;

    try {
        const response = await fetch(serverapi);
        if (!response.ok) {
            throw new Error('網路可能出了問題');
        }
        const data = await response.json();
        console.log(data.online);

        if (data.online = true) {
            document.getElementById('online').textContent = '在線' || 'N/A';
        } else {
            document.getElementById('online').textContent = '不在線' || 'N/A';
        }

        document.getElementById('player').textContent = data.players.online + ' 人' || 'N/A';
        document.getElementById('mcsip').textContent = mcsip || 'N/A';
        document.getElementById('maxplayer').textContent = data.players.max + ' 人' || 'N/A';
        document.getElementById('version').textContent = data.version || 'N/A';

    } catch (error) {
        console.error('請聯繫開發者，發生錯誤:', error);
        alert('取得資訊時出錯. 伺服器可能不在線');

        document.getElementById('online').textContent = 'Error';
        document.getElementById('player').textContent = 'Error';
        document.getElementById('mcsip').textContent = 'Error';
        document.getElementById('maxplayer').textContent = 'Error';
        document.getElementById('version').textContent = 'Error';
    }
};

catinfo();