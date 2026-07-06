import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { playerEmbed, slideThumb, talks } from '../data/talks';

export function Lt() {
	const [open, setOpen] = useState<number>(-1);
	const toggle = (i: number) => setOpen((cur) => (cur === i ? -1 : i));

	return (
		<Box>
			<title>LT実績 — zin3.cc</title>
			<meta name="description" content="じんさん（zin3）がイベントで登壇したLTとスライドの記録。" />

			<Box
				sx={{
					pt: '36px',
					pb: '28px',
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'space-between',
					gap: '20px',
					flexWrap: 'wrap'
				}}
			>
				<Box>
					<Typography
						component="h1"
						sx={{
							m: 0,
							mb: '8px',
							fontSize: 40,
							fontWeight: 900,
							letterSpacing: '-.02em',
							color: 'text.primary'
						}}
					>
						LT実績
					</Typography>
					<Typography sx={{ m: 0, fontSize: 14.5, color: 'text.secondary' }}>
						イベントで登壇したLTとスライドの記録。タイトルをクリックするとその場で再生できます。
					</Typography>
				</Box>
				<Box
					component="a"
					href="https://speakerdeck.com/zin3"
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						flex: 'none',
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
						fontSize: 13,
						fontWeight: 700,
						color: 'text.primary',
						textDecoration: 'none',
						border: '1px solid',
						borderColor: 'bd',
						bgcolor: 'background.paper',
						borderRadius: '99px',
						padding: '10px 16px',
						transition: 'transform .2s',
						'&:hover': { transform: 'translateY(-2px)' }
					}}
				>
					Speaker Deck @zin3 ↗
				</Box>
			</Box>

			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				{talks.map((t, i) => {
					const isOpen = open === i;
					return (
						<Box
							key={t.id}
							sx={{
								bgcolor: 'background.paper',
								border: '1px solid',
								borderColor: 'bd',
								borderRadius: '18px',
								overflow: 'hidden',
								transition: 'box-shadow .25s',
								'&:hover': { boxShadow: '0 14px 34px -18px rgba(43,150,165,.5)' }
							}}
						>
							<Box
								component="button"
								type="button"
								onClick={() => toggle(i)}
								aria-expanded={isOpen}
								sx={{
									width: '100%',
									font: 'inherit',
									textAlign: 'left',
									background: 'none',
									border: 0,
									display: 'flex',
									gap: '18px',
									p: '16px',
									cursor: 'pointer',
									alignItems: 'center',
									flexWrap: 'wrap',
									color: 'text.primary'
								}}
							>
								<Box
									component="img"
									src={slideThumb(t.id)}
									alt={`${t.title} スライド1枚目`}
									loading="lazy"
									sx={{
										width: 212,
										height: 119,
										objectFit: 'cover',
										borderRadius: '10px',
										border: '1px solid',
										borderColor: 'bd',
										flex: 'none',
										display: 'block'
									}}
								/>
								<Box sx={{ minWidth: 240, flex: 1 }}>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											gap: '8px',
											flexWrap: 'wrap',
											mb: '6px'
										}}
									>
										<Box
											component="span"
											sx={{
												font: "600 11.5px 'JetBrains Mono', monospace",
												color: 'accent'
											}}
										>
											{t.date}
										</Box>
										<Box
											component="span"
											sx={{
												fontSize: 11.5,
												fontWeight: 700,
												color: '#7f5fb5',
												bgcolor: 'rgba(127,95,181,.12)',
												borderRadius: '99px',
												padding: '3px 10px'
											}}
										>
											{t.event}
										</Box>
									</Box>
									<Typography
										component="h3"
										sx={{
											m: 0,
											mb: '6px',
											fontSize: 18.5,
											fontWeight: 700,
											color: 'text.primary',
											lineHeight: 1.35
										}}
									>
										{t.title}
									</Typography>
									<Typography
										sx={{ m: 0, fontSize: 13, lineHeight: 1.65, color: 'text.secondary' }}
									>
										{t.description}
									</Typography>
								</Box>
								<Box
									component="span"
									aria-hidden
									sx={{
										flex: 'none',
										width: 34,
										height: 34,
										borderRadius: '50%',
										border: '1px solid',
										borderColor: 'bd',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										color: 'text.secondary',
										fontSize: 13,
										transition: 'transform .25s',
										transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
									}}
								>
									▾
								</Box>
							</Box>

							{isOpen && (
								<Box sx={{ px: '16px', pb: '16px' }}>
									<Box
										sx={{
											position: 'relative',
											width: '100%',
											pt: '56.25%',
											borderRadius: '12px',
											overflow: 'hidden',
											bgcolor: '#0f1115'
										}}
									>
										<Box
											component="iframe"
											src={playerEmbed(t.id)}
											title={t.title}
											allowFullScreen
											sx={{
												position: 'absolute',
												inset: 0,
												width: '100%',
												height: '100%',
												border: 0
											}}
										/>
									</Box>
									<Box
										sx={{
											display: 'flex',
											gap: '14px',
											mt: '10px',
											fontSize: 12.5,
											flexWrap: 'wrap'
										}}
									>
										<Box
											component="a"
											href={t.url}
											target="_blank"
											rel="noopener noreferrer"
											sx={{ color: 'accent', fontWeight: 700, textDecoration: 'none' }}
										>
											Speaker Deckで見る ↗
										</Box>
										{t.eventUrl && (
											<Box
												component="a"
												href={t.eventUrl}
												target="_blank"
												rel="noopener noreferrer"
												sx={{ color: '#7f5fb5', fontWeight: 700, textDecoration: 'none' }}
											>
												イベントページ（connpass）↗
											</Box>
										)}
									</Box>
								</Box>
							)}
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
