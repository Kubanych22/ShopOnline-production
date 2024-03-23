/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 631:
/***/ ((__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _showArticle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);


const menuBtn = document.querySelector('.navigation__menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', evt => {
  evt.preventDefault();
  menuBtn.classList.toggle('close-btn');
  menu.classList.toggle('open');
  const menuListWrap = menu.querySelector('.menu__wrap');
  const menuList = menuListWrap.children;
  for (const item of menuList) {
    const innerItem = [...item.querySelectorAll('.inner__list')];
    for (const elem of innerItem) {
      const parent = elem.parentElement;
      parent.addEventListener('click', evt => {
        const target = evt.target;
        const ul = target.querySelector('.inner__list');
        if (ul) {
          ul.classList.toggle('expand');
        }
      });
    }
  }
});
const renderBlog = async () => {
  await (0,_render_js__WEBPACK_IMPORTED_MODULE_0__/* .renderPostsPage */ .d3)();
  (0,_showArticle_js__WEBPACK_IMPORTED_MODULE_1__/* .showArticle */ .k)();
};
await renderBlog();
const breadcrumbs = () => {
  const nav = document.querySelector('.navigation');
  const breadcrumbsList = document.createElement('ul');
  breadcrumbsList.classList.add('breadcrumbs');
  breadcrumbsList.id = 'breadcrumbs';
  let breadcrumbsItem;
  breadcrumbsItem = document.createElement('li');
  breadcrumbsItem.classList.add('breadcrumbs__item');
  let breadcrumbsLink = document.createElement('a');
  breadcrumbsLink.classList.add('breadcrumbs__link');
  breadcrumbsLink.href = 'index.html';
  breadcrumbsLink.textContent = 'Главная';
  breadcrumbsItem.append(breadcrumbsLink);
  breadcrumbsList.append(breadcrumbsItem);
  nav.append(breadcrumbsList);
  const breadcrumbs = document.querySelector('.breadcrumbs');
  const menuListWrap = menu.querySelector('.menu__wrap');
  const menuList = [...menuListWrap.children];
  for (const item of menuList) {
    const links = [...item.querySelectorAll('a')];
    const url = links.map(link => {
      return link.getAttribute('href');
    });
    let href = [];
    for (let i = 0; i < url.length; i++) {
      if (url[i] === '#') {
        continue;
      }
      href.push(url[i]);
    }
    const paths = location.href.split('/').slice(3);
    const path = paths[0];
    if (href.toString().includes(path.toString())) {
      const menuItemTitle = item.querySelector('h3');
      breadcrumbsItem = document.createElement('li');
      breadcrumbsItem.classList.add('breadcrumbs__item');
      breadcrumbsItem.textContent = menuItemTitle.textContent;
      breadcrumbs.append(breadcrumbsItem);
      const currentLink = item.querySelector(`a[href*="${path}"]`);
      breadcrumbsItem = document.createElement('li');
      breadcrumbsItem.classList.add('breadcrumbs__item');
      breadcrumbsItem.textContent = currentLink.textContent;
      breadcrumbs.append(breadcrumbsItem);
      break;
    }
  }
};
breadcrumbs();
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 328:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ createPage)
/* harmony export */ });
const check = (numPage, curentPage) => {
  while (curentPage < 30) {
    if (numPage === curentPage) {
      return true;
    }
    curentPage += 3;
  }
  return false;
};
const createPage = (articlesList, btnNum) => {
  const blog = document.createElement('section');
  blog.classList.add('blog');
  const container = document.createElement('div');
  container.classList.add('container');
  const blogContainer = document.createElement('div');
  blogContainer.classList.add('blog__container');
  const articlesWrapper = document.createElement('ul');
  articlesWrapper.classList.add('blog__list');
  let articleNum = 1;
  const articles = articlesList.map(item => {
    const article = document.createElement('li');
    article.classList.add('blog__item', 'item');
    const link = document.createElement('a');
    link.classList.add('blog__link');
    link.href = `article.html?id=${item.id}`;
    const img = document.createElement('img');
    img.classList.add('item__img');
    img.src = `https://loremflickr.com/400/400?${articleNum++}`;
    img.alt = 'Превью статьи';
    const title = document.createElement('h2');
    title.classList.add('item__title');
    title.textContent = `${item.title}`;
    link.append(img, title);
    article.append(link);
    return article;
  });
  articlesWrapper.append(...articles);
  blogContainer.append(articlesWrapper);
  container.append(blogContainer);
  const navigation = document.createElement('div');
  navigation.classList.add('nav');
  const navigationPrev = document.createElement('button');
  navigationPrev.classList.add('nav__prev');
  navigationPrev.type = 'button';
  navigationPrev.innerHTML = `
    <svg class="nav__prev-img" xmlns="http://www.w3.org/2000/svg" width="37" height="37"
         viewBox="0 0 37 37" fill="none">
      <path
        d="M32.375 16.9583H10.5296L16.0487 11.4237L13.875 9.25L4.625 18.5L13.875 27.75L16.0487 25.5763L10.5296 20.0417H32.375V16.9583Z"
        fill="#8F8F8F"/>
    </svg>
  `;
  const navigationList = document.createElement('ul');
  navigationList.classList.add('nav__list');
  const navigationItemFirst = document.createElement('li');
  navigationItemFirst.classList.add('nav__item');
  const navigationBtnFirst = document.createElement('button');
  navigationBtnFirst.classList.add('nav__btn', 'nav__btn_first');
  const navigationItemSecond = document.createElement('li');
  navigationItemSecond.classList.add('nav__item');
  const navigationBtnSecond = document.createElement('button');
  navigationBtnSecond.classList.add('nav__btn', 'nav__btn_second');
  const navigationItemThird = document.createElement('li');
  navigationItemThird.classList.add('nav__item');
  const navigationBtnThird = document.createElement('button');
  navigationBtnThird.classList.add('nav__btn', 'nav__btn_third');
  if (check(btnNum, 1)) {
    navigationBtnFirst.classList.add('nav__btn_active');
  }
  if (check(btnNum, 2)) {
    navigationBtnSecond.classList.add('nav__btn_active');
  }
  if (check(btnNum, 3)) {
    navigationBtnThird.classList.add('nav__btn_active');
  }
  navigationItemFirst.append(navigationBtnFirst);
  navigationItemSecond.append(navigationBtnSecond);
  navigationItemThird.append(navigationBtnThird);
  navigationList.append(navigationItemFirst, navigationItemSecond, navigationItemThird);
  const navigationNext = document.createElement('button');
  navigationNext.classList.add('nav__next');
  navigationNext.type = 'button';
  navigationNext.innerHTML = `
    <svg class="nav__next-img" xmlns="http://www.w3.org/2000/svg" width="37" height="37"
         viewBox="0 0 37 37" fill="none">
      <path
        d="M4.625 16.9583H26.4704L20.9513 11.4237L23.125 9.25L32.375 18.5L23.125 27.75L20.9513 25.5763L26.4704 20.0417H4.625V16.9583Z"
        fill="#3670C7"/>
    </svg>
  `;
  navigation.append(navigationPrev, navigationList, navigationNext);
  container.append(navigation);
  blog.append(container);
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.append(blog);
  return {
    main,
    blog,
    navigationBtnFirst,
    navigationBtnSecond,
    navigationBtnThird
  };
};

/***/ }),

/***/ 19:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d3: () => (/* binding */ renderPostsPage)
});

// UNUSED EXPORTS: currentPage, getArticles

// EXTERNAL MODULE: ./src/js/blog/createPage.js
var createPage = __webpack_require__(328);
// EXTERNAL MODULE: ./src/js/blog/showArticle.js
var showArticle = __webpack_require__(50);
;// CONCATENATED MODULE: ./src/js/index/preload.js
const preload = {
  circle: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
  <path d="M142.5 60L112.5 90H135C135 114.825 114.825 135 90 135C82.425 135 75.225 133.125 69 129.75L58.05 140.7C67.275 146.55 78.225 150 90 150C123.15 150 150 123.15 150 90H172.5L142.5 60ZM45 90C45 65.175 65.175 45 90 45C97.575 45 104.775 46.875 111 50.25L121.95 39.3C112.725 33.45 101.775 30 90 30C56.85 30 30 56.85 30 90H7.5L37.5 120L67.5 90H45Z" fill="black"/>
</svg>`,
  overlay: document.createElement('div'),
  show() {
    this.overlay.classList.add('overlay');
    this.overlay.innerHTML = this.circle;
    this.overlay.style.minHeight = '2000px';
    const main = document.querySelector('main');
    main.prepend(this.overlay);
  },
  remove() {
    this.overlay.remove();
  }
};
/* harmony default export */ const index_preload = (preload);
;// CONCATENATED MODULE: ./src/js/blog/render.js



const getArticles = async numPage => {
  const response = await fetch(`https://gorest.co.in/public-api/posts?page=${numPage}`);
  return await response.json();
};
let currentPage = 1;
let numPage = 1;
const renderPostsPage = async () => {
  const main = document.querySelector('main');
  main.style.minHeight = '2000px';
  index_preload.show();
  const posts = await getArticles(numPage);
  main.style.minHeight = 'auto';
  index_preload.remove();
  const articlesList = posts.data;
  const page = (0,createPage/* createPage */.a)(articlesList, numPage);
  let navBtnFirst = page.navigationBtnFirst;
  let navBtnSecond = page.navigationBtnSecond;
  let navBtnThird = page.navigationBtnThird;
  navBtnFirst.textContent = currentPage;
  navBtnSecond.textContent = currentPage + 1;
  navBtnThird.textContent = currentPage + 2;
  const paginationIncrease = async e => {
    e.preventDefault();
    if (navBtnFirst.classList.contains('nav__btn_active')) {
      navBtnFirst.classList.remove('nav__btn_active');
      numPage++;
    }
    if (navBtnSecond.classList.contains('nav__btn_active')) {
      navBtnSecond.classList.remove('nav__btn_active');
      numPage++;
    }
    if (navBtnThird.classList.contains('nav__btn_active')) {
      navBtnThird.classList.remove('nav__btn_active');
      numPage++;
      currentPage = numPage;
    }
    const blog = document.querySelector('.blog');
    blog.remove();
    await renderPostsPage();
    (0,showArticle/* showArticle */.k)();
  };
  const paginationDecrease = async e => {
    e.preventDefault();
    if (numPage === 1) {
      return;
    }
    if (currentPage === numPage) {
      currentPage -= 3;
    }
    if (navBtnFirst.classList.contains('nav__btn_active')) {
      navBtnFirst.classList.remove('nav__btn_active');
      numPage--;
    }
    if (navBtnSecond.classList.contains('nav__btn_active')) {
      navBtnSecond.classList.remove('nav__btn_active');
      numPage--;
    }
    if (navBtnThird.classList.contains('nav__btn_active')) {
      navBtnThird.classList.remove('nav__btn_active');
      numPage--;
    }
    const blog = document.querySelector('.blog');
    blog.remove();
    await renderPostsPage();
    (0,showArticle/* showArticle */.k)();
  };
  const nextBtn = document.querySelector('.nav__next');
  const prevBtn = document.querySelector('.nav__prev');
  nextBtn.addEventListener('click', paginationIncrease);
  prevBtn.addEventListener('click', paginationDecrease);
};

/***/ }),

/***/ 50:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ showArticle)
/* harmony export */ });
const getPost = async postId => {
  const response = await fetch(`https://gorest.co.in/public-api/posts${postId}`);
  return await response.json();
};
const getUser = async userId => {
  const response = await fetch(`https://gorest.co.in/public/v1/users?id=${userId}`);
  return await response.json();
};
const createArticlePage = post => {
  const article = document.createElement('article');
  article.classList.add('article');
  let docTitle = '';
  post.map(async item => {
    docTitle = item.title;
    const userId = item.user_id;
    const userData = await getUser(userId);
    const user = userData.data;
    let userName;
    if (user.length === 0) {
      userName = 'Информация отсутствует';
    } else {
      userName = user[0].name;
    }
    const breadcrumbs = document.querySelector('.breadcrumbs');
    let li = breadcrumbs.children[2];
    const link = document.createElement('a');
    link.classList.add('breadcrumbs__link');
    link.href = 'blog.html';
    link.textContent = li.textContent;
    li.textContent = '';
    li.append(link);
    li = document.createElement('li');
    li.classList.add('breadcrumbs__item');
    li.textContent = `${docTitle}`;
    breadcrumbs.append(li);
    article.innerHTML = `
      <h1 class="visually-hidden">${item.title}</h1>
        <section class="article__body">
          <div class="container">
            <h2 class="article__title">${item.title}</h2>
            <p class="article__text">${item.body}</p>
            <div class="article__details">
              <a class="article__list" href="blog.html">
                <svg class="article__img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" fill="#2D2D2D"/>
                </svg>
                К списку статей
              </a>
              <a class="article__author" href="mailto:">${userName}</a>
            </div>
          </div>
        </section>
 `;
  });
  return {
    article,
    docTitle
  };
};
const showArticle = () => {
  const postList = document.querySelector('.blog__list');
  postList.addEventListener('click', async e => {
    e.preventDefault();
    const target = e.target;
    const postLink = target.closest('.blog__link');
    const url = new URL(postLink.href);
    const postId = url.search;
    const postData = await getPost(postId);
    const post = postData.data;
    const {
      article,
      docTitle
    } = createArticlePage(post);
    const blog = document.querySelector('.blog');
    blog.remove();
    const main = document.querySelector('main');
    main.append(article);
    window.history.pushState('', docTitle, url.href);
  });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__(631);
/******/ 	__webpack_require__(328);
/******/ 	__webpack_require__(19);
/******/ 	var __webpack_exports__ = __webpack_require__(50);
/******/ 	
/******/ })()
;