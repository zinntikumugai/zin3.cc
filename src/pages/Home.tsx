import { keyframes } from '@emotion/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { sections } from '../data/sections';
import { LinkCard } from '../components/LinkCard';

const floaty = keyframes`
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-6px); }
`;

export function Home() {
	return (
		<Box>
			<title>zin3.cc</title>
			<meta
				name="description"
				content="じんさん（zin3）のポートフォリオ — SNS・ブログ・リポジトリ・LT実績・作品まとめ"
			/>

			<Box sx={{ textAlign: 'center', pt: '44px', pb: '40px' }}>
				<Box
					component="img"
					src="/profile.svg"
					alt="じんさんのアイコン"
					sx={{
						width: 104,
						height: 104,
						borderRadius: '50%',
						objectFit: 'cover',
						border: '3px solid',
						borderColor: 'background.paper',
						boxShadow: (t) =>
							`0 0 0 2px ${t.palette.accent}, 0 10px 30px -10px rgba(43,150,165,.4)`,
						animation: `${floaty} 5s ease-in-out infinite`
					}}
				/>
				<Typography
					component="h1"
					sx={{
						mt: '20px',
						mb: '6px',
						fontSize: 44,
						fontWeight: 900,
						letterSpacing: '-.02em',
						color: 'text.primary',
						fontFamily: "'Space Grotesk', 'Noto Sans JP', sans-serif"
					}}
				>
					zin3
				</Typography>
				<Typography sx={{ m: 0, fontSize: 15, color: 'text.secondary' }}>
					じんさん ／ ITフリーランス（バックエンド・インフラ）／ VRChat 2018〜
				</Typography>
			</Box>

			{sections.map((sec) => (
				<Box key={sec.name} sx={{ mb: '34px' }}>
					<Typography
						component="h2"
						sx={{
							m: 0,
							mb: '14px',
							fontSize: 13,
							fontWeight: 700,
							letterSpacing: '.14em',
							textTransform: 'uppercase',
							color: 'text.secondary'
						}}
					>
						{sec.name}
					</Typography>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
							gap: '14px'
						}}
					>
						{sec.items.map((item) => (
							<LinkCard key={item.name} item={item} />
						))}
					</Box>
				</Box>
			))}
		</Box>
	);
}
