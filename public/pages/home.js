import classnames from 'classnames'
import { useState } from 'preact/hooks'

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
	const { name, pic, job, description, reverse } = props
	const aboutClass = classnames(`about-card`, { 'about-card-reverse': reverse })
	return <div class={aboutClass}>
		{!reverse && <img src={pic} class="about-card-pic" />}
		<div>
			<div class="about-card-title">{name}</div>
			<div class="about-card-job">{job}</div>
			<div class="about-card-description">{description}</div>
		</div>
		{reverse && <img src={pic} class="about-card-pic" />}
	</div>
}

export default () => {
	const [featureCardType, setFeatureCardType] = useState('play')

	return (
		<>
			<section class='page-center'>
				<div class="home-row1">
					<Card center={false} link="/traditional-cards">
						<div class="container-intro">
							<div>
								<div class="container-intro-title">Welcome to the world of</div>
								<div class="container-intro-name">Dero & Dragons</div>
								<div class="container-intro-text">
									We are building a fantasy world of trading card within the
									Dero ecosystem. You can buy packs and create unique NFT cards.
								</div>
							</div>
							<div class="container-intro-img" />
						</div>
					</Card>
					<Card title="Roadmap" icon="check-list" link="/roadmap">
						<div class="container-text">Project overview and where we are going from here.</div>
					</Card>
				</div>
				<div class="home-row2">
					<Card title="CLI" icon="command" link="/cli">
						<div class="container-text">
							Interact with DERO Smart Contract.
							Buy packs & mint unique cards on the DERO blockchain.
						</div>
					</Card>
					<Card title="Docs" icon="book" link="/docs">
						<div class="container-text">New? You should probably check out the docs.</div>
					</Card>
					<Card title="About" icon="about-us" link="/#about">
						<div class="container-text">Learn more about us and discover who are among the Dero community.</div>
					</Card>
				</div>
			</section >
			<section class="page-center">
				<div class="center">
					<div class="title">Community</div>
					<div class="title-sub center">Join the Discord server and be part of building a new decentralized trading card community.</div>
					<a href="https://discord.gg/m5EzHcCjdU" target="_blank" class="discord-button">
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
					<ul>
						<li>Buy packs of play cards</li>
						<li>Create your own unique play card or NFT hero card</li>
						<li>On chain market transactions to sell cards</li>
						<li>Transfer card to others</li>
					</ul>
					<div class="feature-tab">
						<div class={featureCardType === 'play' ? `active` : ``} onClick={() => setFeatureCardType('play')}>Play Cards</div>
						<div class={featureCardType === 'hero' ? `active` : ``} onClick={() => setFeatureCardType('hero')}>Hero Cards</div>
					</div>
					{featureCardType === 'play' && <div>
						<div class="feature-cards-description">Collect all playable trading cards.</div>
						<div class="feature-cards">
							<img src="/img/temp/tcard_1.jpg" />
							<img src="/img/temp/tcard_2.jpg" />
							<img src="/img/temp/tcard_3.jpg" />
						</div>
					</div>}
					{featureCardType === 'hero' && <div>
						<div class="feature-cards-description">Unique NFT hero trading cards.</div>
						<div class="feature-cards">
							<img src="/img/temp/dcard_1.jpg" />
							<img src="/img/temp/dcard_2.jpg" />
							<img src="/img/temp/dcard_3.jpg" />
						</div>
					</div>}
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
						job="The Coder"
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
						job="The Artist"
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
