// 获取按钮和内容区域的引用
const openStoreButton = document.getElementById('openStoreButton');
const cashCountButton = document.getElementById('cashCountButton');
const content = document.getElementById('content');

// 页面切换函数
function showOpenStorePage() {
    content.innerHTML = `
        <div id="openStorePage">
            <h2>開店金額 / Anfangsbestand</h2>
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
            <button id="calculateButton">計算</button>
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
            <h2>Kasse 現金清點 / Zählprotokoll</h2>
            <table id="cashCountTable">
                <tr>
                    <th>數量/Anzahl</th>
                    <th>面額/Betrag</th>
                    <th>金額/Summe</th>
                </tr>
                <tr>
                    <td><input type="number" id="count0" value="0"></td>
                    <td>€100.00</td>
                    <td id="cashCountAmount0">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count1" value="0"></td>
                    <td>€50.00</td>
                    <td id="cashCountAmount1">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count2" value="0"></td>
                    <td>€20.00</td>
                    <td id="cashCountAmount2">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count3" value="0"></td>
                    <td>€10.00</td>
                    <td id="cashCountAmount3">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count4" value="0"></td>
                    <td>€5.00</td>
                    <td id="cashCountAmount4">0</td>
                </tr>
                <tr>
                    <td colspan="2"><strong>Scheine Gesamt</strong></td>
                    <td id="totalAmountScheine">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count5" value="0"></td>
                    <td>€2.00</td>
                    <td id="cashCountAmount5">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count6" value="0"></td>
                    <td>€1.00</td>
                    <td id="cashCountAmount6">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count7" value="0"></td>
                    <td>€0.50</td>
                    <td id="cashCountAmount7">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count8" value="0"></td>
                    <td>€0.20</td>
                    <td id="cashCountAmount8">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count9" value="0"></td>
                    <td>€0.10</td>
                    <td id="cashCountAmount9">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count10" value="0"></td>
                    <td>€0.05</td>
                    <td id="cashCountAmount10">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count11" value="0"></td>
                    <td>€0.02</td>
                    <td id="cashCountAmount11">0</td>
                </tr>
                <tr>
                    <td><input type="number" id="count12" value="0"></td>
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
            <button id="calculateCashCountButton">計算</button>
            
            <div>
                <label for="initialAmount">起始金額/Anfangsbestand:</label>
                <input type="number" id="initialAmount" value="0">
            </div>
            <div>
                <label for="dailySales">當日現金營業額/Bar Umsatz:</label>
                <input type="number" id="dailySales" value="0">
            </div>
            <button id="calculateFinalAmount">計算最終金額</button>
            <div id="finalAmountResult"></div>

            <!-- 差额/Diff -->
            <p id="diff">差額/Diff: €0.00</p>

            <!-- 總計/Total -->
            <p id="total">總計/Total: €0.00</p>

            <!-- 差额增減表格 -->
            <table id="diffChangeTable">
                <tr>
                    <th>面額/Betrag</th>
                    <th>數量</th>
                    <th>金額</th>
                </tr>
            </table>
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
    const quantities = document.querySelectorAll('#cashCountTable input[type="number"]');
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

    // 计算差额增減
    let diffChangeTable = document.getElementById('diffChangeTable');
    diffChangeTable.innerHTML = ''; // 清空表格内容

    // 显示总计为差额的负值
    const totalElement = document.getElementById('total');
    totalElement.textContent = '總計/Total: €' + (-diff).toFixed(2);

    createNewCashTable()
    updateNewAllQuantity()
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
    calculateNewButton.textContent = '計算新表格';
    calculateNewButton.addEventListener('click', calculateNewAmount);

    const newTableContainer = document.getElementById('newTableContainer');
    newTableContainer.innerHTML = ''; // 清空容器
    newTableContainer.appendChild(newTable);
    newTableContainer.appendChild(calculateNewButton);

    /*
    // 获取 id 为 "count5" 的 input 元素
    const count5Input = document.getElementById('count5');

    // 获取 id 为 "newQuantity3" 的 input 元素
    const newQuantity3Input = document.getElementById('newQuantity3');

    // 添加事件监听器以在 "count5" input 值更改时更新 "newQuantity3" input 的值
    count5Input.addEventListener('input', function () {
        // 获取 "count5" input 的值
        const count5Value = count5Input.value;

        // 将 "count5" input 的值设置为 "newQuantity3" input 的值
        newQuantity3Input.value = count5Value;
    });
    */
    
}

// 新表格的计算按钮点击事件
function calculateNewAmount() {
    // 获取新表格中的数量和面额
    const newQuantities = Array.from({ length: 8 }, (_, i) => {
        const inputId = `newQuantity${i}`;
        return parseFloat(document.getElementById(inputId).value);
    });

    const newDenominations = [20, 10, 5, 2, 1, 0.5, 0.2, 0.1];

    // 计算新表格的总额
    let newTotal = 0;
    for (let i = 0; i < newQuantities.length; i++) {
        newTotal += newQuantities[i] * newDenominations[i];
    }

    // 更新新表格的总额显示
    const newTotalAmount = document.getElementById('newTotalAmount');
    newTotalAmount.textContent = newTotal.toFixed(2);
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

// 按钮点击事件监听
openStoreButton.addEventListener('click', showOpenStorePage);
cashCountButton.addEventListener('click', showCashCountPage);