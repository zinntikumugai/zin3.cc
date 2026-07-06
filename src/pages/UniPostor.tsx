import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SiApple, SiGoogleplay } from 'react-icons/si';

const APP_STORE_URL = 'https://apps.apple.com/jp/app/uni-poster/id6747512031';

// App Store 掲載のスクリーンショット（mzstatic は末尾のサイズ指定で解像度を変えられる）。
const SHOT_SIZE = '540x1170bb.webp';
const shots = [
	'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/2b/ce/85/2bce854c-f5c6-2c34-1a57-c0b4585bf1c0/Simulator_Screenshot_-_iPhone_16_Pro_Max_-_2025-08-28_at_23.04.16.png',
	'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/34/92/b0/3492b079-3fda-625e-607a-69535b5c76d4/Simulator_Screenshot_-_iPhone_16_Pro_Max_-_2025-08-28_at_23.04.23.png',
	'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1c/b8/e0/1cb8e030-982f-9b05-0621-5a0b5ac39923/Simulator_Screenshot_-_iPhone_16_Pro_Max_-_2025-08-28_at_23.04.35.png'
].map((base) => `${base}/${SHOT_SIZE}`);

const features = [
	{
		title: '一括投稿',
		body: '複数のSNSプラットフォームへワンステップで同時投稿。アプリを切り替える手間がありません。'
	},
	{
		title: '対応プラットフォーム',
		body: 'X (Twitter) / Misskey / Bluesky / Mastodon / Nostr に対応。'
	},
	{
		title: 'iOS / Android 対応',
		body: 'zin3.io製のFlutterアプリ。iOS・Android どちらの端末でも使えます。'
	}
];

const sectionHeading = {
	m: 0,
	mb: '14px',
	fontSize: 13,
	fontWeight: 700,
	letterSpacing: '.14em',
	textTransform: 'uppercase',
	color: 'text.secondary'
} as const;

export function UniPostor() {
	return (
		<Box>
			<title>UniPostor — zin3.cc</title>
			<meta
				name="description"
				content="複数のSNS（X / Misskey / Bluesky / Mastodon / Nostr）に一括投稿できる zin3.io製アプリ UniPostor。iOS / Android 対応。"
			/>

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
						color: '#3ab55d',
						bgcolor: 'rgba(58,181,93,.13)',
						borderRadius: '99px',
						padding: '4px 12px',
						mb: '14px'
					}}
				>
					Create ／ アプリ
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
					UniPostor
				</Typography>
				<Typography sx={{ m: 0, fontSize: 15, lineHeight: 1.9, color: 'text.secondary' }}>
					複数のSNSに一括投稿できるアプリ。お知らせなどを複数のアプリを切り替えて投稿するのは不便——本アプリならワンステップで同時投稿できます。
					<br />
					zin3.io製・Flutterアプリ。iOS / Android 両対応。
				</Typography>
			</Box>

			<Box
				sx={{ display: 'flex', gap: '14px', flexWrap: 'wrap', mb: '34px', alignItems: 'center' }}
			>
				<StoreButton
					href="https://play.google.com/store/apps/details?id=cc.zin3.uni_poster"
					icon={<SiGoogleplay size={24} color="#fff" />}
					small="GET IT ON"
					big="Google Play"
					glow="rgba(58,181,93,.6)"
				/>
				<StoreButton
					href={APP_STORE_URL}
					icon={<SiApple size={24} color="#fff" />}
					small="Download on the"
					big="App Store"
					glow="rgba(43,150,165,.6)"
				/>
			</Box>

			<Box sx={{ mb: '34px' }}>
				<Typography component="h2" sx={sectionHeading}>
					Screenshots
				</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
						gap: '14px'
					}}
				>
					{shots.map((src, i) => (
						<Box
							key={src}
							component="img"
							src={src}
							alt={`UniPostor スクリーンショット${i + 1}`}
							loading="lazy"
							sx={{
								width: '100%',
								aspectRatio: '9 / 19.5',
								objectFit: 'cover',
								bgcolor: 'chip',
								border: '1px solid',
								borderColor: 'bd',
								borderRadius: '22px',
								display: 'block'
							}}
						/>
					))}
				</Box>
			</Box>

			<Box sx={{ mb: '34px' }}>
				<Typography component="h2" sx={sectionHeading}>
					Features
				</Typography>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
						gap: '14px'
					}}
				>
					{features.map((f) => (
						<Box
							key={f.title}
							sx={{
								bgcolor: 'background.paper',
								border: '1px solid',
								borderColor: 'bd',
								borderRadius: '16px',
								p: '18px 20px'
							}}
						>
							<Box
								component="span"
								sx={{
									display: 'block',
									fontSize: 15,
									fontWeight: 700,
									color: 'text.primary',
									mb: '6px'
								}}
							>
								{f.title}
							</Box>
							<Box
								component="span"
								sx={{ display: 'block', fontSize: 13, lineHeight: 1.7, color: 'text.secondary' }}
							>
								{f.body}
							</Box>
						</Box>
					))}
				</Box>
			</Box>

			<Typography sx={{ m: 0, fontSize: 13, color: 'text.secondary' }}>
				開発：
				<Box
					component="a"
					href="https://zin3.io/"
					target="_blank"
					rel="noopener noreferrer"
					sx={{ color: 'accent', fontWeight: 700, textDecoration: 'none' }}
				>
					zin3.io ↗
				</Box>
				{' — 技術で問題が潤滑される世界を作る'}
			</Typography>
		</Box>
	);
}

function StoreButton({
	href,
	icon,
	small,
	big,
	glow
}: {
	href: string;
	icon: React.ReactNode;
	small: string;
	big: string;
	glow: string;
}) {
	return (
		<Box
			component="a"
			href={href}
			{...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '12px',
				bgcolor: '#1a1721',
				borderRadius: '14px',
				padding: '12px 22px',
				textDecoration: 'none',
				transition: 'transform .2s, box-shadow .2s',
				'&:hover': { transform: 'translateY(-2px)', boxShadow: `0 12px 26px -12px ${glow}` }
			}}
		>
			{icon}
			<Box component="span">
				<Box
					component="span"
					sx={{ display: 'block', fontSize: 10.5, color: 'rgba(255,255,255,.7)' }}
				>
					{small}
				</Box>
				<Box
					component="span"
					sx={{ display: 'block', fontSize: 16, fontWeight: 700, color: '#fff' }}
				>
					{big}
				</Box>
			</Box>
		</Box>
	);
}
