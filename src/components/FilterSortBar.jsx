/* eslint-disable react/prop-types */
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/components/ui/select';
import { Button } from "@/components/ui/button"

const FilterSortBar = ({ color,setColor,size,setSize, sortOption, setSortOption,handleReset }) => {


	return (
		<div className='flex justify-between mt-8'>
			<div className={'mr-2'}>
				<label className='mr-2'>Color:</label>
				<Select value={color} onValueChange={setColor}>
					<SelectTrigger className='w-[180px]' >
						<SelectValue placeholder={color ? color : 'All'} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='all'>All</SelectItem>
						<SelectItem value='red'>Red</SelectItem>
						<SelectItem value='blue'>Blue</SelectItem>
						<SelectItem value='green'>Green</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className={'mr-2'}>
				<label className='mr-2'>Size:</label>
				<Select
					value={size} onValueChange={setSize}
				>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder={size ? size : 'All'} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='all'>All</SelectItem>
						<SelectItem value='small'>Small</SelectItem>
						<SelectItem value='medium'>Medium</SelectItem>
						<SelectItem value='large'>Large</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className={'mr-2'}>
				<label className='mr-2'>Sort by:</label>
				<Select
					value={sortOption} onValueChange={setSortOption}
				>
					<SelectTrigger className='w-[180px]'>
						<SelectValue
							placeholder={sortOption ? `Sort - ${sortOption}` : 'Default'}
						/>
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='priceAsc'>Price - Low to High</SelectItem>
						<SelectItem value='priceDesc'>Price - High to Low</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className={'flex items-end'}>
			<Button onClick={()=>handleReset()} className={'ml-2'}>Reset</Button>
			</div>
		</div>
	);
};

export default FilterSortBar;
