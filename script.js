/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger.
   ===================
*/
const {
  core: { test, expect, run },
  prettify
} = window.jestLite;
/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;
/* =================
   ASSERTIONS
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});
const console = document.getElementById("tests");
prettify.toHTML(run(), console);



var sheep, other;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


sheep = 0;
other = 0;


document.getElementById('button').addEventListener('click', (event) => {
  let element_sheep_count = document.getElementById('sheep_count');
  if (getNumberOrString(document.getElementById('text').value) == 'sheep') {
    let element_sheep_count2 = document.getElementById('sheep_count');
    element_sheep_count2.innerText = sheep;
    sheep = (typeof sheep === 'number' ? sheep : 0) + 1;
  } else {
    let element_other_count = document.getElementById('other_count');
    element_other_count.innerText = other;
    other = (typeof other === 'number' ? other : 0) + 1;
  }

});
if (false) {
}
