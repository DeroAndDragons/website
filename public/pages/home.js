import classnames from 'classnames'

const Card = (props) => {
	const { link, title, icon, children, center = true } = props
	const cardClass = classnames(`container`, { 'container-center': center })
	return <a href={link} class={cardClass}>
		{icon && <div class={`container-icon icon-${icon}`} />}
		{title && <div class="container-title">{title}</div>}
		{children}
	</a>
}

const AboutCard = (props) => {
	const { name, pic, description, reverse } = props
	const aboutClass = classnames(`about-card`, { 'about-card-reverse': reverse })
	return <div class={aboutClass}>
		{!reverse && <img src={pic} class="about-card-pic" />}
		<div>
			<div class="about-card-title">{name}</div>
			<div class="about-card-description">{description}</div>
		</div>
		{reverse && <img src={pic} class="about-card-pic" />}
	</div>
}

export default () => {
	return (
		<>
			<section class='page-center'>
				<div class="home-row1">
					<Card center={false} link="/cards">
						<div class="container-intro">
							<div class="container-intro-title">Welcome to the world of<br /> Dero & Dragons</div>
							<div class="container-intro-text">
								We are building a fantasy world of trading card within the
								Dero ecosystem. You can buy packs and create unique NFT cards.
							</div>
							<div class="container-intro-img" />
						</div>
					</Card>
					<Card title="Roadmap" icon="check-list" link="/roadmap">
						Project overview and where we are going from here.
					</Card>
				</div>
				<div class="home-row2">
					<Card title="CLI" icon="command" link="/cli">
						Interact with DERO Smart Contract.
						Buy packs & mint unique cards on the DERO blockchain.
					</Card>
					<Card title="Guides" icon="book" link="/guides">
						New? You should probably check out these guides.
					</Card>
					<Card title="About" icon="about-us" link="/#about">
						Learn more about us and discover who are among the Dero community.
					</Card>
				</div>
			</section >
			<section class="page-center">
				<div class="center">
					<div class="title">Community</div>
					<div class="title-sub center">Join the Discord server and be part of building a new decentralized trading card community.</div>
					<a href="https://discord.gg/m5EzHcCjdU" class="discord-button">
						<div class="icon-discord" />
						Discord
					</a>
				</div>
			</section>
			<section class="feature-section">
				<div class="page-center">
					<div class="feature-title">Features</div>
					<div class="feature-title-sub">
						One of the first DApp of the DERO blockchain.
					</div>
					<div class="feature-tab">
						<div>Traditional NFT Cards</div>
						<div>Dynamic NFT Stats Cards</div>
					</div>
				</div>
			</section>
			<section id="about" class="page-center">
				<div>
					<div class="title">About</div>
					<div class="title-sub">
						We're just two guys who believe in decentralization and happened to
						have skills that can be merge to create dApps for everyone.
					</div>
				</div>
				<div class="about">
					<AboutCard
						name="g45t345rt"
						description={`
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					`}
						pic="/img/pics/g45t345rt.jpg"
					/>
					<AboutCard
						reverse
						name="JoyRaptor"
						description={`
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				`}
						pic="/img/pics/joyraptor.jpg"
					/>
				</div>
			</section>
		</>
	)
} 
