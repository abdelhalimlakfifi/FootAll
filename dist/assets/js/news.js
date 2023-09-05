import blogs from '../../News/assets/js/blogs.js';
const News = document.querySelector('#News');
for (let i = blogs.length - 1; i >= (blogs.length - 3); i--) {
    const article = document.createElement('article');
    article.classList.add('flex');
    article.classList.add('justify-between');
    article.classList.add('items-start');
    article.classList.add('w-1/4');
    article.innerHTML = `<div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
        <img class="rounded-t-lg h-44 w-full object-cover" src="./News/assets/img/${blogs[i].img}" alt="" />
    </a>
    <div class="p-5">
        <div class="flex items-center justify-between gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500">${blogs[i].date}</time>
            <a href="#"
                class="relative z-[1] rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">${blogs[i].tag}</a>
        </div>
        <div class="group relative">
            <h3
                class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-center uppercase">
                <a href="#">
                    ${blogs[i].title}
                </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">${blogs[i].description}</p>
            </div>`;
    News.appendChild(article);
};