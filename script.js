function calculateGrade() {
    const grade = parseInt(document.getElementById('grade').value);
    let result = '';

    if (grade >= 90 && grade <= 100) {
        result = 'A';
    } else if (grade >= 80 && grade <= 89) {
        result = 'B';
    } else if (grade >= 70 && grade <= 79) {
        result = 'C';
    } else if (grade >= 60 && grade <= 69) {
        result = 'D';
    } else if (grade < 60) {
        result = 'F';
    } else {
        result = 'Noto\'g\'ri baho kiritildi';
    }

    document.getElementById('gradeResult').textContent = `Baho: ${result}`;
}

function checkTemperature() {
    const temp = parseInt(document.getElementById('temperature').value);
    let result = '';

    if (temp < 0) {
        result = 'Muzlayapti';
    } else if (temp >= 0 && temp <= 10) {
        result = 'Juda sovuq';
    } else if (temp >= 11 && temp <= 20) {
        result = 'Sovuq';
    } else if (temp >= 21 && temp <= 30) {
        result = 'Issiq';
    } else {
        result = 'Juda issiq';
    }

    document.getElementById('temperatureResult').textContent = result;
}

function getWeekday() {
    const day = parseInt(document.getElementById('weekday').value);
    const weekdays = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];
    
    if (day >= 1 && day <= 7) {
        document.getElementById('weekdayResult').textContent = weekdays[day - 1];
    } else {
        document.getElementById('weekdayResult').textContent = 'Noto\'g\'ri kun raqami kiritildi';
    }
}

function calculateTaxiFare() {
    const distance = parseFloat(document.getElementById('distance').value);
    let fare = 0;

    if (distance <= 3) {
        fare = 10000;
    } else if (distance > 3 && distance <= 10) {
        fare = 10000 + (distance - 3) * 2000;
    } else {
        fare = 25000 + (distance - 10) * 1500;
    }

    document.getElementById('taxiFareResult').textContent = `Taksi narxi: ${fare.toFixed(0)} so'm`;
}

function calculateInternetTraffic() {
    const traffic = parseFloat(document.getElementById('traffic').value);
    let cost = 0;

    if (traffic <= 1) {
        cost = 5000;
    } else if (traffic > 1 && traffic <= 5) {
        cost = traffic * 4000;
    } else {
        cost = traffic * 3000;
    }

    document.getElementById('trafficResult').textContent = `Internet trafigi narxi: ${cost.toFixed(0)} so'm`;
}

function getSeason() {
    const month = document.getElementById('month').value.toLowerCase();
    let season = '';

    switch (month) {
        case 'mart':
        case 'aprel':
        case 'may':
            season = 'Bahor';
            break;
        case 'iyun':
        case 'iyul':
        case 'avgust':
            season = 'Yoz';
            break;
        case 'sentyabr':
        case 'oktyabr':
        case 'noyabr':
            season = 'Kuz';
            break;
        case 'dekabr':
        case 'yanvar':
        case 'fevral':
            season = 'Qish';
            break;
        default:
            season = 'Noto\'g\'ri oy kiritildi';
    }

    document.getElementById('seasonResult').textContent = `Fasl: ${season}`;
}

