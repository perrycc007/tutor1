import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './CaseItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import SimpleAccordion from '../ui/SimpleAccordion'

function CaseItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);


  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      });
    }
  }

  return (
    <li>
      <div>
        <SimpleAccordion
          img = {props.image}
          title = {props.title}
          address = {props.address}
          description = {props.description}
          isFav = {itemIsFavorite}
          clicked = {toggleFavoriteStatusHandler}
        />
        </div>
    </li>
  );
}

export default CaseItem;
