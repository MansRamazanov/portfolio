import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Привет, меня зовут <em>Мансур</em>
					</strong>
					<br />я начинающий frontend разработчик
				</h1>
				<a href="#!" className="btn">
					CV
				</a>
			</div>
		</header>
	);
}

export default Header;