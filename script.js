document.addEventListener('DOMContentLoaded', function () {
    // 获取按钮和内容区域的引用
    const openStoreButton = document.getElementById('openStoreButton');
    const cashCountButton = document.getElementById('cashCountButton');
    const content = document.getElementById('content');

    if (!openStoreButton || !cashCountButton || !content) {
        console.error('Kasse Calculator: Required elements not found.');
        return;
    }

    // 页面切换函数
    function showOpenStorePage() {
        content.innerHTML = `
        <div id="openStorePage">
            <h3>1. 開店金額 / Anfangsbestand</h3>
            <table id="cashTable">
                <tr>
                    <th>數量/Anzahl</th>
                    <th>面額/Betrag</th>
                    <th>金額/Summe</th>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="quantity0" value="4"></td>
                    <td>€20.00</td>
                    <td id="amount0">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="quantity1" value="4"></td>
                    <td>€10.00</td>
                    <td id="amount1">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="quantity2" value="4"></td>
                    <td>€5.00</td>
                    <td id="amount2">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="quantity3"></td>
                    <td>€2.00</td>
                    <td id="amount3">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="quantity4"></td>
                    <td>€1.00</td>
                    <td id="amount4">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="quantity5"></td>
                    <td>€0.50</td>
                    <td id="amount5">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="quantity6"></td>
                    <td>€0.20</td>
                    <td id="amount6">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="quantity7"></td>
                    <td>€0.10</td>
                    <td id="amount7">0</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>總額/Total</strong></td>
                    <td id="totalAmount">0</td>
                </tr>
            </table>
            <button id="calculateButton">Calculate</button>
        </div>
    `;

        // 计算按钮的点击事件监听
        const calculateButton = document.getElementById('calculateButton');
        if (calculateButton) {
            calculateButton.addEventListener('click', calculateAmount);
        }
    }

    // 页面切换函数 - 显示Kasse清点页面
    function showCashCountPage() {
        content.innerHTML = `
        <div id="cashCountPage">
            <h3>3. Kasse 現金清點 / Zählprotokoll</h3>
            <table id="cashCountTable">
                <tr>
                    <th>數量/Anzahl</th>
                    <th>面額/Betrag</th>
                    <th>金額/Summe</th>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count0"></td>
                    <td>€100.00</td>
                    <td id="cashCountAmount0">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count1"></td>
                    <td>€50.00</td>
                    <td id="cashCountAmount1">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count2"></td>
                    <td>€20.00</td>
                    <td id="cashCountAmount2">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count3"></td>
                    <td>€10.00</td>
                    <td id="cashCountAmount3">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count4"></td>
                    <td>€5.00</td>
                    <td id="cashCountAmount4">0</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Scheine Gesamt</strong></td>
                    <td id="totalAmountScheine">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count5"></td>
                    <td>€2.00</td>
                    <td id="cashCountAmount5">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count6"></td>
                    <td>€1.00</td>
                    <td id="cashCountAmount6">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count7"></td>
                    <td>€0.50</td>
                    <td id="cashCountAmount7">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count8"></td>
                    <td>€0.20</td>
                    <td id="cashCountAmount8">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count9"></td>
                    <td>€0.10</td>
                    <td id="cashCountAmount9">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count10"></td>
                    <td>€0.05</td>
                    <td id="cashCountAmount10">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count11"></td>
                    <td>€0.02</td>
                    <td id="cashCountAmount11">0</td>
                </tr>
                <tr>
                    <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="count12"></td>
                    <td>€0.01</td>
                    <td id="cashCountAmount12">0</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Münzen-Gesamt</strong></td>
                    <td id="totalAmountMunzen">0</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>總額/Total</strong></td>
                    <td id="kassenIstBestand">0</td>
                </tr>
            </table>
            <button id="calculateCashCountButton">3. Calculate</button>
            <div>Tips: you can also use this to calculate "Kassenbericht Zählprotokoll".
            <hr>
            <div>
                <label for="initialAmount">起始金額/Anfangsbestand:</label>
                <input type="number" inputmode="decimal" id="initialAmount">
            </div>
            <div>
                <label for="dailySales">當日現金營業額/Bar Umsatz:</label>
                <input type="number" inputmode="decimal" id="dailySales">
            </div>
            <br>
            <button id="calculateFinalAmount">4. Calculate</button>
            <div id="finalAmountResult"></div>

            <!-- 差额/Diff -->
            <p id="diff">差額/Diff: €0.00</p>

            <!-- 總計/Total -->
            <p id="total">總計/Total: €0.00</p>

            <hr>
            <h3>7. 結帳後留在Kasse機內的金額<br>verbleibendes Wechselgeld</h3>
            <div id="newTableContainer"></div>
        </div>
    `;

        const calculateCashCountButton = document.getElementById('calculateCashCountButton');
        if (calculateCashCountButton) {
            calculateCashCountButton.addEventListener('click', calculateCashCount);
        }

        const calculateFinalAmount = document.getElementById('calculateFinalAmount');
        if (calculateFinalAmount) {
            calculateFinalAmount.addEventListener('click', calculateFinalCashAmount);
        }
    }

    // 计算函数 - 开店金額
    function calculateAmount() {
        const quantities = document.querySelectorAll('#cashTable input[type="number"]');
        const amounts = document.querySelectorAll('#cashTable td[id^="amount"]');
        const totalAmountCell = document.getElementById('totalAmount');

        let totalAmount = 0;
        let isValid = true;

        quantities.forEach((input, i) => {
            let value = input.value.trim();

            if (value === '') {
                input.value = '0';
                value = '0';
            }

            if (!Number.isInteger(parseFloat(value)) || parseFloat(value) < 0) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }

            const quantity = parseFloat(value);
            const faceValue = parseFloat(amounts[i].previousElementSibling.textContent.replace('€', ''));
            const lineAmount = quantity * faceValue;
            amounts[i].textContent = lineAmount.toFixed(2);
            totalAmount += lineAmount;
        });

        if (isValid) {
            totalAmountCell.textContent = totalAmount.toFixed(2);
        }
    }

    // 计算函数 - Kasse清点
    function calculateCashCount() {
        let isValid = true;
        const quantities = document.querySelectorAll('#cashCountTable input[type="number"]');

        quantities.forEach(input => {
            let value = input.value.trim();

            if (value === '') {
                input.value = '0';
                value = '0';
            }

            if (!Number.isInteger(parseFloat(value)) || parseFloat(value) < 0) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        if (!isValid) {
            return;
        }
        const amounts = document.querySelectorAll('#cashCountTable td[id^="cashCountAmount"]');
        const totalAmountCell = document.getElementById('kassenIstBestand');
        const totalAmountScheine = document.getElementById('totalAmountScheine');
        const totalAmountMunzen = document.getElementById('totalAmountMunzen');

        let totalAmount = 0;
        let totalAmountScheineValue = 0;
        let totalAmountMunzenValue = 0;

        for (let i = 0; i < quantities.length; i++) {
            const quantity = parseInt(quantities[i].value);
            const faceValue = parseFloat(amounts[i].previousElementSibling.textContent.replace('€', ''));
            const lineAmount = quantity * faceValue;
            amounts[i].textContent = lineAmount.toFixed(2);
            totalAmount += lineAmount;

            if (faceValue >= 5) {
                totalAmountScheineValue += lineAmount;
            } else {
                totalAmountMunzenValue += lineAmount;
            }
        }

        totalAmountCell.textContent = totalAmount.toFixed(2);
        totalAmountScheine.textContent = totalAmountScheineValue.toFixed(2);
        totalAmountMunzen.textContent = totalAmountMunzenValue.toFixed(2);
    }

    // 计算最终金额函数
    function calculateFinalCashAmount() {
        const initialAmount = parseFloat(document.getElementById('initialAmount').value) || 0;
        const dailySales = parseFloat(document.getElementById('dailySales').value) || 0;
        const kassenIstBestand = parseFloat(document.getElementById('kassenIstBestand').textContent) || 0;

        let diff = kassenIstBestand - initialAmount - dailySales;
        diff = Math.round(diff * 100) / 100;

        const diffElement = document.getElementById('diff');
        diffElement.textContent = '差額/Diff: €' + diff.toFixed(2);

        const totalElement = document.getElementById('total');
        let totalDiff = -diff;
        if (totalDiff === -0) totalDiff = 0;

        createNewCashTable();

        const existingDiffMessage = document.getElementById('diffMessage');
        if (existingDiffMessage) {
            existingDiffMessage.remove();
        }

        const diffMessageContainer = document.createElement('div');
        diffMessageContainer.id = 'diffMessage';

        let message = '';
        if (Math.abs(diff) > 0.005) {
            message = "The difference is not zero, please adjust and re-enter the above table, then press '3. Calculate' and '4. Calculate' again until both the difference and total are zero.";
            diffMessageContainer.style.color = "red";
        } else {
            message = "The cash amount today is completely correct, congratulations! Please fill in the above figures in the 'Kassenbericht mit Zählprotokoll für offene Ladenkassen' form.";
            diffMessageContainer.style.color = "green";
        }

        diffMessageContainer.textContent = message;
        document.getElementById('finalAmountResult').appendChild(diffMessageContainer);

        // Updated red text logic
        if (diff > 0.005) {
            totalElement.innerHTML = '總計/Total: €' + (-diff).toFixed(2) + "<br><span style='color:red;'>The cash in the machine is more than it should be, money needs to be taken out.</span>";
        } else if (diff < -0.005) {
            totalElement.innerHTML = '總計/Total: €' + (-diff).toFixed(2) + "<br><span style='color:red;'>The cash in the machine is less than it should be, money needs to be added.</span>";
        } else {
            totalElement.innerHTML = '總計/Total: €' + Math.abs(totalDiff).toFixed(2);
        }

        const extraCalculationHTML = `
        <hr>
        <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="margin-bottom: 10px; font-size: 20px;">
                <p>Kassen-Ist-Bestand: <span id="kassenIstBestandValue">${document.getElementById('kassenIstBestand').textContent}</span></p>
            </div>
            <div style="display: flex; justify-content: space-between; width: 100%;">
                <div style="flex: 1; padding-right: 10px;">
                    <p>Verwendung: <span id="VerwendungValue">0.00</span></p>
                    <label for="VerbleibendesWechselgeld">-verbleibendes Wechselgeld:</label>
                    <input type="number" inputmode="decimal" id="VerbleibendesWechselgeld">
                </div>
                <div style="flex: 1; padding-left: 10px;">
                    <label for="anfangsbestand">-Anfangsbestand:</label>
                    <input type="number" inputmode="decimal" id="anfangsbestand">
                    <p>Tageslosung: <span id="tageslosungValue">0.00</span></p>
                </div>
            </div>
            <button id="calculateStatsButton" style="margin-top: 15px;">Calculate Stats</button>
        </div>
        `;

        const calculationContainer = document.createElement('div');
        calculationContainer.innerHTML = extraCalculationHTML;
        const newTableContainer = document.getElementById('newTableContainer');
        newTableContainer.appendChild(calculationContainer);

        const statsButton = document.getElementById('calculateStatsButton');
        if (statsButton) {
            statsButton.addEventListener('click', () => {
                calculateVerwendung();
                calculateTageslosung();
            });
        }

        updateNewAllQuantity();
        calculateNewAmount();
        calculateVerwendung();
        calculateTageslosung();
    }

    function createNewCashTable() {
        const newTable = document.createElement('table');
        newTable.innerHTML = `
            <tr>
                <th>數量/Anzahl</th>
                <th>面額/Betrag</th>
                <th>金額/Summe</th>
            </tr>
            <tr>
                <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="newQuantity0" value="4"></td>
                <td>€20.00</td>
                <td id="newAmount0">0</td>
            </tr>
            <tr>
                <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="newQuantity1" value="4"></td>
                <td>€10.00</td>
                <td id="newAmount1">0</td>
            </tr>
            <tr>
                <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="newQuantity2" value="4"></td>
                <td>€5.00</td>
                <td id="newAmount2">0</td>
            </tr>
            <tr>
                <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="newQuantity3"></td>
                <td>€2.00</td>
                <td id="newAmount3">0</td>
            </tr>
            <tr>
                <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="newQuantity4" value="0"></td>
                <td>€1.00</td>
                <td id="newAmount4">0</td>
            </tr>
            <tr>
                <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="newQuantity5" value="0"></td>
                <td>€0.50</td>
                <td id="newAmount5">0</td>
            </tr>
            <tr>
                <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="newQuantity6" value="0"></td>
                <td>€0.20</td>
                <td id="newAmount6">0</td>
            </tr>
            <tr>
                <td><input type="number" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')" id="newQuantity7" value="0"></td>
                <td>€0.10</td>
                <td id="newAmount7">0</td>
            </tr>
            <tr>
                <td colspan="2"><strong>總額/Total</strong></td>
                <td id="newTotalAmount">0</td>
            </tr>
        `;

        const calculateNewButton = document.createElement('button');
        calculateNewButton.textContent = '7. Calculate';
        calculateNewButton.addEventListener('click', () => {
            calculateNewAmount();
            calculateVerwendung();
            calculateTageslosung();
        });

        const newTableContainer = document.getElementById('newTableContainer');
        newTableContainer.innerHTML = '';
        newTableContainer.appendChild(newTable);
        newTableContainer.appendChild(calculateNewButton);
    }

    function calculateNewAmount() {
        const newQuantities = Array.from({ length: 8 }, (_, i) => {
            const inputId = `newQuantity${i}`;
            const el = document.getElementById(inputId);
            return el && el.value ? parseFloat(el.value) : 0;
        });

        const newDenominations = [20, 10, 5, 2, 1, 0.5, 0.2, 0.1];

        let newTotal = 0;
        let denominationTotal = Array(8).fill(0);

        for (let i = 0; i < newQuantities.length; i++) {
            newTotal += newQuantities[i] * newDenominations[i];
            denominationTotal[i] = newQuantities[i] * newDenominations[i];
        }

        const newTotalAmount = document.getElementById('newTotalAmount');
        if (newTotalAmount) newTotalAmount.textContent = newTotal.toFixed(2);

        for (let i = 0; i < denominationTotal.length; i++) {
            const denominationTotalCell = document.getElementById(`newAmount${i}`);
            if (denominationTotalCell) denominationTotalCell.textContent = denominationTotal[i].toFixed(2);
        }

        if (newTotalAmount) newTotalAmount.textContent = '總計/Total: €' + newTotal.toFixed(2);

        const wechselgeldInput = document.getElementById('VerbleibendesWechselgeld');
        if (wechselgeldInput) {
            wechselgeldInput.value = newTotal.toFixed(2);
        }

        const initialAmountEl = document.getElementById('initialAmount');
        const anfangsbestandInput = document.getElementById('anfangsbestand');
        if (anfangsbestandInput && initialAmountEl) {
            anfangsbestandInput.value = initialAmountEl.value;
        }
    }

    function updateNewAllQuantity() {
        const getVal = (id) => {
            const el = document.getElementById(id);
            return el && el.value ? parseFloat(el.value) : 0;
        }
        const count5Value = getVal('count5');
        const count6Value = getVal('count6');
        const count7Value = getVal('count7');
        const count8Value = getVal('count8');
        const count9Value = getVal('count9');

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if(el) el.value = val;
        }

        setVal('newQuantity3', count5Value);
        setVal('newQuantity4', count6Value);
        setVal('newQuantity5', count7Value);
        setVal('newQuantity6', count8Value);
        setVal('newQuantity7', count9Value);
    }

    function calculateVerwendung() {
        const kassenIstEl = document.getElementById('kassenIstBestandValue');
        const wechselgeldEl = document.getElementById('VerbleibendesWechselgeld');
        const verwendungEl = document.getElementById('VerwendungValue');

        if (!kassenIstEl || !wechselgeldEl || !verwendungEl) return;

        const kassenIstBestand = parseFloat(kassenIstEl.textContent) || 0;
        const verbleibendeswechselgeld = parseFloat(wechselgeldEl.value) || 0;

        let result = kassenIstBestand - verbleibendeswechselgeld;
        result = Math.round(result * 100) / 100;
        verwendungEl.textContent = result.toFixed(2);
    }

    function calculateTageslosung() {
        const kassenIstEl = document.getElementById('kassenIstBestandValue');
        const anfangsEl = document.getElementById('anfangsbestand');
        const tageslosungEl = document.getElementById('tageslosungValue');

        if (!kassenIstEl || !anfangsEl || !tageslosungEl) return;

        const kassenIstBestand = parseFloat(kassenIstEl.textContent) || 0;
        const anfangsbestand = parseFloat(anfangsEl.value) || 0;

        let result = kassenIstBestand - anfangsbestand;
        result = Math.round(result * 100) / 100;
        tageslosungEl.textContent = result.toFixed(2);
    }

    // Bind initial events
    openStoreButton.addEventListener('click', showOpenStorePage);
    cashCountButton.addEventListener('click', showCashCountPage);

    // Initial load
    showOpenStorePage();
});