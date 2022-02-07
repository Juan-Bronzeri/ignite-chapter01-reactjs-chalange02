import { GenreResponseProps } from '../App'
import { Button } from './Button'

interface ISideBar {
	onButtonClick: (value: number) => void
	genres: GenreResponseProps[]
	selectedGenreId: number
}

export function SideBar({ onButtonClick, genres, selectedGenreId }: ISideBar) {
	function handleClickButton(id: number) {
		onButtonClick(id)
	}

	return (
		<nav className='sidebar'>
			<span>
				Watch<p>Me</p>
			</span>

			<div className='buttons-container'>
				{genres.map((genre) => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => handleClickButton(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</div>
		</nav>
	)
}
