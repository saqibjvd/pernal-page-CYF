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


var rolls, dice, player, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function display_the_rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list2 = document.getElementById('list');
  rolls.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = rolls;

    element_list2.appendChild(new_li);
  });
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a,b) => a+b, 0);
}


rolls = [0, 0, 0, 0, 0, 0];
display_the_rolls();


document.getElementById('button_roll').addEventListener('click', (event) => {
  dice = [1, 2, 3, 4, 4, 6];
  rolls.shift();
  rolls.push(randomMember(dice));
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  display_the_rolls();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  let element_total2 = document.getElementById('total');
  element_total2.replaceChildren();
  element_total2.innerText = 0;
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();

});

document.getElementById('button_roll').addEventListener('click', (event) => {
  player = rolls.reduce((a,b) => a+b, 0);
  if (player > 11) {
    let element_info = document.getElementById('info');
    element_info.replaceChildren();
    element_info.innerText = 'You Lost';
  } else if (player == 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You Won';
  }

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  rolls.push(0);
  let element_list4 = document.getElementById('list');
  element_list4.replaceChildren();
  display_the_rolls();

});


var story, image, page;


story = ['Quotes from The Jungle Book that will make you think, smile and thrive', 'The strength of the pack is the wolf, and the strength of the wolf is the pack', 'Don’t spend your time looking for something you want that can’t be found.When you find out you can live without it, go along not thinking about it.', 'Greater love hath no one than he who lays down his life for his friend.'];
image = ['https://m.media-amazon.com/images/M/MV5BMTkyNTUxMDczMF5BMl5BanBnXkFtZTgwMTUzNDA4NjE@._V1_.jpg', 'https://i.ytimg.com/vi/Erl_RnQZ7PA/maxresdefault.jpg', 'https://i.ytimg.com/vi/PPuqz3PL2Ck/maxresdefault.jpg', 'https://i.ytimg.com/vi/PPuqz3PL2Ck/maxresdefault.jpg'];
page = [2, 3, 4, 5];


document.getElementById('next_page').addEventListener('click', (event) => {
  let element_story = document.getElementById('story');
  element_story.innerText = story.shift();
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", image.shift());
  let element_page_number = document.getElementById('page_number');
  element_page_number.innerText = page.shift();

});


var pictures;


pictures = ['https://lumiere-a.akamaihd.net/v1/images/p_thejunglebook2016_19751_6b8cfcec.jpeg', 'https://m.media-amazon.com/images/M/MV5BMTkyNTUxMDczMF5BMl5BanBnXkFtZTgwMTUzNDA4NjE@._V1_.jpg', 'https://i.ytimg.com/vi/Erl_RnQZ7PA/maxresdefault.jpg', 'https://i.ytimg.com/vi/PPuqz3PL2Ck/maxresdefault.jpg'];
let element_jungle = document.getElementById('jungle');
element_jungle.setAttribute("src", pictures[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_jungle2 = document.getElementById('jungle');
  pictures.push(pictures.shift());
  element_jungle2.setAttribute("src", pictures[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_jungle3 = document.getElementById('jungle');
  pictures.unshift(pictures.pop());
  element_jungle3.setAttribute("src", pictures[0]);

});


var shopping, item;


shopping = ['Books', 'Toys', 'Movies'];
let element_list = document.getElementById('list');
shopping.forEach((item) => {
  let new_li = document.createElement('li');
  new_li.innerText = item;
  let new_span = document.createElement('span');
  let new_button = document.createElement('button');
  new_button.innerText = 'add to basket';
  new_button.setAttribute("id", item);

  new_span.appendChild(new_button);

  new_li.appendChild(new_span);

  element_list.appendChild(new_li);
});


document.getElementById('Books').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  let element_shop = document.getElementById('shop');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Jungle Book: £5';

  element_shop.appendChild(new_li2);

});

document.getElementById('Toys').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  let element_shop2 = document.getElementById('shop');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Jungle Book Toys: £8';

  element_shop2.appendChild(new_li3);

});

document.getElementById('Movies').addEventListener('click', (event) => {
  let element_list4 = document.getElementById('list');
  let element_shop3 = document.getElementById('shop');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Jungle Book Movie: £12';

  element_shop3.appendChild(new_li4);

});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


document.getElementById('send').addEventListener('click', (event) => {
  let element_name = document.getElementById('name');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('fname').value);
  new_li.setAttribute("class", 'comment');

  element_name.appendChild(new_li);
  let new_div = document.createElement('div');
  new_div.setAttribute("class", 'c_span');
  new_div.innerText = getNumberOrString(document.getElementById('comment').value);

  element_name.appendChild(new_div);

});

