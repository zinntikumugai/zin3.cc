import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SiApple, SiGoogleplay } from 'react-icons/si';

const shots = [
	'スクリーンショット①（後で差し替え）',
	'スクリーンショット②（後で差し替え）',
	'スクリーンショット③（後で差し替え）',
	'スクリーンショット④（後で差し替え）'
];

const features = [
	{ title: '（機能①のタイトル）', body: '（機能の説明を記入）' },
	{ title: '（機能②のタイトル）', body: '（機能の説明を記入）' },
	{ title: '（機能③のタイトル）', body: '（機能の説明を記入）' }
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
				content="zin3.io製のFlutterアプリ UniPostor（iOS / Android 対応）の紹介ページ。"
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
					（アプリのキャッチコピーを記入 — 例：投稿をもっとかんたんに）
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
					href="#appstore-url"
					icon={<SiApple size={24} color="#fff" />}
					small="Download on the"
					big="App Store"
					glow="rgba(43,150,165,.6)"
				/>
				<Box component="span" sx={{ alignSelf: 'center', fontSize: 12, color: 'text.secondary' }}>
					※ App StoreのURLは後で差し替え
				</Box>
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
					{shots.map((label) => (
						<Box
							key={label}
							sx={{
								aspectRatio: '9 / 19.5',
								bgcolor: 'chip',
								border: '1px dashed',
								borderColor: 'bd2',
								borderRadius: '22px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								textAlign: 'center',
								p: '16px',
								boxSizing: 'border-box'
							}}
						>
							<Box component="span" sx={{ fontSize: 12, lineHeight: 1.7, color: 'text.secondary' }}>
								{label}
							</Box>
						</Box>
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
