let inputText = '';
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight); // 設定畫布大小為視窗大小
  createInputDialog();
}

function draw() {
  background(0); // 設定背景為黑色
  fill(255); // 設定文字顏色為白色
  textAlign(LEFT, TOP); // 設定文字對齊方式
  drawTextBackground(); // 繪製文字背景
}

function createInputDialog() {
  let input = createInput();
  input.position(10, 10);
  let button = createButton('提交');
  button.position(input.x + input.width + 10, 10);
  button.mousePressed(() => {
    inputText = input.value(); // 將輸入的文字儲存到變數
  });
  slider = createSlider(10, 100, 32); // 創建拉桿，範圍從10到100，初始值為32
  slider.position(button.x + button.width + 10, 10); // 設定拉桿位置
}

function drawTextBackground() {
  let textSizeValue = slider.value();
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    textSize(map(x, 0, width, 10, textSizeValue)); // 根據 x 位置設定文字大小
    text(inputText, x, y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時，調整畫布大小
}
