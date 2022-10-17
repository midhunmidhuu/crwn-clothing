import CategoryItem from '../category-item/category-item.component';
import './categories-menu.styles.scss'

const CategoriesMenu = ({categories}) => {
    return (
        <div className="categories-container">
          {categories.map((category)=>(
            <CategoryItem categories={category} />
            ))}
        </div>
      );}

export default CategoriesMenu;