import project01 from "./../img/projects/study_mini.png";
import project01Big from "./../img/projects/study.png";

import project02 from "./../img/projects/travel_mini.png"
import project02Big from "./../img/projects/travel.png";

import project03 from "./../img/projects/3D_mini.png";
import project03Big from "./../img/projects/3D.png";

import project04 from "./../img/projects/sandbox_mini.png";
import project04Big from "./../img/projects/sandbox.png";

import project05 from "./../img/projects/burger_mini.png";
import project05Big from "./../img/projects/burger.png";

import project06 from "./../img/projects/3D_scroll_mini.png";
import project06Big from "./../img/projects/3D_scroll.png";

import project07 from "./../img/projects/mesto_mini.png";
import project07Big from "./../img/projects/mesto.png";

const projects = [
	{
		title: 'Научиться учиться',
		web: 'https://how-to-learn-bootcamp-ashen.vercel.app/',
		about: 'Это мой первый проект. В нём я реализовал верстку сайта с помощью HTML и CSS. Выполняя данный проект я познакомился с методологией БЭМ, научился верстать с помощью flex-контейнеров, позиционировать с помощью вырывания элемента из потока, добавлять анимации и позиционировать элементы по оси z',
		img: project01,
		imgBig: project01Big,
	},
	{
		title: 'Путешествие по России',
		web: 'https://mansramazanov.github.io/russian-travel-bootcamp/',
		img: project02,
		imgBig: project02Big,
		about: 'В данном проекте я реализовал вёрстку при помощи HTML и CSS. Я применил такие технологии как верстка с помощью grid контейнеров, адаптивная верстка при помощи media запросов, трансформация ссылок при наведении курсора на них и верстка с помощью flex контейнеров ',
	},
	{
		title: 'Mesto',
		web: 'https://mansramazanov.github.io/mesto-project-bootcamp/',
		img: project07,
		imgBig: project07Big,
		about: 'В данном проекте я реализовал вёрстку при помощи HTML и CSS, а также использовал JavaScript и обращение к серверу при помощи API. Я применил такие технологии как адаптивная вёрстка. Использование flex- и grid- контейнеров. Добавление и удаление карточек с сервера. Загрузка данных профиля и аватара с сервера. Изменение данных профиля и аватара на сервере',
	},
	{
		title: '3D Website',
		web: 'https://mansramazanov.github.io/learn3D/',
		img: project03,
		imgBig: project03Big,
		about: 'В данном проекте я реализовал вёрстку при помощи HTML и CSS, а также использовал JavaScript. Ключевой особенностью данного проекта является реализация эффекта глубины на сайте посредством 3D перспективы. Отслеживание положения мышки и дождь реализованы про помощи JavaScript',
	},
	{
		title: 'Deep Scroll',
		web: 'https://3-d-scroll-xi.vercel.app/',
		img: project06,
		imgBig: project06Big,
		about: 'В этом проекте я создал сайт с 3D анимацией скролла, используя возможности современного HTML, CSS и JavaScript. Я разработал модель движения слайдов в глубину, поработал над кастомной анимацией, плавностью и оформил композицию с помощью CSS.',
	},
	{
		title: 'React sandbox',
		web: 'https://scroll-website-livid.vercel.app/',
		img: project04,
		imgBig: project04Big,
		about: 'Это песочница с маленькими React приложениями',
	},
	{
		title: 'Stellar Burger',
		web: 'https://react-stellar-burger-kappa.vercel.app/',
		img: project05,
		imgBig: project05Big,
		about: 'Над этим проектом я сейчас работаю. Он написан на React JS. Сейчас я нахожусь на этапе подключения redux к проекту и реализации drag-n-drop, дальше я хочу типизировать все блоки и покрыть тестами все редьюсеры в проекте. Ссылка на гит:',
		gitHubLink: 'https://github.com/MansRamazanov/react-stellar-burger.git',
	},

];

export {projects}