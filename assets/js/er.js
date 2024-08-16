async function convertCurrency() {
    const token = '這裡放exchangerate-api.com註冊過後的token,用來取得即時匯率'
    const url = `https://v6.exchangerate-api.com/v6/${token}/latest/TWD`
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const twdInput = document.getElementById('twd');
        const twdAmount = parseFloat(twdInput.value);

        const usdRate = data.conversion_rates.USD;
        const jpyRate = data.conversion_rates.JPY;
        const gbpRate = data.conversion_rates.GBP;
        const cnyRate = data.conversion_rates.CNY;
        const eurRate = data.conversion_rates.EUR;
        const hkdRate = data.conversion_rates.HKD;
        const krwRate = data.conversion_rates.KRW;
        const audRate = data.conversion_rates.AUD;
        const cadRate = data.conversion_rates.CAD;
        const chfRate = data.conversion_rates.CHF;
        const nzdRate = data.conversion_rates.NZD;
        const sekRate = data.conversion_rates.SEK;
        const sgdRate = data.conversion_rates.SGD;
        const nokRate = data.conversion_rates.NOK;
        const inrRate = data.conversion_rates.INR;
        const mxnRate = data.conversion_rates.MXN;
        const brlRate = data.conversion_rates.BRL;
        const zarRate = data.conversion_rates.ZAR;
        const rubRate = data.conversion_rates.RUB;
        const tryRate = data.conversion_rates.TRY;

        document.getElementById('usd').textContent = (twdAmount * usdRate).toFixed(2);
        document.getElementById('jpy').textContent = (twdAmount * jpyRate).toFixed(2);
        document.getElementById('gbp').textContent = (twdAmount * gbpRate).toFixed(2);
        document.getElementById('cny').textContent = (twdAmount * cnyRate).toFixed(2);
        document.getElementById('eur').textContent = (twdAmount * eurRate).toFixed(2);
        document.getElementById('hkd').textContent = (twdAmount * hkdRate).toFixed(2);
        document.getElementById('krw').textContent = (twdAmount * krwRate).toFixed(2);
        document.getElementById('aud').textContent = (twdAmount * audRate).toFixed(2);
        document.getElementById('cad').textContent = (twdAmount * cadRate).toFixed(2);
        document.getElementById('chf').textContent = (twdAmount * chfRate).toFixed(2);
        document.getElementById('nzd').textContent = (twdAmount * nzdRate).toFixed(2);
        document.getElementById('sek').textContent = (twdAmount * sekRate).toFixed(2);
        document.getElementById('sgd').textContent = (twdAmount * sgdRate).toFixed(2);
        document.getElementById('nok').textContent = (twdAmount * nokRate).toFixed(2);
        document.getElementById('inr').textContent = (twdAmount * inrRate).toFixed(2);
        document.getElementById('mxn').textContent = (twdAmount * mxnRate).toFixed(2);
        document.getElementById('brl').textContent = (twdAmount * brlRate).toFixed(2);
        document.getElementById('zar').textContent = (twdAmount * zarRate).toFixed(2);
        document.getElementById('rub').textContent = (twdAmount * rubRate).toFixed(2);
        document.getElementById('try').textContent = (twdAmount * tryRate).toFixed(2);

        const utcDateStr = data.time_last_update_utc;
        const utcDate = new Date(utcDateStr);
        const localDate = new Date(utcDate.getTime() + 8 * 60 * 60 * 1000);
        
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            timeZoneName: 'short' 
        };
        const formattedDate = localDate.toLocaleString('zh-TW', options);

        document.getElementById('last-updated').textContent = formattedDate;
    } catch (error) {
        console.error('請聯繫開發者，發生錯誤:', error);
        alert('取得匯率時出錯. 請稍後再試.');
    }
}

convertCurrency();

document.getElementById('twd').addEventListener('input', convertCurrency);