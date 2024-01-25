// 获取按钮和内容区域的引用
const openStoreButton = document.getElementById('openStoreButton');
const cashCountButton = document.getElementById('cashCountButton');
const content = document.getElementById('content');

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
                    <td><input type="number" id="quantity0" value="4"></td>
                    <td>€20.00</td>
                    <td id="amount0">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="quantity1" value="4"></td>
                    <td>€10.00</td>
                    <td id="amount1">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="quantity2" value="4"></td>
                    <td>€5.00</td>
                    <td id="amount2">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="quantity3" value="0"></td>
                    <td>€2.00</td>
                    <td id="amount3">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="quantity4" value="0"></td>
                    <td>€1.00</td>
                    <td id="amount4">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="quantity5" value="0"></td>
                    <td>€0.50</td>
                    <td id="amount5">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="quantity6" value="0"></td>
                    <td>€0.20</td>
                    <td id="amount6">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="quantity7" value="0"></td>
                    <td>€0.10</td>
                    <td id="amount7">0</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>總額/Total</strong></td>
                    <td id="totalAmount">0</td>
                </tr>
            </table>
            <button id="calculateButton">Caculate</button>
        </div>
    `;

    

    // 计算按钮的点击事件监听
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateAmount);

    // 显示“開店金額”页面
    openStorePage.style.display = 'block';
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
                    <td><input type="number" id="count0"></td>
                    <td>€100.00</td>
                    <td id="cashCountAmount0">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count1"></td>
                    <td>€50.00</td>
                    <td id="cashCountAmount1">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count2"></td>
                    <td>€20.00</td>
                    <td id="cashCountAmount2">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count3"></td>
                    <td>€10.00</td>
                    <td id="cashCountAmount3">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count4"></td>
                    <td>€5.00</td>
                    <td id="cashCountAmount4">0</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Scheine Gesamt</strong></td>
                    <td id="totalAmountScheine">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count5"></td>
                    <td>€2.00</td>
                    <td id="cashCountAmount5">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count6"></td>
                    <td>€1.00</td>
                    <td id="cashCountAmount6">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count7"></td>
                    <td>€0.50</td>
                    <td id="cashCountAmount7">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count8"></td>
                    <td>€0.20</td>
                    <td id="cashCountAmount8">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count9"></td>
                    <td>€0.10</td>
                    <td id="cashCountAmount9">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count10"></td>
                    <td>€0.05</td>
                    <td id="cashCountAmount10">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count11"></td>
                    <td>€0.02</td>
                    <td id="cashCountAmount11">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count12"></td>
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
                <input type="number" id="initialAmount">
            </div>
            <div>
                <label for="dailySales">當日現金營業額/Bar Umsatz:</label>
                <input type="number" id="dailySales">
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

    // 计算按钮的点击事件监听
    const calculateCashCountButton = document.getElementById('calculateCashCountButton');
    calculateCashCountButton.addEventListener('click', calculateCashCount);

    // 计算最终金额按钮的点击事件监听
    const calculateFinalAmount = document.getElementById('calculateFinalAmount');
    calculateFinalAmount.addEventListener('click', calculateFinalCashAmount);

    // 显示Kasse清点页面
    cashCountPage.style.display = 'block';
}

// 初始时显示开店金额页面
showOpenStorePage();

// 计算函数 - 开店金額
function calculateAmount() {
    // 获取表格中的所有输入框和金额单元格
    const quantities = document.querySelectorAll('input[type="number"]');
    const amounts = document.querySelectorAll('#cashTable td[id^="amount"]');
    const totalAmountCell = document.getElementById('totalAmount');

    let totalAmount = 0;

    // 遍历每一行，计算金额并更新到对应的单元格
    for (let i = 0; i < quantities.length; i++) {
        const quantity = parseInt(quantities[i].value);
        const faceValue = parseFloat(amounts[i].previousElementSibling.textContent.replace('€', ''));
        const lineAmount = quantity * faceValue;
        amounts[i].textContent = lineAmount.toFixed(2);
        totalAmount += lineAmount;
    }

    // 更新总额
    totalAmountCell.textContent = totalAmount.toFixed(2);
}

// 计算函数 - Kasse清点
function calculateCashCount() {
    // 获取表格中的所有输入框和金额单元格
    let isValid = true;
    const quantities = document.querySelectorAll('#cashCountTable input[type="number"]');

    quantities.forEach(input => {
        let value = input.value.trim();

        // 如果输入为空，自动将其设置为0
        if (value === '') {
            input.value = '0';
            value = '0';
        }

        // 验证输入是否为非负整数
        if (!Number.isInteger(parseFloat(value)) || parseFloat(value) < 0) {
            input.style.borderColor = 'red'; // 显示红色边框
            isValid = false;
        } else {
            input.style.borderColor = ''; // 如果输入有效，移除红色边框
        }
    });

    if (!isValid) {
        return; // 如果有无效输入，则不继续计算
    }
    //const quantities = document.querySelectorAll('#cashCountTable input[type="number"]');
    const amounts = document.querySelectorAll('#cashCountTable td[id^="cashCountAmount"]');
    const totalAmountCell = document.getElementById('kassenIstBestand');
    const totalAmountScheine = document.getElementById('totalAmountScheine');
    const totalAmountMunzen = document.getElementById('totalAmountMunzen');

    let totalAmount = 0;
    let totalAmountScheineValue = 0;
    let totalAmountMunzenValue = 0;

    // 遍历每一行，计算金额并更新到对应的单元格
    for (let i = 0; i < quantities.length; i++) {
        const quantity = parseInt(quantities[i].value);
        const faceValue = parseFloat(amounts[i].previousElementSibling.textContent.replace('€', ''));
        const lineAmount = quantity * faceValue;
        amounts[i].textContent = lineAmount.toFixed(2);
        totalAmount += lineAmount;

        // 判断面额属于Scheine还是Munzen
        if (faceValue >= 5) {
            totalAmountScheineValue += lineAmount;
        } else {
            totalAmountMunzenValue += lineAmount;
        }
    }

    // 更新总额
    totalAmountCell.textContent = totalAmount.toFixed(2);
    totalAmountScheine.textContent = totalAmountScheineValue.toFixed(2);
    totalAmountMunzen.textContent = totalAmountMunzenValue.toFixed(2);

    // 计算Kassen-Ist-Bestand
    const kassenIstBestand = totalAmountScheineValue + totalAmountMunzenValue;
    const kassenIstBestandCell = document.getElementById('kassenIstBestand');
    kassenIstBestandCell.textContent = kassenIstBestand.toFixed(2);
}

// 计算最终金额函数
function calculateFinalCashAmount() {
    // 获取起始金額、當日現金營業額和Kassen-Ist-Bestand
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const dailySales = parseFloat(document.getElementById('dailySales').value);
    const kassenIstBestand = parseFloat(document.getElementById('kassenIstBestand').textContent);

    // 计算差额
    let diff = kassenIstBestand - initialAmount - dailySales;

    // 显示差额
    const diffElement = document.getElementById('diff');
    diffElement.textContent = '差額/Diff: €' + diff.toFixed(2);

    // 显示总计为差额的负值
    const totalElement = document.getElementById('total');
    totalElement.textContent = '總計/Total: €' + (-diff).toFixed(2);

    createNewCashTable()
    updateNewAllQuantity()

    // 清除先前的提示信息
    const existingDiffMessage = document.getElementById('diffMessage');
    if (existingDiffMessage) {
        existingDiffMessage.remove();
    }

    // 创建新的提示信息元素
    const diffMessageContainer = document.createElement('div');
    diffMessageContainer.id = 'diffMessage';

    let message = '';
    if (diff !== 0) {
        message = "The difference is not zero, please adjust and re-enter the above table, then press '3. Calculate' and '4. Calculate' again until both the difference and total are zero.";
    } else {
        message = "The cash amount today is completely correct, congratulations! Please fill in the above figures in the 'Kassenbericht mit Zählprotokoll für offene Ladenkassen' form.";
    }

    diffMessageContainer.textContent = message;
    document.getElementById('finalAmountResult').appendChild(diffMessageContainer);

    // 更新额外的提示信息
    if (diff > 0) {
        totalElement.innerHTML = '總計/Total: €' + (-diff).toFixed(2) + "<br>The cash in the machine is more than it should be, money needs to be taken out.";
    } else if (diff < 0) {
        totalElement.innerHTML = '總計/Total: €' + (-diff).toFixed(2) + "<br>The cash in the machine is less than it should be, money needs to be added.";
    } else {
        totalElement.innerHTML = '總計/Total: €' + (-diff).toFixed(2);
    }

    // 创建额外的计算部分
    const extraCalculationHTML = `
    <hr>
    <div style="display: flex; flex-direction: column; align-items: center;">
        <div style="margin-bottom: 10px; font-size: 20px;">
            <p>Kassen-Ist-Bestand: <span id="kassenIstBestandValue">${document.getElementById('kassenIstBestand').textContent}</span></p>
        </div>
        <div style="display: flex; justify-content: space-between; width: 100%;">
            <div style="flex: 1; padding-right: 10px;">
                <label for="verwendung">-Verwendung:</label>
                <input type="number" id="verwendung">
                <button onclick="calculateVerbleibendesWechselgeld()">Calculate</button>
                <p>verbleibendes Wechselgeld: <span id="verbleibendesWechselgeldValue"></span></p>
            </div>
            <div style="flex: 1; padding-left: 10px;">
                <label for="anfangsbestand">-Anfangsbestand:</label>
                <input type="number" id="anfangsbestand">
                <button onclick="calculateTageslosung()">Calculate</button>
                <p>Tageslosung: <span id="tageslosungValue"></span></p>
            </div>
        </div>
    </div>
    `;

    const calculationContainer = document.createElement('div');
    calculationContainer.innerHTML = extraCalculationHTML;
    const newTableContainer = document.getElementById('newTableContainer');
    // 注意这里我们不再清空 newTableContainer，而是直接追加内容
    newTableContainer.appendChild(calculationContainer);
}



// 生成新表格和计算按钮
function createNewCashTable() {
    const newTable = document.createElement('table');
    newTable.innerHTML = `
        <tr>
            <th>數量/Anzahl</th>
            <th>面額/Betrag</th>
            <th>金額/Summe</th>
        </tr>
        <tr>
            <td><input type="number" id="newQuantity0" value="4"></td>
            <td>€20.00</td>
            <td id="newAmount0">0</td>
        </tr>
        <tr>
            <td><input type="number" id="newQuantity1" value="4"></td>
            <td>€10.00</td>
            <td id="newAmount1">0</td>
        </tr>
        <tr>
            <td><input type="number" id="newQuantity2" value="4"></td>
            <td>€5.00</td>
            <td id="newAmount2">0</td>
        </tr>
        <tr>
            <td><input type="number" id="newQuantity3"></td>
            <td>€2.00</td>
            <td id="newAmount3">0</td>
        </tr>
        <tr>
            <td><input type="number" id="newQuantity4" value="0"></td>
            <td>€1.00</td>
            <td id="newAmount4">0</td>
        </tr>
        <tr>
            <td><input type="number" id="newQuantity5" value="0"></td>
            <td>€0.50</td>
            <td id="newAmount5">0</td>
        </tr>
        <tr>
            <td><input type="number" id="newQuantity6" value="0"></td>
            <td>€0.20</td>
            <td id="newAmount6">0</td>
        </tr>
        <tr>
            <td><input type="number" id="newQuantity7" value="0"></td>
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
    calculateNewButton.addEventListener('click', calculateNewAmount);

    const newTableContainer = document.getElementById('newTableContainer');
    newTableContainer.innerHTML = ''; // 清空容器
    newTableContainer.appendChild(newTable);
    newTableContainer.appendChild(calculateNewButton);
    
}

// 新表格的计算按钮点击事件
function calculateNewAmount() {
    // 获取新表格中的数量和面额
    const newQuantities = Array.from({ length: 8 }, (_, i) => {
        const inputId = `newQuantity${i}`;
        return parseFloat(document.getElementById(inputId).value);
    });

    const newDenominations = [20, 10, 5, 2, 1, 0.5, 0.2, 0.1];

    // 计算新表格的总额和各个面额的总额
    let newTotal = 0;
    let denominationTotal = Array(8).fill(0); // 创建一个数组以存储各个面额的总额

    for (let i = 0; i < newQuantities.length; i++) {
        newTotal += newQuantities[i] * newDenominations[i];
        denominationTotal[i] = newQuantities[i] * newDenominations[i]; // 计算各个面额的总额
    }

    // 更新新表格的总额显示
    const newTotalAmount = document.getElementById('newTotalAmount');
    newTotalAmount.textContent = newTotal.toFixed(2);

    // 更新各个面额的总额显示
    for (let i = 0; i < denominationTotal.length; i++) {
        const denominationTotalCell = document.getElementById(`newAmount${i}`);
        denominationTotalCell.textContent = denominationTotal[i].toFixed(2);
    }

    // 计算并更新总计为各个面额总额的总额
    const totalElement = document.getElementById('newTotalAmount');
    const totalDenomination = denominationTotal.reduce((acc, curr) => acc + curr, 0);
    totalElement.textContent = '總計/Total: €' + totalDenomination.toFixed(2);
}

// 更新2歐以下的 newQuantity 的值
function updateNewAllQuantity() {
    // 获取所需 "count" 的值
    const count5Value = parseFloat(document.getElementById('count5').value);
    const count6Value = parseFloat(document.getElementById('count6').value);
    const count7Value = parseFloat(document.getElementById('count7').value);
    const count8Value = parseFloat(document.getElementById('count8').value);
    const count9Value = parseFloat(document.getElementById('count9').value);

    // 获取所有 "newQuantity" 元素
    const newQuantity3Input = document.getElementById('newQuantity3');
    const newQuantity4Input = document.getElementById('newQuantity4');
    const newQuantity5Input = document.getElementById('newQuantity5');
    const newQuantity6Input = document.getElementById('newQuantity6');
    const newQuantity7Input = document.getElementById('newQuantity7');

    // 将 "count5" 的值设置为 "newQuantity3" 的值，依序處理
    newQuantity3Input.value = count5Value;
    newQuantity4Input.value = count6Value;
    newQuantity5Input.value = count7Value;
    newQuantity6Input.value = count8Value;
    newQuantity7Input.value = count9Value;
}

function calculateVerbleibendesWechselgeld() {
    const kassenIstBestand = parseFloat(document.getElementById('kassenIstBestandValue').textContent);
    const verwendung = parseFloat(document.getElementById('verwendung').value);
    let result = kassenIstBestand - verwendung;
    result = parseFloat(result.toFixed(2)); // 四舍五入到小数点后两位，并转换为数字
    document.getElementById('verbleibendesWechselgeldValue').textContent = result;

    // 提取 totalElement 中的数值
    const totalElementText = document.getElementById('newTotalAmount').textContent;
    const totalDenominationMatch = totalElementText.match(/-?\d+(\.\d+)?/); // 匹配数字，包括负数和小数
    const totalDenomination = totalDenominationMatch ? parseFloat(totalDenominationMatch[0]) : NaN;

    // 移除旧的错误消息（如果存在）
    const existingErrorMessage = document.getElementById('error-message');
    if (existingErrorMessage) {
        existingErrorMessage.remove();
    }

    // 比较 result 和 totalDenomination
    if (result !== totalDenomination) {
        // 如果不相等，显示错误消息
        const errorMessage = document.createElement('p');
        errorMessage.id = 'error-message';
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Value error, please check if verbleibendes Wechselgeld is correct.';
        document.getElementById('verbleibendesWechselgeldValue').after(errorMessage);
    }
}

function calculateTageslosung() {
    const kassenIstBestand = parseFloat(document.getElementById('kassenIstBestandValue').textContent);
    const anfangsbestand = parseFloat(document.getElementById('anfangsbestand').value);
    const result = kassenIstBestand - anfangsbestand;
    document.getElementById('tageslosungValue').textContent = result.toFixed(2);
}

// 按钮点击事件监听
openStoreButton.addEventListener('click', showOpenStorePage);
cashCountButton.addEventListener('click', showCashCountPage);