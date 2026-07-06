import { useEffect } from 'react';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useColorMode } from '../theme/ColorModeProvider';

interface NavItem {
	label: string;
	to: string;
}

const NAV: NavItem[] = [
	{ label: 'ホーム', to: '/' },
	{ label: 'LT実績', to: '/lt' }
];

export function Layout() {
	const { pathname } = useLocation();
	const { label, cycle } = useColorMode();

	// ページ遷移ごとに先頭へスクロール（デザインの go() 相当）。
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
			<Container
				maxWidth={false}
				sx={{ maxWidth: 960, px: '32px', pb: '48px', boxSizing: 'border-box' }}
			>
				<Box
					component="header"
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						py: '20px',
						gap: '16px',
						flexWrap: 'wrap'
					}}
				>
					<Box
						component={RouterLink}
						to="/"
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							textDecoration: 'none'
						}}
					>
						<Box
							component="img"
							src="/favicon.png"
							alt="zin3 logo"
							sx={{ width: 28, height: 28, display: 'block' }}
						/>
						<Box component="span" sx={{ fontWeight: 900, fontSize: 17, color: 'text.primary' }}>
							zin3.cc
						</Box>
					</Box>

					<Box component="nav" sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						{NAV.map((item) => {
							const active = pathname === item.to;
							return (
								<Box
									key={item.to}
									component={RouterLink}
									to={item.to}
									aria-current={active ? 'page' : undefined}
									sx={{
										fontSize: 13.5,
										fontWeight: active ? 700 : 500,
										color: active ? 'text.primary' : 'text.secondary',
										textDecoration: 'none',
										padding: '8px 14px',
										borderRadius: '99px',
										bgcolor: active ? 'chip' : 'transparent',
										transition: 'color .2s',
										'&:hover': { color: 'text.primary' }
									}}
								>
									{item.label}
								</Box>
							);
						})}
						<Box
							component="button"
							type="button"
							onClick={cycle}
							sx={{
								font: 'inherit',
								fontSize: 12.5,
								fontWeight: 500,
								color: 'text.secondary',
								background: 'none',
								border: '1px solid',
								borderColor: 'bd',
								borderRadius: '99px',
								padding: '8px 14px',
								cursor: 'pointer'
							}}
						>
							{label}
						</Box>
					</Box>
				</Box>

				<Outlet />

				<Box
					component="footer"
					sx={{
						textAlign: 'center',
						pt: '32px',
						fontSize: 12.5,
						color: 'text.secondary'
					}}
				>
					©zin3 2024
				</Box>
			</Container>
		</Box>
	);
}
