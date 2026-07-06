import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { IconType } from 'react-icons';
import {
	SiBluesky,
	SiDiscord,
	SiGithub,
	SiGitlab,
	SiGoogleplay,
	SiMisskey,
	SiSteam,
	SiVrchat,
	SiX
} from 'react-icons/si';
import type { IconKey, LinkItem } from '../data/sections';

const ICONS: Record<IconKey, IconType> = {
	x: SiX,
	bluesky: SiBluesky,
	misskey: SiMisskey,
	discord: SiDiscord,
	steam: SiSteam,
	vrchat: SiVrchat,
	github: SiGithub,
	gitlab: SiGitlab,
	googleplay: SiGoogleplay
};

export function LinkCard({ item }: { item: LinkItem }) {
	const Icon = item.icon ? ICONS[item.icon] : null;

	const linkProps = item.to
		? { component: RouterLink, to: item.to }
		: { component: 'a' as const, href: item.href, target: '_blank', rel: 'noopener noreferrer' };

	return (
		<Box
			{...linkProps}
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '14px',
				p: '15px 18px',
				bgcolor: 'background.paper',
				border: '1px solid',
				borderColor: 'bd',
				borderRadius: '16px',
				textDecoration: 'none',
				cursor: 'pointer',
				transition: 'transform .22s ease, box-shadow .22s ease, border-color .22s ease',
				'&:hover': {
					transform: 'translateY(-3px)',
					boxShadow: `0 16px 32px -14px ${item.color}99`,
					borderColor: `${item.color}66`
				}
			}}
		>
			<Box
				aria-hidden
				sx={{
					flex: 'none',
					width: 42,
					height: 42,
					borderRadius: '12px',
					bgcolor: item.color,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: '#fff',
					fontWeight: 700,
					fontSize: 16,
					overflow: 'hidden'
				}}
			>
				{item.iconImg ? (
					<Box
						component="img"
						src={item.iconImg}
						alt=""
						loading="lazy"
						sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
					/>
				) : Icon ? (
					<Icon size={20} color="#fff" />
				) : (
					item.letter
				)}
			</Box>
			<Box sx={{ minWidth: 0 }}>
				<Typography
					component="span"
					sx={{ display: 'block', fontSize: 15, fontWeight: 700, color: 'text.primary' }}
				>
					{item.name}
				</Typography>
				<Typography
					component="span"
					sx={{
						display: 'block',
						fontSize: 12.5,
						color: 'text.secondary',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis'
					}}
				>
					{item.handle}
				</Typography>
			</Box>
			<Box component="span" sx={{ ml: 'auto', color: 'text.secondary', fontSize: 14 }}>
				↗
			</Box>
		</Box>
	);
}
