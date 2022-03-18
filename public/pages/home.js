import classnames from 'classnames'

const Card = (props) => {
	const { link, title, icon, children, center = true } = props
	const cardClass = classnames(`card`, { 'card-center': center })
	return <a href={link} class={cardClass}>
		{icon && <div class={`card-icon icon-${icon}`} />}
		{title && <div class="card-title">{title}</div>}
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
			<section>
				<div class="home-row1">
					<Card center={false} link="/cards">
						<div class="card-cards">
							<div class="card-cards-title">Welcome to the world of DERO CARD</div>
							<div class="card-cards-text">
								We are building a fantasy world of trading card within the
								Dero ecosystem. When you buy packs or mint new unique cards
								you are the only with it.
							</div>
							<div class="card-cards-img" />
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
			<section>
				<div class="title">Community</div>
				<div class="title-sub">Join the Discord server and be part of building a new decentralized trading card community.</div>
				<a href="#" class="discord-button">
					<div class="icon-discord" />
					Discord
				</a>
			</section>
			<section>
				<div class="title">Features</div>
			</section>
			<section>
				<div class="title" id="about">About</div>
				<div class="title-sub">We're just two guy who believe in decentralization.</div>
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
