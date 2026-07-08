import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Tweet } from 'react-tweet';
import { useColorMode } from '../theme/ColorModeProvider';

const OG_IMAGE = 'https://pbs.twimg.com/media/GtKVo2tbMAA0Lfl?format=jpg&name=medium';
const TWEET_ID = '1932771723914719349';

export function Poe() {
	const { effective } = useColorMode();
	return (
		<Box sx={{ maxWidth: 760, mx: 'auto' }}>
			<title>PoE+++++ — zin3.cc</title>
			<meta
				name="description"
				content="Power over Ethernet +++++ — 100V/15A＝1500Wを流せる（実在しない）規格のネタTシャツ。"
			/>
			<meta property="og:title" content="PoE+++++ — zin3.cc" />
			<meta property="og:image" content={OG_IMAGE} />
			<meta property="og:type" content="website" />

			<Box
				component={RouterLink}
				to="/"
				sx={{
					display: 'inline-flex',
					alignItems: 'center',
					gap: '8px',
					mt: '20px',
					fontSize: 13.5,
					fontWeight: 700,
					color: 'text.secondary',
					textDecoration: 'none',
					'&:hover': { color: 'text.primary' }
				}}
			>
				← ホームに戻る
			</Box>

			<Box sx={{ py: '26px' }}>
				<Box
					component="span"
					sx={{
						display: 'inline-block',
						font: "600 11.5px 'JetBrains Mono', monospace",
						color: '#ff9500',
						bgcolor: 'rgba(255,149,0,.13)',
						borderRadius: '99px',
						padding: '4px 12px',
						mb: '14px'
					}}
				>
					Create ／ ネタTシャツ
				</Box>
				<Typography
					component="h1"
					sx={{
						m: 0,
						mb: '10px',
						fontSize: 44,
						fontWeight: 900,
						letterSpacing: '-.02em',
						color: 'text.primary',
						fontFamily: "'Space Grotesk', 'Noto Sans JP', sans-serif"
					}}
				>
					PoE+++++
				</Typography>
				<Typography sx={{ m: 0, fontSize: 15, color: 'text.secondary' }}>
					Power over Ethernet +++++ — 100V/15A＝1500Wを流せる（実在しない）規格のTシャツ
				</Typography>
			</Box>

			<Box
				component="img"
				src={OG_IMAGE}
				alt="PoE+++++ Tシャツ"
				sx={{
					width: '100%',
					borderRadius: '20px',
					display: 'block',
					border: '1px solid',
					borderColor: 'bd'
				}}
			/>

			<Box sx={{ py: '28px', fontSize: 15.5, lineHeight: 2, color: 'text.primary' }}>
				<Typography sx={{ m: 0, mb: '12px', fontSize: 'inherit', lineHeight: 'inherit' }}>
					LANケーブルを使って電力を供給するPoE。でも今の時代その程度で足りますか？足りませんよね。
				</Typography>
				<Typography sx={{ m: 0, fontSize: 'inherit', lineHeight: 'inherit' }}>
					ということで100Vで流せるようにしておきました。
					<Box component="span" sx={{ color: 'text.secondary' }}>
						（PoEで100Vは実在しません）
					</Box>
				</Typography>
			</Box>

			<Box
				data-theme={effective}
				sx={{
					mt: '20px',
					display: 'flex',
					justifyContent: 'center',
					'& .react-tweet-theme': { margin: 0, maxWidth: '100%' }
				}}
			>
				<Tweet id={TWEET_ID} />
			</Box>

			<Box sx={{ pt: '30px', pb: '8px' }}>
				<Typography
					component="h2"
					sx={{ m: 0, mb: '14px', fontSize: 16, fontWeight: 700, color: 'text.primary' }}
				>
					購入はこちらから
				</Typography>
				<Box sx={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
					<ShopButton
						href="https://zin3.booth.pm/"
						logo="/icons/booth-logo.png"
						alt="BOOTH"
						glow="rgba(252,72,90,.5)"
					/>
					<ShopButton
						href="https://suzuri.jp/zin3/products"
						logo="/icons/suzuri-logo.png"
						alt="SUZURI"
						glow="rgba(255,25,102,.5)"
					/>
				</Box>
				<Typography sx={{ mt: '16px', mb: 0, fontSize: 13, color: 'text.secondary' }}>
					このネタのLTは{' '}
					<Box
						component={RouterLink}
						to="/lt"
						sx={{ color: 'accent', fontWeight: 700, textDecoration: 'none' }}
					>
						LT実績 →「PoE+++++」
					</Box>{' '}
					から見られます。
				</Typography>
			</Box>
		</Box>
	);
}

function ShopButton({
	href,
	logo,
	alt,
	glow
}: {
	href: string;
	logo: string;
	alt: string;
	glow: string;
}) {
	return (
		<Box
			component="a"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '10px',
				bgcolor: '#ffffff',
				border: '1px solid',
				borderColor: 'bd2',
				borderRadius: '14px',
				padding: '13px 22px',
				textDecoration: 'none',
				transition: 'transform .2s, box-shadow .2s',
				'&:hover': { transform: 'translateY(-2px)', boxShadow: `0 10px 24px -12px ${glow}` }
			}}
		>
			<Box
				component="img"
				src={logo}
				alt={alt}
				sx={{ height: 26, width: 'auto', display: 'block' }}
			/>
		</Box>
	);
}
