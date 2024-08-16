async function fetchIpInfo() {
    const token = '這裡放ipinfo.io註冊過後的token,用來取得IP資訊'
    const ipInput = document.getElementById('ip').value;
    const url = `https://ipinfo.io/${ipInput}?token=${token}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('網路可能出了問題');
        }
        const data = await response.json();

        document.getElementById('ip-info').textContent = data.ip || 'N/A';
        document.getElementById('country-info').textContent = data.region || 'N/A';
        document.getElementById('city-info').textContent = data.city || 'N/A';
        document.getElementById('timezone-info').textContent = data.timezone || 'N/A';
        document.getElementById('isp-info').textContent = data.org || 'N/A';
        document.getElementById('hostname-info').textContent = data.hostname || 'N/A';
    } catch (error) {
        console.error('請聯繫開發者，發生錯誤:', error);
        alert('取得IP資訊時出錯. 請稍後再試.');
        
        document.getElementById('ip-info').textContent = 'Error';
        document.getElementById('country-info').textContent = 'Error';
        document.getElementById('city-info').textContent = 'Error';
        document.getElementById('timezone-info').textContent = 'Error';
        document.getElementById('isp-info').textContent = 'Error';
        document.getElementById('hostname-info').textContent = 'Error';
    }
}

fetchIpInfo();