
import { Rings } from 'react-loader-spinner';
import s from './Loader.module.css'


export default function Loader ({timeout}) {

		return (
			<div className={s.LoaderBox}>
					<Rings
						heigth='100'
						width='100'
						color='#3f51b5'
						ariaLabel='loading'
						timeout={timeout}
					/>

			</div>
		);

}