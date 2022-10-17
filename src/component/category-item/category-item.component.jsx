import './category-item.styles.scss'

const CategoryItem = ({categories}) => {

    const {id,title,imageUrl,key}= categories;
    return (
            <div key={key} className="category-container">
              <div className="background-image" style={
                {
                backgroundImage: `url(${imageUrl})`
              }
              }>
              </div>
            <div className="category-body-container">
              <h2 key={id}>{title}</h2>
              <p>Shop Now</p>
            </div>     
          </div>
        )}

export default CategoryItem;